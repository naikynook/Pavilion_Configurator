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

The deploy workflow builds the app and publishes it to the **`gh-pages` branch only**. It does **not** commit back to `main`, so you can push without pulling first.

### One-time Pages setting

In **[Settings → Pages](https://github.com/naikynook/Pavilion_Configurator/settings/pages)**:

- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

After pushing source changes, wait for the Actions workflow to finish, then hard-refresh the site.

### Git workflow

```bash
git add .
git commit -m "your message"
git push origin main
```

No need to pull before every push unless you edited the repo on GitHub directly.

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
