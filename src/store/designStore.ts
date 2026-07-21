import { create } from 'zustand'
import { useMemo } from 'react'
import type {
  BaseHeightFt,
  BoundingBox,
  PlacedPrimitive,
  PrimitiveTypeId,
  ToolMode,
  WallAttachmentTarget,
} from '../types'
import {
  getPlaceSize,
  getPlacementKind,
  isModuleType,
} from '../constants/primitives'
import { mergeModules } from '../logic/moduleMerge'
import { buildBillOfMaterials } from '../logic/billOfMaterials'
import {
  findWallAttachmentNear,
  pruneOrphanAttachments,
} from '../logic/wallAttach'

interface DesignState {
  boundingBox: BoundingBox
  primitives: PlacedPrimitive[]
  activeTool: ToolMode
  activePrimitiveType: PrimitiveTypeId | null
  activeBaseHeight: BaseHeightFt
  selectedPrimitiveId: string | null
  hoverGrid: { x: number; z: number } | null
  hoverAttachment: WallAttachmentTarget | null
  placementValid: boolean

  setBoundingBox: (box: Partial<BoundingBox>) => void
  setActiveTool: (tool: ToolMode) => void
  setActivePrimitiveType: (typeId: PrimitiveTypeId | null) => void
  setActiveBaseHeight: (height: BaseHeightFt) => void
  setHoverGrid: (
    grid: { x: number; z: number } | null,
    valid: boolean,
    attachment?: WallAttachmentTarget | null,
  ) => void
  selectPrimitive: (id: string | null) => void
  placePrimitive: (gridX: number, gridZ: number) => void
  removeSelected: () => void
  clearPrimitives: () => void
}

