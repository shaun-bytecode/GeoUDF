# GeoUDF Vue Frontend — Build Instructions

## Requirements

- Node.js >= 18
- npm >= 9

## Development (with hot reload)

```bash
cd web_app/vue_frontend
npm install
npm run dev
```

The dev server runs on http://localhost:3000 and proxies API calls to the
FastAPI backend at http://localhost:8000. Start the backend first:

```bash
# In a separate terminal, from the project root
cd web_app
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

## Production Build

```bash
cd web_app/vue_frontend
npm install
npm run build
```

The build output is written to `web_app/static/dist/`.
FastAPI's `server.py` automatically detects and serves this directory at `/`.

## Preview Production Build Locally

```bash
npm run preview
```

Serves the built app at http://localhost:3000 (no proxy — backend must be
reachable at the same origin or CORS must be configured).

## File Structure

```
vue_frontend/
├── package.json          # Dependencies: vue, three, vite, @vitejs/plugin-vue
├── vite.config.js        # Build config, dev proxy to :8000, output → static/dist
├── index.html            # HTML entry point (loads Inter font from Google Fonts)
└── src/
    ├── main.js           # Vue app mount
    ├── style.css         # Global CSS reset + scrollbar + transition utilities
    ├── App.vue           # Root component — layout, state, WS reconstruction
    └── components/
        ├── TheHeader.vue     # Top bar: logo, sync toggle, connection status
        ├── TheSidebar.vue    # File list, upload, reconstruction settings + progress
        ├── ThreeViewer.vue   # Three.js PLY/OBJ viewer with OrbitControls
        └── MetricsPanel.vue  # Collapsible metrics dashboard with canvas chart
```

## Supported File Formats

| Format | Viewer support |
|--------|---------------|
| .ply   | Point clouds (vertex colors) + indexed meshes |
| .obj   | Mesh geometry |

## Design System

- Background: linear-gradient(135deg, #EEF2FF, #F0F9FF, #F5F3FF)
- Glass panels: rgba(255,255,255,0.7) + backdrop-filter blur
- Primary: #6366F1 (indigo) — left viewer, actions
- Accent: #06B6D4 (cyan) — right viewer
- Font: Inter (Google Fonts)