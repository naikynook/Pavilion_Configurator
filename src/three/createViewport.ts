import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { getPrimitiveDefinition } from '../constants/primitives'
import { canPlacePrimitive, gridToWorldPosition, useDesignStore } from '../store/designStore'

type StoreState = ReturnType<typeof useDesignStore.getState>

// Keep grid below y=0 so the bounding box bottom edge doesn't z-fight with it.
const GRID_Y_OFFSET = -0.02
const BOUNDING_FLOOR_Y = 0.02

interface ViewportApi {
  sync: (state: StoreState) => void
  resize: () => void
  dispose: () => void
}

function createBoxEdgeGeometry(width: number, depth: number, height: number) {
  const y = BOUNDING_FLOOR_Y
  const segments: [number, number, number][] = [
    [0, y, 0], [width, y, 0],
    [width, y, 0], [width, y, depth],
    [width, y, depth], [0, y, depth],
    [0, y, depth], [0, y, 0],
    [0, height, 0], [width, height, 0],
    [width, height, 0], [width, height, depth],
    [width, height, depth], [0, height, depth],
    [0, height, depth], [0, height, 0],
    [0, y, 0], [0, height, 0],
    [width, y, 0], [width, height, 0],
    [width, y, depth], [width, height, depth],
    [0, y, depth], [0, height, depth],
  ]
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(segments.flat(), 3),
  )
  return geometry
}

