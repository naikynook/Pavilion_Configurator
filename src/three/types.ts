import type { BoundingBox, PlacedPrimitive, PrimitiveTypeId, ToolMode } from '../types'

export interface DesignState {
  boundingBox: BoundingBox
  primitives: PlacedPrimitive[]
  activeTool: ToolMode
  activePrimitiveType: PrimitiveTypeId | null
  selectedPrimitiveId: string | null
  hoverGrid: { x: number; z: number } | null
  placementValid: boolean
}
