import { useRef } from 'react'
import { Edges } from '@react-three/drei'
import type { ThreeEvent } from '@react-three/fiber'
import type { Mesh } from 'three'
import { getPrimitiveDefinition } from '../../constants/primitives'
import { gridToWorldPosition } from '../../store/designStore'
import type { PlacedPrimitive } from '../../types'

interface PlacedPrimitiveMeshProps {
  primitive: PlacedPrimitive
  selected: boolean
  onSelect: (id: string) => void
}

export function PlacedPrimitiveMesh({
  primitive,
  selected,
  onSelect,
}: PlacedPrimitiveMeshProps) {
  const meshRef = useRef<Mesh>(null)
  const def = getPrimitiveDefinition(primitive.typeId)
  const [w, h, d] = primitive.size
  const pos = gridToWorldPosition(primitive.gridX, primitive.gridZ, primitive.size)
  const color = def?.color ?? '#C4A882'

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    onSelect(primitive.id)
  }

  return (
    <mesh
      ref={meshRef}
      position={[pos.x, pos.y, pos.z]}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default'
      }}
    >
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.05}
        emissive={selected ? '#0071E3' : '#000000'}
        emissiveIntensity={selected ? 0.15 : 0}
      />
      <Edges
        color={selected ? '#0071E3' : '#8B7355'}
        lineWidth={selected ? 2 : 1}
        threshold={15}
      />
    </mesh>
  )
}
