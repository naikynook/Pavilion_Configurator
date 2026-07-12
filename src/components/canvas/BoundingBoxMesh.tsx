import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import type { BoundingBox } from '../../types'

interface BoundingBoxMeshProps {
  box: BoundingBox
}

export function BoundingBoxMesh({ box }: BoundingBoxMeshProps) {
  const { width, depth, height } = box

  const points = useMemo(() => {
    const corners: [number, number, number][] = [
      [0, 0, 0],
      [width, 0, 0],
      [width, 0, depth],
      [0, 0, depth],
      [0, 0, 0],
      [0, height, 0],
      [width, height, 0],
      [width, height, depth],
      [0, height, depth],
      [0, height, 0],
      [width, height, 0],
      [width, 0, 0],
      [width, 0, depth],
      [width, height, depth],
      [0, height, depth],
      [0, 0, depth],
    ]
    return corners
  }, [width, depth, height])

  return (
    <group>
      <Line
        points={points}
        color="#0071E3"
        lineWidth={1.5}
        dashed
        dashSize={0.3}
        gapSize={0.15}
      />
      <mesh position={[width / 2, 0.001, depth / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, depth]} />
        <meshBasicMaterial color="#0071E3" transparent opacity={0.04} />
      </mesh>
    </group>
  )
}
