import { useMemo } from 'react'
import * as THREE from 'three'
import type { BoundingBox } from '../../types'

interface BoundingBoxMeshProps {
  box: BoundingBox
}

function createBoxEdgeGeometry(width: number, depth: number, height: number) {
  const segments: [number, number, number][] = [
    [0, 0, 0],
    [width, 0, 0],
    [width, 0, 0],
    [width, 0, depth],
    [width, 0, depth],
    [0, 0, depth],
    [0, 0, depth],
    [0, 0, 0],
    [0, height, 0],
    [width, height, 0],
    [width, height, 0],
    [width, height, depth],
    [width, height, depth],
    [0, height, depth],
    [0, height, depth],
    [0, height, 0],
    [0, 0, 0],
    [0, height, 0],
    [width, 0, 0],
    [width, height, 0],
    [width, 0, depth],
    [width, height, depth],
    [0, 0, depth],
    [0, height, depth],
  ]

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(segments.flat(), 3),
  )
  return geometry
}

export function BoundingBoxMesh({ box }: BoundingBoxMeshProps) {
  const { width, depth, height } = box

  const edgeGeometry = useMemo(
    () => createBoxEdgeGeometry(width, depth, height),
    [width, depth, height],
  )

  return (
    <group>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color="#0071E3" linewidth={1} />
      </lineSegments>
      <mesh position={[width / 2, 0.001, depth / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, depth]} />
        <meshBasicMaterial color="#0071E3" transparent opacity={0.04} />
      </mesh>
    </group>
  )
}
