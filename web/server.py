"""
GeoUDF Web Application Backend
FastAPI server for 3D point cloud reconstruction visualization
"""

import os
import sys
import uuid
import asyncio
import subprocess
import json
import re
from pathlib import Path
from typing import Dict, Optional, List
from datetime import datetime

import aiofiles
import pandas as pd
import numpy as np

from fastapi import FastAPI, UploadFile, File, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# ---------------------------------------------------------------------------
# Path configuration
# ---------------------------------------------------------------------------
# server.py lives in web_app/, project root is one level up
WEB_APP_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = WEB_APP_DIR.parent

INPUT_DIR    = PROJECT_ROOT / "input"
OUTPUT_DIR   = PROJECT_ROOT / "output"
TEST_DATA_DIR = PROJECT_ROOT / "test_data"
STATIC_DIR   = WEB_APP_DIR / "static"

# Ensure directories exist
INPUT_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------
app = FastAPI(title="GeoUDF 三维重建可视化平台", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# Serve Vue build assets (JS/CSS chunks) from static/dist/assets
_vue_dist = STATIC_DIR / "dist"
if _vue_dist.exists():
    from fastapi.staticfiles import StaticFiles as _SF
    app.mount("/assets", _SF(directory=str(_vue_dist / "assets")), name="vue-assets")

# ---------------------------------------------------------------------------
# In-memory task store
# ---------------------------------------------------------------------------
tasks: Dict[str, dict] = {}

# ---------------------------------------------------------------------------
# Helper models
# ---------------------------------------------------------------------------
class ReconstructRequest(BaseModel):
    input_file: str          # relative path from project root or just filename
    resolution: int = 128
    dense: bool = False
    output_name: Optional[str] = None


# ---------------------------------------------------------------------------
# Utilities
# ---------------------------------------------------------------------------
ALLOWED_EXTENSIONS = {".ply", ".obj"}

def is_allowed(filename: str) -> bool:
    return Path(filename).suffix.lower() in ALLOWED_EXTENSIONS


def list_ply_files(directory: Path) -> List[dict]:
    """Return metadata for each PLY/OBJ file in directory."""
    results = []
    if not directory.exists():
        return results
    for f in sorted(directory.iterdir()):
        if f.suffix.lower() in ALLOWED_EXTENSIONS:
            stat = f.stat()
            results.append({
                "name": f.name,
                "path": str(f.relative_to(PROJECT_ROOT)).replace("\\", "/"),
                "size": stat.st_size,
                "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                "directory": directory.name,
            })
    return results


def parse_progress(line: str) -> Optional[int]:
    """
    Try to extract a 0-100 progress integer from a tqdm or custom log line.
    Patterns tried:
      - tqdm:  " 45%|████      | 45/100 ..."
      - custom: "Progress: 45%"  or  "45/100"
    """
    # tqdm style "  45%|"
    m = re.search(r'\b(\d{1,3})%\|', line)
    if m:
        return min(int(m.group(1)), 100)
    # "45%" standalone
    m = re.search(r'\b(\d{1,3})%', line)
    if m:
        v = int(m.group(1))
        if 0 <= v <= 100:
            return v
    # "45/100" fraction
    m = re.search(r'\b(\d+)/(\d+)\b', line)
    if m:
        num, den = int(m.group(1)), int(m.group(2))
        if den > 0 and num <= den:
            return int(num / den * 100)
    return None


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    # Prefer the built Vue frontend dist if it exists
    vue_dist_index = STATIC_DIR / "dist" / "index.html"
    if vue_dist_index.exists():
        async with aiofiles.open(vue_dist_index, "r", encoding="utf-8") as f:
            content = await f.read()
        return HTMLResponse(content=content)
    # Fallback to legacy static/index.html
    index_path = STATIC_DIR / "index.html"
    if not index_path.exists():
        raise HTTPException(status_code=404, detail="index.html not found")
    async with aiofiles.open(index_path, "r", encoding="utf-8") as f:
        content = await f.read()
    return HTMLResponse(content=content)


@app.get("/api/files")
async def list_files():
    """List PLY/OBJ files in input/ and test_data/ directories."""
    input_files    = list_ply_files(INPUT_DIR)
    test_files     = list_ply_files(TEST_DATA_DIR)
    return {
        "input": input_files,
        "test_data": test_files,
        "total": len(input_files) + len(test_files),
    }


@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload a PLY/OBJ file into the input/ directory."""
    if not is_allowed(file.filename):
        raise HTTPException(status_code=400, detail="Only .ply and .obj files are accepted.")

    safe_name = Path(file.filename).name  # strip directory components
    dest = INPUT_DIR / safe_name
    # Avoid overwrite – append counter if needed
    counter = 1
    stem = Path(safe_name).stem
    suffix = Path(safe_name).suffix
    while dest.exists():
        dest = INPUT_DIR / f"{stem}_{counter}{suffix}"
        counter += 1

    async with aiofiles.open(dest, "wb") as out:
        while chunk := await file.read(1024 * 256):
            await out.write(chunk)

    return {
        "success": True,
        "filename": dest.name,
        "path": str(dest.relative_to(PROJECT_ROOT)).replace("\\", "/"),
        "size": dest.stat().st_size,
    }


@app.post("/api/reconstruct")
async def start_reconstruction(req: ReconstructRequest):
    """
    Launch eval_rec.py as a subprocess and track it with a task_id.
    The input_file can be:
      - a bare filename (looked up in input/ then test_data/)
      - a relative path from project root   e.g. "input/foo.ply"
    """
    # Resolve input path
    candidate = PROJECT_ROOT / req.input_file.replace("\\", "/")
    if not candidate.exists():
        # Try as bare filename in input/
        candidate2 = INPUT_DIR / req.input_file
        if candidate2.exists():
            candidate = candidate2
        else:
            # Try test_data/
            candidate3 = TEST_DATA_DIR / req.input_file
            if candidate3.exists():
                candidate = candidate3
            else:
                raise HTTPException(status_code=404,
                                    detail=f"Input file not found: {req.input_file}")

    if req.resolution not in (128, 192, 256):
        raise HTTPException(status_code=400, detail="Resolution must be 128, 192, or 256.")

    # Build output path
    stem = candidate.stem
    ts   = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_name = req.output_name or f"{stem}_rec_{ts}.ply"
    if not out_name.endswith(".ply"):
        out_name += ".ply"
    output_path = OUTPUT_DIR / out_name

    task_id = str(uuid.uuid4())
    tasks[task_id] = {
        "id": task_id,
        "status": "queued",        # queued | running | done | error
        "progress": 0,
        "log": [],
        "input_file": str(candidate.relative_to(PROJECT_ROOT)).replace("\\", "/"),
        "output_file": None,
        "created": datetime.now().isoformat(),
        "error": None,
    }

    # Fire-and-forget coroutine
    asyncio.create_task(_run_reconstruction(task_id, candidate, output_path, req.resolution))

    return {"task_id": task_id, "status": "queued", "output_name": out_name}


@app.get("/api/task/{task_id}")
async def get_task(task_id: str):
    if task_id not in tasks:
        raise HTTPException(status_code=404, detail="Task not found.")
    return tasks[task_id]


@app.get("/api/results")
async def list_results():
    """List reconstructed meshes in output/ and test_data/ (mesh files)."""
    output_files = list_ply_files(OUTPUT_DIR)
    # Also expose test_data mesh files (those with _mesh in name)
    mesh_files = [f for f in list_ply_files(TEST_DATA_DIR) if "mesh" in f["name"].lower()]
    return {
        "output": output_files,
        "test_data_meshes": mesh_files,
    }


@app.get("/api/metrics")
async def get_metrics():
    """Return metrics from output/Full_Metric_Results.csv if it exists."""
    csv_path = OUTPUT_DIR / "Full_Metric_Results.csv"
    if not csv_path.exists():
        return {"available": False, "data": [], "summary": {}}
    try:
        df = pd.read_csv(csv_path)
        records = df.to_dict(orient="records")
        # Build numeric summary (mean of all numeric cols)
        numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        summary = {col: round(float(df[col].mean()), 6) for col in numeric_cols}
        return {"available": True, "data": records, "summary": summary}
    except Exception as e:
        return {"available": False, "error": str(e), "data": [], "summary": {}}


@app.get("/files/{filepath:path}")
async def serve_file(filepath: str):
    """Serve any file under the project root for download/streaming."""
    full_path = PROJECT_ROOT / filepath.replace("\\", "/")
    if not full_path.exists() or not full_path.is_file():
        raise HTTPException(status_code=404, detail="File not found.")
    # Security: ensure the resolved path is within project root
    try:
        full_path.resolve().relative_to(PROJECT_ROOT.resolve())
    except ValueError:
        raise HTTPException(status_code=403, detail="Access denied.")
    suffix = full_path.suffix.lower()
    media_type = "application/octet-stream"
    if suffix == ".ply":
        media_type = "application/octet-stream"
    elif suffix == ".obj":
        media_type = "text/plain"
    return FileResponse(path=str(full_path), media_type=media_type)


# ---------------------------------------------------------------------------
# WebSocket – real-time task progress
# ---------------------------------------------------------------------------

@app.websocket("/ws/{task_id}")
async def ws_task_progress(websocket: WebSocket, task_id: str):
    await websocket.accept()
    if task_id not in tasks:
        await websocket.send_json({"error": "Task not found"})
        await websocket.close()
        return

    try:
        last_log_len = 0
        while True:
            task = tasks.get(task_id, {})
            new_logs = task.get("log", [])[last_log_len:]
            last_log_len = len(task.get("log", []))

            payload = {
                "status": task.get("status"),
                "progress": task.get("progress", 0),
                "new_lines": new_logs,
                "output_file": task.get("output_file"),
                "error": task.get("error"),
            }
            await websocket.send_json(payload)

            if task.get("status") in ("done", "error"):
                break

            await asyncio.sleep(0.5)
    except WebSocketDisconnect:
        pass
    finally:
        try:
            await websocket.close()
        except Exception:
            pass


# ---------------------------------------------------------------------------
# Background reconstruction worker
# ---------------------------------------------------------------------------

async def _run_reconstruction(task_id: str, input_path: Path,
                               output_path: Path, resolution: int):
    task = tasks[task_id]
    task["status"] = "running"
    task["progress"] = 0
    task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Starting reconstruction...")
    task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Input:  {input_path}")
    task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Output: {output_path}")
    task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Resolution: {resolution}")

    cmd = [
        sys.executable,
        str(PROJECT_ROOT / "eval_rec.py"),
        f"--res={resolution}",
        f"--input={input_path}",
        f"--output={output_path}",
        "--scale=True",
    ]

    try:
        proc = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.STDOUT,
            cwd=str(PROJECT_ROOT),
        )

        # Phase markers for staged progress estimation
        PHASE_MARKERS = [
            ("Loading model",           5),
            ("pu_model",                10),
            ("udf_model",               15),
            ("dense_pc",                20),
            ("grids",                   25),
            ("custom_marching_cube",    60),
            ("mesh",                    85),
            ("export",                  92),
        ]

        last_progress = 0

        async def read_stream():
            nonlocal last_progress
            while True:
                raw = await proc.stdout.readline()
                if not raw:
                    break
                line = raw.decode("utf-8", errors="replace").rstrip()
                if not line:
                    continue

                # Try tqdm / fraction progress
                p = parse_progress(line)
                if p is not None and p > last_progress:
                    last_progress = p
                    task["progress"] = min(p, 95)
                else:
                    # Check phase markers
                    line_lower = line.lower()
                    for keyword, pct in PHASE_MARKERS:
                        if keyword.lower() in line_lower and pct > last_progress:
                            last_progress = pct
                            task["progress"] = pct
                            break

                ts = datetime.now().strftime("%H:%M:%S")
                task["log"].append(f"[{ts}] {line}")

        await read_stream()
        await proc.wait()

        if proc.returncode == 0:
            task["status"] = "done"
            task["progress"] = 100
            task["output_file"] = str(output_path.relative_to(PROJECT_ROOT)).replace("\\", "/")
            task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Reconstruction complete!")
            task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] Output saved: {output_path.name}")
        else:
            task["status"] = "error"
            task["error"] = f"Process exited with code {proc.returncode}"
            task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] ERROR: Process exited with code {proc.returncode}")

    except FileNotFoundError:
        task["status"] = "error"
        task["error"] = "eval_rec.py not found or Python not available."
        task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] ERROR: eval_rec.py not found.")
    except Exception as exc:
        task["status"] = "error"
        task["error"] = str(exc)
        task["log"].append(f"[{datetime.now().strftime('%H:%M:%S')}] ERROR: {exc}")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
