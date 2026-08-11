# Asset pipeline

Scripts that rebuild the website’s optimized 3D models from Rhino / OBJ sources.
**Not required to run the site** — only needed if you re-export geometry from CAD.

| Script | What it does |
|--------|----------------|
| `optimize-4x4.mjs` | Compress a module GLB from `source-models/` → `public/3d-models/*-opt.glb` |
| `optimize-connected-modules.mjs` | OBJ → steel module GLBs (strips plywood, Draco) |
| `optimize-connections-obj.mjs` | Extract foot / XYZ connector GLBs |
| `optimize-wall-panel.mjs` | Wall panel OBJ → optimized GLB |
| `optimize-stool.mjs` | Stool OBJ → optimized GLB |

## Folders

- **`source-models/`** — Large unoptimized GLBs used as script inputs (not loaded by the website).
- **`temp/`** — Intermediate OBJ cleanup cache (gitignored; created when scripts run).

## Examples

```bash
npm run optimize:models
npm run optimize:stool
node --max-old-space-size=8192 asset-pipeline/optimize-connected-modules.mjs 4x4
```
