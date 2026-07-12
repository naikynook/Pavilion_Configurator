# Pavilion Configurator

A modular pavilion configurator for DIYers with a 3D design canvas, toolbox, and live materials panel.

## Quick start (Windows)

**Double-click `start.bat`** in the project folder.

It will install dependencies (first run only) and open `http://localhost:5173`.

## Manual start

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## Important — avoid a blank / loading screen

| Do this | Don't do this |
|---------|----------------|
| Run `start.bat` or `npm run dev` | Open `index.html` directly |
| Visit `http://localhost:5173` | Use VS Code Live Server |
| Wait for terminal to show the local URL | Double-click `index.html` in Explorer |

If you only see "Loading Pavilion Configurator…" forever, you are not using the Vite dev server.

After 4 seconds the page will show setup instructions if the app fails to start.

## Troubleshooting

**Stuck on loading**
1. Close the browser tab
2. Double-click `start.bat`
3. Wait for `npm install` to finish (first time only)
4. Browser should open to `http://localhost:5173`

**npm install fails**
- The project is in OneDrive, which can lock files. Try copying it to `C:\Projects\Pavilion_Configurator` and run `start.bat` there.

**Node not found**
- Install Node.js from https://nodejs.org/, restart your terminal, then run `start.bat` again.

## GitHub Pages deployment

GitHub Pages only serves **built** static files — it cannot run `npm run dev` or compile TypeScript. A deploy workflow is included.

### One-time setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push to `main` (or run the "Deploy to GitHub Pages" workflow manually)

After the workflow succeeds, your site will be live at:

`https://<your-username>.github.io/<repo-name>/`

### How it works

- `.github/workflows/deploy.yml` runs `npm run build` on every push to `main`
- The built `dist/` folder is deployed to GitHub Pages
- `VITE_BASE_PATH` is set automatically to match your repo name

## Build

```bash
npm run build
npm run preview
```

## Features

- **3D canvas** — Orbit, pan, and zoom
- **Bounding box** — Adjustable site dimensions
- **Grid placement** — Snap box primitives to a 1-unit grid
- **Materials panel** — Live bill of materials

## Controls

| Action | Input |
|--------|-------|
| Orbit camera | Left-drag |
| Pan camera | Right-drag |
| Zoom | Scroll wheel |
| Place primitive | Select from toolbox, click grid |
| Delete selected | Delete or Backspace |

## Tech stack

- React + TypeScript + Vite
- Three.js
- Zustand