export function createViewport(container: HTMLElement): ViewportApi {
  const width = Math.max(container.clientWidth, 1)
  const height = Math.max(container.clientHeight, 1)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#FAFAFA')

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 200)
  camera.position.set(18, 12, 18)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  container.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 3
  controls.maxDistance = 50
  controls.maxPolarAngle = Math.PI / 2 - 0.05

  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const keyLight = new THREE.DirectionalLight(0xffffff, 0.9)
  keyLight.position.set(10, 15, 8)
  scene.add(keyLight)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.25)
  fillLight.position.set(-5, 8, -5)
  scene.add(fillLight)

  const gridGroup = new THREE.Group()
  let gridHelper = new THREE.GridHelper(20, 20, 0xd2d2d7, 0xe8e8ed)
  gridHelper.position.y = GRID_Y_OFFSET
  gridGroup.add(gridHelper)
  scene.add(gridGroup)

  const boundingGroup = new THREE.Group()
  const boundingLines = new THREE.LineSegments(
    createBoxEdgeGeometry(10, 10, 6),
    new THREE.LineBasicMaterial({ color: 0x0071e3, depthTest: true }),
  )
  const boundingFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({ color: 0x0071e3, transparent: true, opacity: 0.04 }),
  )
  boundingFloor.rotation.x = -Math.PI / 2
  boundingFloor.position.set(5, BOUNDING_FLOOR_Y, 5)
  boundingGroup.add(boundingLines, boundingFloor)
  scene.add(boundingGroup)

  const primitivesGroup = new THREE.Group()
  scene.add(primitivesGroup)

  const previewMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
      color: 0x0071e3,
      transparent: true,
      opacity: 0.35,
    }),
  )
  previewMesh.visible = false
  scene.add(previewMesh)

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)

  const primitiveMeshes = new Map<string, THREE.Mesh>()
  let animationId = 0
  let currentState = useDesignStore.getState()
  let isDragging = false

  const updateCamera = (box: StoreState['boundingBox']) => {
    const target = new THREE.Vector3(box.width / 2, box.height / 3, box.depth / 2)
    controls.target.copy(target)
    camera.position.set(box.width + 8, box.height + 6, box.depth + 8)
    camera.lookAt(target)
  }

  const updateBoundingBox = (box: StoreState['boundingBox']) => {
    boundingLines.geometry.dispose()
    boundingLines.geometry = createBoxEdgeGeometry(box.width, box.depth, box.height)
    boundingFloor.geometry.dispose()
    boundingFloor.geometry = new THREE.PlaneGeometry(box.width, box.depth)
    boundingFloor.position.set(box.width / 2, BOUNDING_FLOOR_Y, box.depth / 2)

    const gridSize = Math.max(box.width, box.depth) + 4
    gridGroup.remove(gridHelper)
    gridHelper.geometry.dispose()
    const gridMaterials = Array.isArray(gridHelper.material)
      ? gridHelper.material
      : [gridHelper.material]
    gridMaterials.forEach((material) => material.dispose())
    gridHelper = new THREE.GridHelper(gridSize, gridSize, 0xd2d2d7, 0xe8e8ed)
    gridHelper.position.set(box.width / 2, GRID_Y_OFFSET, box.depth / 2)
    gridGroup.add(gridHelper)

    updateCamera(box)
  }

  const rebuildPrimitives = (state: StoreState) => {
    for (const mesh of primitiveMeshes.values()) {
      mesh.geometry.dispose()
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => m.dispose())
      } else {
        mesh.material.dispose()
      }
      primitivesGroup.remove(mesh)
    }
    primitiveMeshes.clear()

    for (const primitive of state.primitives) {
      const def = getPrimitiveDefinition(primitive.typeId)
      const [w, h, d] = primitive.size
      const pos = gridToWorldPosition(primitive.gridX, primitive.gridZ, primitive.size)
      const color = new THREE.Color(def?.color ?? '#C4A882')

      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshStandardMaterial({
          color,
          roughness: 0.85,
          metalness: 0.05,
          emissive: state.selectedPrimitiveId === primitive.id ? new THREE.Color(0x0071e3) : new THREE.Color(0x000000),
          emissiveIntensity: state.selectedPrimitiveId === primitive.id ? 0.15 : 0,
        }),
      )
      mesh.position.set(pos.x, pos.y, pos.z)
      mesh.userData.primitiveId = primitive.id
      primitivesGroup.add(mesh)
      primitiveMeshes.set(primitive.id, mesh)
    }
  }

  const updatePreview = (state: StoreState) => {
    if (state.activeTool !== 'place' || !state.activePrimitiveType || !state.hoverGrid) {
      previewMesh.visible = false
      return
    }

    const def = getPrimitiveDefinition(state.activePrimitiveType)
    if (!def) {
      previewMesh.visible = false
      return
    }

    const [w, h, d] = def.size
    const pos = gridToWorldPosition(state.hoverGrid.x, state.hoverGrid.z, def.size)
    previewMesh.geometry.dispose()
    previewMesh.geometry = new THREE.BoxGeometry(w, h, d)
    previewMesh.position.set(pos.x, pos.y, pos.z)
    ;(previewMesh.material as THREE.MeshStandardMaterial).color.set(
      state.placementValid ? 0x0071e3 : 0xff3b30,
    )
    previewMesh.visible = true
  }

  const snapPointerToGrid = (clientX: number, clientY: number) => {
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)

    const hit = new THREE.Vector3()
    if (!raycaster.ray.intersectPlane(groundPlane, hit)) return null

    return {
      gridX: Math.floor(hit.x),
      gridZ: Math.floor(hit.z),
    }
  }

  const onPointerDown = () => {
    isDragging = false
  }

  const onPointerMove = (event: PointerEvent) => {
    if (event.buttons > 0) {
      isDragging = true
    }

    const gridPos = snapPointerToGrid(event.clientX, event.clientY)
    if (!gridPos) return

    const state = useDesignStore.getState()
    if (state.activeTool === 'place' && state.activePrimitiveType) {
      const valid = canPlacePrimitive(
        state.activePrimitiveType,
        gridPos.gridX,
        gridPos.gridZ,
        state.boundingBox,
        state.primitives,
      )
      useDesignStore.getState().setHoverGrid({ x: gridPos.gridX, z: gridPos.gridZ }, valid)
      renderer.domElement.style.cursor = valid ? 'crosshair' : 'not-allowed'
    } else {
      renderer.domElement.style.cursor = 'default'
    }
  }

  const onPointerLeave = () => {
    useDesignStore.getState().setHoverGrid(null, false)
    renderer.domElement.style.cursor = 'default'
  }

  const onClick = (event: MouseEvent) => {
    if (isDragging) return

    const state = useDesignStore.getState()

    if (state.activeTool === 'place' && state.activePrimitiveType) {
      const gridPos = snapPointerToGrid(event.clientX, event.clientY)
      if (!gridPos) return
      useDesignStore.getState().placePrimitive(gridPos.gridX, gridPos.gridZ)
      return
    }

    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)

    const hits = raycaster.intersectObjects([...primitiveMeshes.values()])
    if (hits.length > 0) {
      const id = hits[0].object.userData.primitiveId as string
      useDesignStore.getState().selectPrimitive(id)
    } else {
      useDesignStore.getState().selectPrimitive(null)
    }
  }

  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  renderer.domElement.addEventListener('pointermove', onPointerMove)
  renderer.domElement.addEventListener('pointerleave', onPointerLeave)
  renderer.domElement.addEventListener('click', onClick)

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  updateBoundingBox(currentState.boundingBox)
  rebuildPrimitives(currentState)

  return {
    sync(state: StoreState) {
      const boxChanged =
        state.boundingBox.width !== currentState.boundingBox.width ||
        state.boundingBox.depth !== currentState.boundingBox.depth ||
        state.boundingBox.height !== currentState.boundingBox.height

      const primitivesChanged =
        state.primitives !== currentState.primitives ||
        state.selectedPrimitiveId !== currentState.selectedPrimitiveId

      const previewChanged =
        state.activeTool !== currentState.activeTool ||
        state.activePrimitiveType !== currentState.activePrimitiveType ||
        state.hoverGrid !== currentState.hoverGrid ||
        state.placementValid !== currentState.placementValid

      currentState = state

      if (boxChanged) updateBoundingBox(state.boundingBox)
      if (primitivesChanged) rebuildPrimitives(state)
      if (previewChanged) updatePreview(state)
    },

    resize() {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    },

    dispose() {
      cancelAnimationFrame(animationId)
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave)
      renderer.domElement.removeEventListener('click', onClick)

      for (const mesh of primitiveMeshes.values()) {
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose())
        } else {
          mesh.material.dispose()
        }
      }

      boundingLines.geometry.dispose()
      ;(boundingLines.material as THREE.Material).dispose()
      boundingFloor.geometry.dispose()
      ;(boundingFloor.material as THREE.Material).dispose()
      previewMesh.geometry.dispose()
      ;(previewMesh.material as THREE.Material).dispose()
      gridHelper.geometry.dispose()
      const gridMaterials = Array.isArray(gridHelper.material)
        ? gridHelper.material
        : [gridHelper.material]
      gridMaterials.forEach((material) => material.dispose())

      controls.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    },
  }
}