function occupiesCells(primitive: PlacedPrimitive) {
  const kind = getPlacementKind(primitive.typeId)
  // Wall-mounted items hang on frames — they don't reserve floor cells
  if (kind === 'wallAttach') return []

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

function getOccupiedCellSet(
  primitives: PlacedPrimitive[],
  options: { modules?: boolean; free?: boolean } = {},
) {
  const includeModules = options.modules !== false
  const includeFree = options.free !== false
  const set = new Set<string>()
  for (const p of primitives) {
    const kind = getPlacementKind(p.typeId)
    if (kind === 'wallAttach') continue
    if (kind === 'module' && !includeModules) continue
    if (kind === 'free' && !includeFree) continue
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
  baseHeight: BaseHeightFt,
  excludeId?: string,
  attachment?: WallAttachmentTarget | null,
) {
  const kind = getPlacementKind(typeId)

  if (kind === 'wallAttach') {
    return attachment != null
  }

  const size = getPlaceSize(typeId, baseHeight)
  if (!size) return false

  const [w, h, d] = size
  const wCells = Math.ceil(w)
  const dCells = Math.ceil(d)
  if (gridX < 0 || gridZ < 0) return false
  if (gridX + wCells > boundingBox.width || gridZ + dCells > boundingBox.depth) {
    return false
  }
  if (h > boundingBox.height) return false

  const others = excludeId
    ? primitives.filter((p) => p.id !== excludeId)
    : primitives

  // Modules only collide with other modules; free furniture only with free furniture
  const occupied =
    kind === 'free'
      ? getOccupiedCellSet(others, { modules: false, free: true })
      : getOccupiedCellSet(others, { modules: true, free: false })

  for (let x = gridX; x < gridX + wCells; x++) {
    for (let z = gridZ; z < gridZ + dCells; z++) {
      if (occupied.has(`${x},${z}`)) return false
    }
  }

  return true
}

export const useDesignStore = create<DesignState>((set, get) => ({
  boundingBox: { width: 10, depth: 10, height: 12 },
  primitives: [],
  activeTool: 'select',
  activePrimitiveType: null,
  activeBaseHeight: 1,
  selectedPrimitiveId: null,
  hoverGrid: null,
  hoverAttachment: null,
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
      hoverAttachment: null,
    }),

  setActivePrimitiveType: (typeId) =>
    set({
      activePrimitiveType: typeId,
      activeTool: typeId ? 'place' : 'select',
      selectedPrimitiveId: null,
      hoverAttachment: null,
    }),

  setActiveBaseHeight: (height) => set({ activeBaseHeight: height }),

  setHoverGrid: (grid, valid, attachment = null) =>
    set((state) => {
      const sameGrid =
        state.hoverGrid?.x === grid?.x && state.hoverGrid?.z === grid?.z
      const sameAttach =
        state.hoverAttachment?.hostId === attachment?.hostId &&
        state.hoverAttachment?.face === attachment?.face &&
        state.hoverAttachment?.rotationY === attachment?.rotationY
      if (sameGrid && sameAttach && state.placementValid === valid) {
        return state
      }
      return { hoverGrid: grid, placementValid: valid, hoverAttachment: attachment }
    }),

  selectPrimitive: (id) =>
    set({
      selectedPrimitiveId: id,
      activeTool: 'select',
      activePrimitiveType: null,
      hoverAttachment: null,
    }),

  placePrimitive: (gridX, gridZ) => {
    const {
      activePrimitiveType,
      activeBaseHeight,
      boundingBox,
      primitives,
      hoverAttachment,
    } = get()
    if (!activePrimitiveType) return

    const kind = getPlacementKind(activePrimitiveType)

    if (kind === 'wallAttach') {
      if (
        !canPlacePrimitive(
          activePrimitiveType,
          gridX,
          gridZ,
          boundingBox,
          primitives,
          activeBaseHeight,
          undefined,
          hoverAttachment,
        ) ||
        !hoverAttachment
      ) {
        return
      }

      const host = primitives.find((p) => p.id === hoverAttachment.hostId)
      if (!host) return

      const primitive: PlacedPrimitive = {
        id: crypto.randomUUID(),
        typeId: activePrimitiveType,
        gridX: host.gridX,
        gridZ: host.gridZ,
        size: hoverAttachment.size,
        baseHeight: host.baseHeight,
        rotationY: hoverAttachment.rotationY,
        hostId: hoverAttachment.hostId,
        face: hoverAttachment.face,
      }
      set({ primitives: [...primitives, primitive], selectedPrimitiveId: null })
      return
    }

    if (
      !canPlacePrimitive(
        activePrimitiveType,
        gridX,
        gridZ,
        boundingBox,
        primitives,
        activeBaseHeight,
      )
    ) {
      return
    }

    const size = getPlaceSize(activePrimitiveType, activeBaseHeight)
    if (!size) return

    const primitive: PlacedPrimitive = {
      id: crypto.randomUUID(),
      typeId: activePrimitiveType,
      gridX,
      gridZ,
      size,
      baseHeight: kind === 'module' ? activeBaseHeight : undefined,
    }

    if (kind === 'module') {
      const merged = mergeModules([...primitives, primitive])
      set({
        primitives: pruneOrphanAttachments(merged),
        selectedPrimitiveId: null,
      })
    } else {
      set({ primitives: [...primitives, primitive], selectedPrimitiveId: null })
    }
  },

  removeSelected: () => {
    const { selectedPrimitiveId, primitives } = get()
    if (!selectedPrimitiveId) return
    // Also remove wall items attached to a deleted host module
    const next = primitives.filter(
      (p) =>
        p.id !== selectedPrimitiveId && p.hostId !== selectedPrimitiveId,
    )
    set({
      primitives: next,
      selectedPrimitiveId: null,
    })
  },

  clearPrimitives: () =>
    set({ primitives: [], selectedPrimitiveId: null, hoverAttachment: null }),
}))

export function useBillOfMaterials() {
  const primitives = useDesignStore((state) => state.primitives)
  return useMemo(() => {
    const modulesOnly = primitives.filter((p) => isModuleType(p.typeId))
    return buildBillOfMaterials(modulesOnly)
  }, [primitives])
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

export { findWallAttachmentNear }
