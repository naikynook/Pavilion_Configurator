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

Live site: **https://naikynook.github.io/Pavilion_Configurator/**

### One-time setup (required)

1. Push to `main` — the deploy workflow builds the app and puts it in the **`docs/`** folder
2. Open **[Settings → Pages](https://github.com/naikynook/Pavilion_Configurator/settings/pages)**
3. Set **Branch** to `main` and **Folder** to **`/docs`** (not `/ (root)`)
4. Click **Save**, wait 1–2 minutes, hard-refresh the site

```
Branch:  main
Folder:  /docs     ← must be /docs, NOT / (root)
```

**Why `/docs`?** The project source lives at the repo root. The built website is in `docs/`. Serving `/ (root)` shows raw source files and causes the endless loading screen.

### After each push to main

The workflow rebuilds and updates `docs/` automatically. No manual steps needed.

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
