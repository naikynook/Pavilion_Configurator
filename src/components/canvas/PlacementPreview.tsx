import { useMemo } from 'react'
import { Edges } from '@react-three/drei'
import { getPrimitiveDefinition } from '../../constants/primitives'
import { gridToWorldPosition } from '../../store/designStore'
import type { PrimitiveTypeId } from '../../types'

interface PlacementPreviewProps {
  typeId: PrimitiveTypeId
  gridX: number
  gridZ: number
  valid: boolean
}

export function PlacementPreview({ typeId, gridX, gridZ, valid }: PlacementPreviewProps) {
  const def = getPrimitiveDefinition(typeId)
  if (!def) return null

  const [w, h, d] = def.size
  const pos = gridToWorldPosition(gridX, gridZ, def.size)

  const color = useMemo(() => (valid ? '#0071E3' : '#FF3B30'), [valid])

  return (
    <mesh position={[pos.x, pos.y, pos.z]}>
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial color={color} transparent opacity={0.35} />
      <Edges color={color} threshold={15} />
    </mesh>
  )
}
