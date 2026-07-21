export type ToolMode = 'select' | 'place'

export type PrimitiveTypeId =
  | 'block'
  | 'block4x8'
  | 'block8'
  | 'panel4x8'
  | 'panel8x8'
  | 'bench'
  | 'podium'

/** How the item is placed in the scene */
export type PlacementKind = 'module' | 'wallAttach' | 'free'

/** Wall face of a host module (north = +Z) */
export type WallFace = 'north' | 'south' | 'east' | 'west'

/** Plywood plinth height under the steel frame (feet) */
export type BaseHeightFt = 1 | 2 | 3

export interface PrimitiveDefinition {
  id: PrimitiveTypeId
  name: string
  description: string
  /**
   * Default footprint / extent in feet.
   * Modules: W × steel H × D. Free: W × H × D. Wall items: nominal wall W × H × thickness.
   */
  size: [number, number, number]
  color: string
  materialLabel: string
  kind: PlacementKind
  /** Optional GLB model path (served from /public) */
  modelUrl?: string
  /**
   * For wall panels / benches: required host wall width in feet (4 or 8).
   * Bench omits this and fits whichever wall is selected.
   */
  requiredWallWidth?: 4 | 8
}

export interface PlacedPrimitive {
  id: string
  typeId: PrimitiveTypeId
  gridX: number
  gridZ: number
  /** World / footprint size used for placement & selection */
  size: [number, number, number]
  /** Plywood base height (host’s base for wall items; unused for free furniture) */
  baseHeight?: BaseHeightFt
  /** Y-rotation in radians */
  rotationY?: number
  /** Host module for wall-attached panels / benches */
  hostId?: string
  face?: WallFace
}

export interface BoundingBox {
  width: number
  depth: number
  height: number
}

export interface MaterialSummary {
  typeId: PrimitiveTypeId
  name: string
  dimensions: string
  count: number
  materialLabel: string
}

export interface WallAttachmentTarget {
  hostId: string
  face: WallFace
  /** World-space center of the attachment */
  center: { x: number; y: number; z: number }
  rotationY: number
  /** Size of the placed item at this attachment */
  size: [number, number, number]
  wallWidth: number
}
