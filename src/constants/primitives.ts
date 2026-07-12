import type { PrimitiveDefinition } from '../types'

export const GRID_CELL_SIZE = 1

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
    name: 'Block',
    description: '2 × 2 × 2 large block',
    size: [2, 2, 2],
    color: '#A08060',
    materialLabel: 'Timber block',
  },
]

export function getPrimitiveDefinition(id: string) {
  return PRIMITIVE_DEFINITIONS.find((p) => p.id === id)
}

export function formatDimensions(size: [number, number, number]) {
  const [w, h, d] = size
  return `${w} × ${h} × ${d} units`
}
