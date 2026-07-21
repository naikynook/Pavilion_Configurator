import type {
  BaseHeightFt,
  PlacementKind,
  PrimitiveDefinition,
  PrimitiveTypeId,
} from '../types'

export const GRID_CELL_SIZE = 1

/** Side length of a single 4×4 module in feet / grid cells */
export const MODULE_4_SIZE = 4

/** Steel frame height in feet (above the plywood base) */
export const STEEL_HEIGHT_FT = 8

/** Visual thickness of wall panels (¾″ plywood ≈ 0.0625 ft; slightly exaggerated) */
export const PANEL_THICKNESS_FT = 0.08

/** Trim panels slightly so they clear the steel tubing */
export const PANEL_EDGE_CLEARANCE_FT = 0.12

export const BASE_HEIGHT_OPTIONS: Array<{ value: BaseHeightFt; label: string }> = [
  { value: 1, label: '1 ft' },
  { value: 2, label: '2 ft' },
  { value: 3, label: '3 ft' },
]

export const PRIMITIVE_DEFINITIONS: PrimitiveDefinition[] = [
  {
    id: 'block',
    name: '4×4 Frame',
    description: '4 × 4 ft steel frame',
    size: [4, STEEL_HEIGHT_FT, 4],
    color: '#A08060',
    materialLabel: '4×4 pavilion module',
    kind: 'module',
    modelUrl: '/models/4x4-opt.glb',
  },
  {
    id: 'block4x8',
    name: '4×8 Frame',
    description: '4 × 8 ft steel frame (also from two connected 4×4s)',
    size: [4, STEEL_HEIGHT_FT, 8],
    color: '#A08060',
    materialLabel: '4×8 pavilion module',
    kind: 'module',
    modelUrl: '/models/4x8-opt.glb',
  },
  {
    id: 'block8',
    name: '8×8 Frame',
    description: '8 × 8 ft steel frame',
    size: [8, STEEL_HEIGHT_FT, 8],
    color: '#A08060',
    materialLabel: '8×8 pavilion module',
    kind: 'module',
    modelUrl: '/models/8x8-opt.glb',
  },
  {
    id: 'panel4x8',
    name: '4×8 Wall Panel',
    description: 'Panel.glb trimmed to a 4 ft wall bay with bolt holes',
    size: [4, STEEL_HEIGHT_FT, PANEL_THICKNESS_FT],
    color: '#D4C4A8',
    materialLabel: '4×8 wall panel',
    kind: 'wallAttach',
    requiredWallWidth: 4,
    modelUrl: '/models/Panel.glb',
  },
  {
    id: 'panel8x8',
    name: '8×8 Wall Panel',
    description: 'Panel.glb for an 8 ft wall bay with bolt holes',
    size: [8, STEEL_HEIGHT_FT, PANEL_THICKNESS_FT],
    color: '#D4C4A8',
    materialLabel: '8×8 wall panel',
    kind: 'wallAttach',
    requiredWallWidth: 8,
    modelUrl: '/models/Panel.glb',
  },
  {
    id: 'bench',
    name: 'Wall Bench',
    description: 'Low plywood bench — auto-orients to the nearest wall',
    size: [8, 1.33, 1.5],
    color: '#CDB892',
    materialLabel: 'Wall bench',
    kind: 'wallAttach',
  },
  {
    id: 'podium',
    name: 'Pedestal Table',
    description: 'Plywood pedestal table — place freely on the floor',
    size: [2.5, 3, 1.75],
    color: '#C4A882',
    materialLabel: 'Pedestal table',
    kind: 'free',
  },
]

export const FRAME_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter((d) => d.kind === 'module')
export const PANEL_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter(
  (d) => d.id === 'panel4x8' || d.id === 'panel8x8',
)
export const FURNITURE_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter(
  (d) => d.id === 'bench' || d.id === 'podium',
)

export function getPrimitiveDefinition(id: string) {
  return PRIMITIVE_DEFINITIONS.find((p) => p.id === id)
}

export function getPlacementKind(typeId: PrimitiveTypeId): PlacementKind {
  return getPrimitiveDefinition(typeId)?.kind ?? 'module'
}

export function isModuleType(typeId: PrimitiveTypeId) {
  return getPlacementKind(typeId) === 'module'
}

/** Full placed module size: footprint × (base + steel height). */
export function getModuleSize(
  typeId: PrimitiveTypeId,
  baseHeight: BaseHeightFt,
  footprint?: [number, number],
): [number, number, number] | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def) return null
  if (def.kind !== 'module') {
    return [...def.size]
  }
  const w = footprint?.[0] ?? def.size[0]
  const d = footprint?.[1] ?? def.size[2]
  return [w, baseHeight + STEEL_HEIGHT_FT, d]
}

export function getPlaceSize(
  typeId: PrimitiveTypeId,
  baseHeight: BaseHeightFt,
): [number, number, number] | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def) return null
  if (def.kind === 'module') return getModuleSize(typeId, baseHeight)
  return [...def.size]
}

export function formatDimensions(size: [number, number, number]) {
  const [w, h, d] = size
  return `${w} × ${h} × ${d} ft`
}

/** Local steel model size before rotation (4×8 GLB is authored as 4×H×8). */
export function getModelLocalSize(
  typeId: string,
): [number, number, number] | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def?.modelUrl) return null
  if (typeId === 'block4x8') return [4, STEEL_HEIGHT_FT, 8]
  if (typeId === 'panel4x8') {
    return [
      4 - PANEL_EDGE_CLEARANCE_FT,
      STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT,
      PANEL_THICKNESS_FT,
    ]
  }
  if (typeId === 'panel8x8') {
    return [
      8 - PANEL_EDGE_CLEARANCE_FT,
      STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT,
      PANEL_THICKNESS_FT,
    ]
  }
  if (def.kind === 'module') {
    return [def.size[0], STEEL_HEIGHT_FT, def.size[2]]
  }
  return null
}

/** Panel mesh local size for a given wall width (feet). */
export function getPanelLocalSize(wallWidth: number): [number, number, number] {
  return [
    wallWidth - PANEL_EDGE_CLEARANCE_FT,
    STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT,
    PANEL_THICKNESS_FT,
  ]
}
