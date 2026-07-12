import { create } from 'zustand'
import { useMemo } from 'react'
import type {
  BoundingBox,
  MaterialSummary,
  PlacedPrimitive,
  PrimitiveTypeId,
  ToolMode,
} from '../types'
import {
  formatDimensions,
  getPrimitiveDefinition,
  PRIMITIVE_DEFINITIONS,
} from '../constants/primitives'

interface DesignState {
  boundingBox: BoundingBox
  primitives: PlacedPrimitive[]
  activeTool: ToolMode
  activePrimitiveType: PrimitiveTypeId | null
  selectedPrimitiveId: string | null
  hoverGrid: { x: number; z: number } | null
  placementValid: boolean

  setBoundingBox: (box: Partial<BoundingBox>) => void
  setActiveTool: (tool: ToolMode) => void
  setActivePrimitiveType: (typeId: PrimitiveTypeId | null) => void
  setHoverGrid: (grid: { x: number; z: number } | null, valid: boolean) => void
  selectPrimitive: (id: string | null) => void
  placePrimitive: (gridX: number, gridZ: number) => void
  removeSelected: () => void
  clearPrimitives: () => void
}

function occupiesCells(primitive: PlacedPrimitive) {
  const cells: Array<{ x: number; z: number }> = []
  const [w, , d] = primitive.size
  const wCells = Math.ceil(w)
  const dCells = Math.ceil(d)
  for (let x = primitive.gridX; x < primitive.gridX + wCells; x++) {
    for (let z = primitive.gridZ; z < primitive.gridZ + dCells; z++) {
      cells.push({ x, z })
    }
  }
  return cells
}

function getOccupiedCellSet(primitives: PlacedPrimitive[]) {
  const set = new Set<string>()
  for (const p of primitives) {
    for (const cell of occupiesCells(p)) {
      set.add(`${cell.x},${cell.z}`)
    }
  }
  return set
}

export function canPlacePrimitive(
  typeId: PrimitiveTypeId,
  gridX: number,
  gridZ: number,
  boundingBox: BoundingBox,
  primitives: PlacedPrimitive[],
  excludeId?: string,
) {
  const def = getPrimitiveDefinition(typeId)
  if (!def) return false

  const [w, h, d] = def.size
  const wCells = Math.ceil(w)
  const dCells = Math.ceil(d)
  if (gridX < 0 || gridZ < 0) return false
  if (gridX + wCells > boundingBox.width || gridZ + dCells > boundingBox.depth) return false
  if (h > boundingBox.height) return false

  const occupied = getOccupiedCellSet(
    excludeId ? primitives.filter((p) => p.id !== excludeId) : primitives,
  )

  for (let x = gridX; x < gridX + wCells; x++) {
    for (let z = gridZ; z < gridZ + dCells; z++) {
      if (occupied.has(`${x},${z}`)) return false
    }
  }

  return true
}

function buildMaterialSummary(primitives: PlacedPrimitive[]): MaterialSummary[] {
  const counts = new Map<PrimitiveTypeId, number>()
  for (const p of primitives) {
    counts.set(p.typeId, (counts.get(p.typeId) ?? 0) + 1)
  }

  return PRIMITIVE_DEFINITIONS.filter((def) => counts.has(def.id)).map((def) => ({
    typeId: def.id,
    name: def.name,
    dimensions: formatDimensions(def.size),
    count: counts.get(def.id) ?? 0,
    materialLabel: def.materialLabel,
  }))
}

export const useDesignStore = create<DesignState>((set, get) => ({
  boundingBox: { width: 10, depth: 10, height: 6 },
  primitives: [],
  activeTool: 'select',
  activePrimitiveType: null,
  selectedPrimitiveId: null,
  hoverGrid: null,
  placementValid: false,

  setBoundingBox: (box) =>
    set((state) => ({
      boundingBox: { ...state.boundingBox, ...box },
    })),

  setActiveTool: (tool) =>
    set({
      activeTool: tool,
      activePrimitiveType: tool === 'place' ? get().activePrimitiveType : null,
      selectedPrimitiveId: tool === 'place' ? null : get().selectedPrimitiveId,
    }),

  setActivePrimitiveType: (typeId) =>
    set({
      activePrimitiveType: typeId,
      activeTool: typeId ? 'place' : 'select',
      selectedPrimitiveId: null,
    }),

  setHoverGrid: (grid, valid) =>
    set((state) => {
      const sameGrid =
        state.hoverGrid?.x === grid?.x && state.hoverGrid?.z === grid?.z
      if (sameGrid && state.placementValid === valid) {
        return state
      }
      return { hoverGrid: grid, placementValid: valid }
    }),

  selectPrimitive: (id) =>
    set({
      selectedPrimitiveId: id,
      activeTool: 'select',
      activePrimitiveType: null,
    }),

  placePrimitive: (gridX, gridZ) => {
    const { activePrimitiveType, boundingBox, primitives } = get()
    if (!activePrimitiveType) return
    if (!canPlacePrimitive(activePrimitiveType, gridX, gridZ, boundingBox, primitives)) {
      return
    }

    const def = getPrimitiveDefinition(activePrimitiveType)
    if (!def) return

    const primitive: PlacedPrimitive = {
      id: crypto.randomUUID(),
      typeId: activePrimitiveType,
      gridX,
      gridZ,
      size: def.size,
    }

    set({ primitives: [...primitives, primitive] })
  },

  removeSelected: () => {
    const { selectedPrimitiveId, primitives } = get()
    if (!selectedPrimitiveId) return
    set({
      primitives: primitives.filter((p) => p.id !== selectedPrimitiveId),
      selectedPrimitiveId: null,
    })
  },

  clearPrimitives: () => set({ primitives: [], selectedPrimitiveId: null }),
}))

export function useMaterialSummary() {
  const primitives = useDesignStore((state) => state.primitives)
  return useMemo(() => buildMaterialSummary(primitives), [primitives])
}

export function gridToWorldPosition(
  gridX: number,
  gridZ: number,
  size: [number, number, number],
) {
  const [w, h, d] = size
  return {
    x: gridX + w / 2,
    y: h / 2,
    z: gridZ + d / 2,
  }
}
