import type { PrimitiveDefinition } from '../types'

export const GRID_CELL_SIZE = 1

/** Side length of a single 4×4 module in feet / grid cells */
export const MODULE_4_SIZE = 4

export const PRIMITIVE_DEFINITIONS: PrimitiveDefinition[] = [
  {
    id: 'post',
    name: 'Post',
    description: '1 × 2 × 1 vertical post',
    size: [1, 2, 1],
    color: '#C4A882',
    materialLabel: '4×4 lumber',
  },
  {
    id: 'beam',
    name: 'Beam',
    description: '2 × 1 × 1 horizontal beam',
    size: [2, 1, 1],
    color: '#B8956F',
    materialLabel: '2×6 lumber',
  },
  {
    id: 'panel',
    name: 'Panel',
    description: '2 × 2 × 0.5 roof panel',
    size: [2, 2, 0.5],
    color: '#D4C4A8',
    materialLabel: 'Plywood sheet',
  },
  {
    id: 'block',
    name: '4×4 Module',
    description: '4 × 9 × 4 ft pavilion module',
    size: [4, 9, 4],
    color: '#A08060',
    materialLabel: '4×4 pavilion module',
    modelUrl: '/models/4x4-opt.glb',
  },
  {
    id: 'block8',
    name: '8×8 Module',
    description: '8 × 9 × 8 ft connected pavilion (auto from 2×2 of 4×4s)',
    size: [8, 9, 8],
    color: '#A08060',
    materialLabel: '8×8 pavilion module',
    modelUrl: '/models/8x8-opt.glb',
  },
]

export function getPrimitiveDefinition(id: string) {
  return PRIMITIVE_DEFINITIONS.find((p) => p.id === id)
}

export function formatDimensions(size: [number, number, number]) {
  const [w, h, d] = size
  return `${w} × ${h} × ${d} ft`
}
