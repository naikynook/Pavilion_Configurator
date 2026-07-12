import { useCallback } from 'react'
import type { ThreeEvent } from '@react-three/fiber'
import { canPlacePrimitive, useDesignStore } from '../../store/designStore'
import { GRID_CELL_SIZE } from '../../constants/primitives'

export function GroundPlane() {
  const boundingBox = useDesignStore((s) => s.boundingBox)
  const activeTool = useDesignStore((s) => s.activeTool)
  const activePrimitiveType = useDesignStore((s) => s.activePrimitiveType)
  const primitives = useDesignStore((s) => s.primitives)
  const setHoverGrid = useDesignStore((s) => s.setHoverGrid)
  const placePrimitive = useDesignStore((s) => s.placePrimitive)
  const selectPrimitive = useDesignStore((s) => s.selectPrimitive)

  const snapToGrid = useCallback((x: number, z: number) => {
    const gridX = Math.floor(x / GRID_CELL_SIZE)
    const gridZ = Math.floor(z / GRID_CELL_SIZE)
    return { gridX, gridZ }
  }, [])

  const handlePointerMove = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (activeTool !== 'place' || !activePrimitiveType) {
        setHoverGrid(null, false)
        return
      }

      e.stopPropagation()
      const { gridX, gridZ } = snapToGrid(e.point.x, e.point.z)
      const valid = canPlacePrimitive(
        activePrimitiveType,
        gridX,
        gridZ,
        boundingBox,
        primitives,
      )
      setHoverGrid({ x: gridX, z: gridZ }, valid)
      document.body.style.cursor = valid ? 'crosshair' : 'not-allowed'
    },
    [
      activeTool,
      activePrimitiveType,
      boundingBox,
      primitives,
      setHoverGrid,
      snapToGrid,
    ],
  )

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      if (activeTool === 'place' && activePrimitiveType) {
        e.stopPropagation()
        const { gridX, gridZ } = snapToGrid(e.point.x, e.point.z)
        placePrimitive(gridX, gridZ)
        return
      }
      selectPrimitive(null)
    },
    [activeTool, activePrimitiveType, placePrimitive, selectPrimitive, snapToGrid],
  )

  const handlePointerLeave = useCallback(() => {
    setHoverGrid(null, false)
    document.body.style.cursor = 'default'
  }, [setHoverGrid])

  const planeSize = Math.max(boundingBox.width, boundingBox.depth) + 4

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[boundingBox.width / 2, 0, boundingBox.depth / 2]}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      onPointerLeave={handlePointerLeave}
    >
      <planeGeometry args={[planeSize, planeSize]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  )
}
