export type ToolMode = 'select' | 'place'

export type PrimitiveTypeId = 'post' | 'beam' | 'panel' | 'block' | 'block8'

export interface PrimitiveDefinition {
  id: PrimitiveTypeId
  name: string
  description: string
  /** Width × height × depth in feet (1 grid unit = 1 foot) */
  size: [number, number, number]
  color: string
  materialLabel: string
  /** Optional GLB model path (served from /public) */
  modelUrl?: string
}

export interface PlacedPrimitive {
  id: string
  typeId: PrimitiveTypeId
  gridX: number
  gridZ: number
  size: [number, number, number]
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
