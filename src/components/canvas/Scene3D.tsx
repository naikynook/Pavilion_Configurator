import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Grid, OrbitControls } from '@react-three/drei'
import { useDesignStore } from '../../store/designStore'
import { BoundingBoxMesh } from './BoundingBoxMesh'
import { GroundPlane } from './GroundPlane'
import { PlacedPrimitiveMesh } from './PlacedPrimitiveMesh'
import { PlacementPreview } from './PlacementPreview'

function SceneContent() {
  const boundingBox = useDesignStore((s) => s.boundingBox)
  const primitives = useDesignStore((s) => s.primitives)
  const selectedPrimitiveId = useDesignStore((s) => s.selectedPrimitiveId)
  const activeTool = useDesignStore((s) => s.activeTool)
  const activePrimitiveType = useDesignStore((s) => s.activePrimitiveType)
  const hoverGrid = useDesignStore((s) => s.hoverGrid)
  const placementValid = useDesignStore((s) => s.placementValid)
  const selectPrimitive = useDesignStore((s) => s.selectPrimitive)

  const cameraTarget = useMemo<[number, number, number]>(
    () => [boundingBox.width / 2, boundingBox.height / 3, boundingBox.depth / 2],
    [boundingBox.width, boundingBox.height, boundingBox.depth],
  )

  return (
    <>
      <color attach="background" args={['#FAFAFA']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 8]} intensity={0.9} />
      <directionalLight position={[-5, 8, -5]} intensity={0.25} />

      <Grid
        infiniteGrid={false}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#E8E8ED"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#D2D2D7"
        fadeDistance={40}
        fadeStrength={1}
        position={[boundingBox.width / 2, 0, boundingBox.depth / 2]}
      />

      <BoundingBoxMesh box={boundingBox} />
      <GroundPlane />

      {primitives.map((primitive) => (
        <PlacedPrimitiveMesh
          key={primitive.id}
          primitive={primitive}
          selected={primitive.id === selectedPrimitiveId}
          onSelect={selectPrimitive}
        />
      ))}

      {activeTool === 'place' && activePrimitiveType && hoverGrid && (
        <PlacementPreview
          typeId={activePrimitiveType}
          gridX={hoverGrid.x}
          gridZ={hoverGrid.z}
          valid={placementValid}
        />
      )}

      <OrbitControls
        makeDefault
        target={cameraTarget}
        enableDamping
        dampingFactor={0.08}
        minDistance={3}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2 - 0.05}
      />
    </>
  )
}

export function Scene3D() {
  const boundingBox = useDesignStore((s) => s.boundingBox)

  const cameraPosition = useMemo<[number, number, number]>(
    () => [
      boundingBox.width + 8,
      boundingBox.height + 6,
      boundingBox.depth + 8,
    ],
    [boundingBox.width, boundingBox.height, boundingBox.depth],
  )

  return (
    <div className="canvas-container">
      <Canvas
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{
          position: cameraPosition,
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor('#FAFAFA')
        }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>

      <div className="canvas-hint">
        <span>Drag to orbit</span>
        <span className="canvas-hint__dot">·</span>
        <span>Scroll to zoom</span>
        <span className="canvas-hint__dot">·</span>
        <span>Right-drag to pan</span>
      </div>
    </div>
  )
}
