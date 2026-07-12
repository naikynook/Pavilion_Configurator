# Pavilion Configurator

A modular pavilion configurator for DIYers — design, customize, and build your own outdoor structure with an intuitive 3D workspace and practical material guidance.

## Overview

The Pavilion Configurator is a web-based design tool that lets DIY builders plan and visualize custom pavilion structures before cutting a single piece of lumber. Users define their build space, assemble modular components, and receive real-time feedback on materials, dimensions, and assembly instructions.

The app is built around a three-panel layout: a left toolbox for design actions, a central 3D canvas for spatial planning, and a right panel for materials, downloads, and purchasing links.

## Target Audience

- **DIY builders** planning backyard pavilions, pergolas, or shade structures
- **Hobbyists** who want visual confirmation before committing to materials
- **First-time builders** who need clear dimensions, cut lists, and step-by-step guidance

## Layout

```
┌─────────────────┬──────────────────────────────┬─────────────────┐
│                 │                              │                 │
│   Left Sidebar  │        3D Canvas             │  Right Sidebar  │
│   (Toolbox)     │        (Center)              │  (Materials)    │
│                 │                              │                 │
└─────────────────┴──────────────────────────────┴─────────────────┘
```

### Left Sidebar — Toolbox

The left sidebar is the primary design control panel. It contains a toolbox of functions and modules that drive what appears in the 3D canvas.

**Core tools (initial):**

- **Draw 3D bounding box** — Define the overall footprint and height of the pavilion site. This establishes the spatial constraints within which all modules must fit.
- **Module library** — A growing set of pre-defined building blocks (posts, beams, rafters, roofing panels, connectors, etc.) that users can place, rotate, and combine within the bounding box.

**Planned behavior:**

- Tools are grouped by category (site setup, structure, roofing, accessories)
- Selecting a tool activates a corresponding interaction mode in the 3D canvas
- Modules snap to grid or structural anchors where appropriate
- Users can add, remove, duplicate, and rearrange modules within the bounding box

Additional modules and tools will be added over time as the library expands.

### Center — 3D Canvas

The 3D canvas is the main workspace. It renders the pavilion in real time as the user designs.

**Responsibilities:**

- Display the bounding box and all placed modules in three dimensions
- Support orbit, pan, and zoom for inspection from any angle
- Reflect changes from the left toolbox immediately
- Provide visual feedback for selection, hover, and invalid placements
- Scale accurately so dimensions shown in the right panel match what is rendered

### Right Sidebar — Materials & Downloads

The right sidebar surfaces everything a builder needs to move from design to construction.

**Materials summary:**

- Live calculation of materials required based on the current design
- Quantities by type (e.g., lumber dimensions, fasteners, hardware)
- Estimated totals where pricing data is available

**Downloads & exports:**

- Instruction files (assembly guides, step-by-step PDFs)
- Dimension sheets and cut lists for each material
- Exportable project files for reference or sharing

**Purchasing:**

- Links to buy recommended materials from suppliers
- SKU or product references where applicable

## User Flow

1. **Define the site** — Draw a 3D bounding box to set footprint and height limits.
2. **Add modules** — Select components from the toolbox and place them in the canvas.
3. **Review & adjust** — Orbit the model, refine placement, and iterate on the design.
4. **Check materials** — Review the right sidebar for quantities, dimensions, and cost estimates.
5. **Download & build** — Export instructions, cut lists, and purchase materials.

## Module System

Modules are the building blocks of the configurator. Each module represents a real-world constructible unit — a post, a beam, a bracket, a roof panel, etc.

**Module properties (planned):**

| Property        | Description                                      |
|-----------------|--------------------------------------------------|
| Name            | Human-readable label                             |
| Geometry        | 3D representation and bounding dimensions      |
| Materials       | Lumber sizes, hardware, and fasteners required   |
| Constraints     | Placement rules (snap points, max span, etc.)    |
| Instructions    | Assembly steps specific to this module           |

Modules will be added incrementally. The architecture should support plugging in new module definitions without restructuring the app.

## Technical Considerations

- **3D rendering** — WebGL-based viewer (e.g., Three.js or React Three Fiber) for performant in-browser 3D
- **State management** — Central design state linking canvas, toolbox, and materials panel
- **Material calculation** — Derived from the current module graph; updates reactively as the design changes
- **Export pipeline** — Generate PDFs and dimension sheets from the active design state

## Future Enhancements

- Save and load projects
- Shareable design links
- Preset pavilion templates (e.g., 10×12 pergola, corner pavilion)
- Structural validation warnings (span limits, load considerations)
- Imperial and metric unit toggle
- Mobile-friendly read-only view for on-site reference

## Open Items

- [ ] Define initial module library (posts, beams, rafters, etc.)
- [ ] Specify material suppliers and affiliate/purchase links
- [ ] Design instruction file templates
- [ ] Choose 3D rendering stack
- [ ] Define bounding box interaction (click-drag, numeric input, or both)
