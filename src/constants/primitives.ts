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

/**
 * Authored steel AABB height in the connected module GLBs (ft), before
 * fitObjectToSize scales it to STEEL_HEIGHT_FT. Panel must use the same
 * vertical scale or it overshoots the top rail.
 */
export const STEEL_AUTHOR_HEIGHT_FT = 8.168434

/** Authored 8×8 steel footprint span (ft) before inset fitting */
export const STEEL_AUTHOR_SPAN_FT = 8

/**
 * How far the steel frame sits in from the plywood base outer edge (ft).
 * ~1″ lip — steel stays essentially full module length (e.g. 8 ft on an 8×8).
 */
export const STEEL_EDGE_INSET_FT = 0.085

/**
 * After fitObjectToSize sits on screw tips (mesh minY), foot-plate bottoms
 * still sit ~0.147 ft (~1.76″) above y=0 in the optimized GLBs. Negative lift
 * drops the whole frame so plates land flush on the plywood lid.
 */
export const STEEL_FOOT_LIFT_FT = -0.147

/** Visual thickness of wall panels (¾″ plywood) */
export const PANEL_THICKNESS_FT = 0.75 / 12

/**
 * Authored 8×8 wall panel (Wall Panel 8x8.obj) — slightly under a full
 * 8×8 bay so it seats against the steel posts.
 */
export const PANEL_WIDTH_FT = 90.5 / 12
export const PANEL_HEIGHT_FT = 89.75 / 12

/** Bottom of panel sits 1½″ above the plywood lid */
export const PANEL_BASE_LIFT_FT = 1.5 / 12

/**
 * Author-space distance from the steel AABB outer edge to the vertical
 * tube’s outer face (ft). Foot/XYZ plates pad the AABB ~2½″ past the tube.
 * Scale by fitted steel span / STEEL_AUTHOR_SPAN_FT.
 */
export const STEEL_AUTHOR_OUTER_FACE_FT = 2.48 / 12

/** Fitted distance from steel AABB edge to tube outer face (ft). */
export function steelOuterFaceOffsetFt(wallWidth = 8) {
  const steelW = Math.max(wallWidth - 2 * STEEL_EDGE_INSET_FT, 1)
  return STEEL_AUTHOR_OUTER_FACE_FT * (steelW / STEEL_AUTHOR_SPAN_FT)
}

/** Vertical scale applied to the panel so it matches fitted steel height */
export function panelHeightScale() {
  return STEEL_HEIGHT_FT / STEEL_AUTHOR_HEIGHT_FT
}

/** Display size of the wall panel after matching the fitted steel frame */
export function getPanelDisplaySize(
  wallWidth = 8,
): [number, number, number] {
  const steelW = Math.max(wallWidth - 2 * STEEL_EDGE_INSET_FT, 1)
  const sx = steelW / STEEL_AUTHOR_SPAN_FT
  const sy = panelHeightScale()
  return [PANEL_WIDTH_FT * sx, PANEL_HEIGHT_FT * sy, PANEL_THICKNESS_FT]
}

/** @deprecated panels no longer use edge trim clearance */
export const PANEL_EDGE_CLEARANCE_FT = 0

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
    // Full hand-modeled 4×4 with feet + XYZ baked in (dark lid stripped at compose)
    modelUrl: '/3d-models/4x4-opt.glb',
  },
  {
    id: 'block4x8',
    name: '4×8 Frame',
    description: '4 × 8 ft steel frame (also from two connected 4×4s)',
    size: [4, STEEL_HEIGHT_FT, 8],
    color: '#A08060',
    materialLabel: '4×8 pavilion module',
    kind: 'module',
    modelUrl: '/3d-models/4x8-opt.glb',
  },
  {
    id: 'block8',
    name: '8×8 Frame',
    description: '8 × 8 ft steel frame',
    size: [8, STEEL_HEIGHT_FT, 8],
    color: '#A08060',
    materialLabel: '8×8 pavilion module',
    kind: 'module',
    modelUrl: '/3d-models/8x8-opt.glb',
  },
  {
    id: 'panel8x8',
    name: '8×8 Wall Panel',
    description:
      'Two ¾″ plywood sheets (~90″ tall) — on an exterior wall or flat on top of an 8×8 frame',
    size: [PANEL_WIDTH_FT, PANEL_HEIGHT_FT, PANEL_THICKNESS_FT],
    color: '#D4C4A8',
    materialLabel: '8×8 wall panel',
    kind: 'wallAttach',
    requiredWallWidth: 8,
    modelUrl: '/3d-models/wall-panel-8x8-opt.glb',
  },
  {
    id: 'stool',
    name: 'Stool',
    description:
      '18″ plywood stool — snaps to a free quadrant on a 4×4 base (clears steel, feet, and seams)',
    size: [1.5, 18.75 / 12, 1.5],
    color: '#CDB892',
    materialLabel: 'Stool',
    kind: 'baseAttach',
    modelUrl: '/3d-models/stool-opt.glb',
  },
]

export const FRAME_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter((d) => d.kind === 'module')
export const PANEL_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter(
  (d) => d.id === 'panel8x8',
)

export const FURNITURE_DEFINITIONS = PRIMITIVE_DEFINITIONS.filter(
  (d) => d.id === 'stool',
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

/** Local steel / panel model size before rotation. */
export function getModelLocalSize(
  typeId: string,
): [number, number, number] | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def?.modelUrl) return null
  if (typeId === 'block4x8') return [4, STEEL_HEIGHT_FT, 8]
  if (typeId === 'panel8x8') {
    return getPanelDisplaySize(8)
  }
  if (def.kind === 'module') {
    return [def.size[0], STEEL_HEIGHT_FT, def.size[2]]
  }
  return null
}

/** Display size of the 8×8 wall panel after matching fitted steel. */
export function getPanelLocalSize(
  wallWidth = 8,
): [number, number, number] {
  return getPanelDisplaySize(wallWidth)
}
