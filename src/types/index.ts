export type ToolMode = 'select' | 'place'

export type PrimitiveTypeId =
  | 'block'
  | 'block4x8'
  | 'block8'
  | 'panel8x8'
  | 'stool'

/** How the item is placed in the scene */
export type PlacementKind =
  | 'module'
  | 'wallAttach'
  | 'baseAttach'
  | 'free'

/** Wall / roof face of a host module (north = +Z, top = roof) */
export type WallFace = 'north' | 'south' | 'east' | 'west' | 'top'


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
   * For wall panels: required host wall width in feet (4 or 8).
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
  /** Host module for wall panels / stools */
  hostId?: string
  face?: WallFace
  /** For stools: which quadrant of the 4×4 base cell */
  corner?: ModuleCorner
  /** For stools: 4×4 cell index on the host module */
  cellIx?: number
  cellIz?: number
  /**
   * Reserved (legacy bench along-wall offset). Unused for stools/panels.
   */
  attachAlong?: number
  /**
   * Wall panel paint. Hex string (e.g. `#c45c26`) for a solid color;
   * omit / undefined for natural plywood texture.
   */
  color?: string
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
  /** Wall face for panels */
  face?: WallFace
  /** Quadrant for stools on a 4×4 base cell */
  corner?: ModuleCorner
  /** 4×4 base cell on the host for stools */
  cellIx?: number
  cellIz?: number
  /** World-space origin of the attachment (panel/stool local origin) */
  center: { x: number; y: number; z: number }
  rotationY: number
  /** Extra tilt (e.g. −90° so a wall panel lies flat on the roof) */
  rotationX?: number
  /** Optional non-uniform scale */
  scale?: [number, number, number]
  /** Size of the placed item at this attachment */
  size: [number, number, number]
  wallWidth: number
  /** Legacy bench along-wall offset */
  attachAlong?: number
}
