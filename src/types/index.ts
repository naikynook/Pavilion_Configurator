export type ToolMode = 'select' | 'place'

export type PrimitiveTypeId = 'post' | 'beam' | 'panel' | 'block'

export interface PrimitiveDefinition {
  id: PrimitiveTypeId
  name: string
  description: string
  size: [number, number, number]
  color: string
  materialLabel: string
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
