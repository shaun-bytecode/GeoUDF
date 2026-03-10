#!/usr/bin/env bash
# GeoUDF Web Application Startup Script (Linux / macOS / WSL)

set -e

# Change to the GeoUDF project root (parent of this script's directory)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "============================================================"
echo "  GeoUDF 三维重建可视化平台"
echo "  Project root: $PROJECT_ROOT"
echo "  Starting web server at http://localhost:8000"
echo "============================================================"
echo

cd "$PROJECT_ROOT"

# Check / install requirements
python -c "import uvicorn" 2>/dev/null || {
    echo "[WARN] uvicorn not found. Installing requirements..."
    pip install -r web_app/requirements.txt
}

# Launch the server
python -m uvicorn web_app.server:app --host 0.0.0.0 --port 8000 --reload
