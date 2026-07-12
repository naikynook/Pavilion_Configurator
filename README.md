# Pavilion Configurator

A modular pavilion configurator for DIYers with a 3D design canvas, toolbox, and live materials panel.

## Getting started

Requires [Node.js](https://nodejs.org/) (v18 or later).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Features

- **3D canvas** — Orbit, pan, and zoom with React Three Fiber
- **Bounding box** — Adjustable width, depth, and height to define the build site
- **Grid placement** — Snap primitives to a 1-unit grid inside the bounding box
- **Primitives** — Post, beam, panel, and block modules (placeholder boxes for now)
- **Materials panel** — Live bill of materials based on placed primitives
- **Minimal UI** — Apple-inspired design per `STYLE.md`

## Project docs

- [`PROJECT_DESCRIPTION.md`](./PROJECT_DESCRIPTION.md) — Product overview and architecture
- [`STYLE.md`](./STYLE.md) — Design system and visual guidelines

## Controls

| Action | Input |
|--------|-------|
| Orbit camera | Left-drag on canvas |
| Pan camera | Right-drag on canvas |
| Zoom | Scroll wheel |
| Place primitive | Select from toolbox, click grid |
| Select primitive | Select tool, click object |
| Delete selected | Delete or Backspace key |

## Tech stack

- React + TypeScript + Vite
- React Three Fiber + drei
- Zustand (state management)
