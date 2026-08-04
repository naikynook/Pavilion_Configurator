export type ToolMode = 'select' | 'place'

export type PrimitiveTypeId =
  | 'block'
  | 'block4x8'
  | 'block8'
  | 'panel4x8'
  | 'panel8x8'
  | 'bench'
  | 'benchCorner'
  | 'podium'

/** How the item is placed in the scene */
export type PlacementKind =
  | 'module'
  | 'wallAttach'
  | 'cornerAttach'
  | 'free'

/** Wall face of a host module (north = +Z) */
export type WallFace = 'north' | 'south' | 'east' | 'west'

/** Outer corner of a host module footprint */
export type ModuleCorner = 'sw' | 'se' | 'nw' | 'ne'

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
  /** Host module for wall-attached panels / benches / corner benches */
  hostId?: string
  face?: WallFace
  /** For corner benches: which corner of the 4×4 base cell */
  corner?: ModuleCorner
  /** For corner benches: 4×4 cell index on the host module */
  cellIx?: number
  cellIz?: number
  /**
   * For benches: distance along the wall from the face’s min edge to the
   * bench center (feet). Lets multiple 4 ft benches share an 8 ft wall.
   */
  attachAlong?: number
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
  /** Wall face for panels/benches */
  face?: WallFace
  /** Corner for L-shaped corner benches */
  corner?: ModuleCorner
  /** 4×4 base cell on the host for corner benches */
  cellIx?: number
  cellIz?: number
  /** World-space center of the attachment */
  center: { x: number; y: number; z: number }
  rotationY: number
  /** Optional non-uniform scale (used to mirror corner benches) */
  scale?: [number, number, number]
  /** Size of the placed item at this attachment */
  size: [number, number, number]
  wallWidth: number
  /** Bench: along-wall center offset from face min edge (ft) */
  attachAlong?: number
}
