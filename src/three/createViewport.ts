import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {
  PANEL_EDGE_CLEARANCE_FT,
  PANEL_THICKNESS_FT,
  STEEL_HEIGHT_FT,
  getModelLocalSize,
  getPanelLocalSize,
  getPlaceSize,
  getPlacementKind,
  getPrimitiveDefinition,
  PRIMITIVE_DEFINITIONS,
} from '../constants/primitives'
import {
  canPlacePrimitive,
  findWallAttachmentNear,
  gridToWorldPosition,
  useDesignStore,
} from '../store/designStore'
import type { BaseHeightFt, PrimitiveTypeId, WallFace } from '../types'
import {
  BENCH_DEPTH_FT,
  BENCH_SEAT_HEIGHT_FT,
  createAccessoryMesh,
} from './createFurniture'
import {
  applyModuleMaterials,
  createMetalMaterial,
  createPlywoodMaterial,
} from './moduleMaterials'
import { mergePanelScene, optimizeModuleScene } from './optimizeModule'
import { computeWallAttachment } from '../logic/wallAttach'

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

function resolveModelUrl(path: string) {
  const base = import.meta.env.BASE_URL ?? '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`
}

/** Fit an object into target W×H×D (feet), sitting on y=0. */
function fitObjectToSize(source: THREE.Object3D, size: [number, number, number]) {
  const [targetW, targetH, targetD] = size
  const root = source.clone(true)

  root.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(root)
  const dims = new THREE.Vector3()
  box.getSize(dims)

  const sx = dims.x > 0 ? targetW / dims.x : 1
  const sy = dims.y > 0 ? targetH / dims.y : 1
  const sz = dims.z > 0 ? targetD / dims.z : 1
  root.scale.set(sx, sy, sz)

  root.updateMatrixWorld(true)
  const fitted = new THREE.Box3().setFromObject(root)
  const center = new THREE.Vector3()
  fitted.getCenter(center)

  // Center XZ; sit bottom on y=0
  root.position.x -= center.x
  root.position.z -= center.z
  root.position.y -= fitted.min.y

  const wrapper = new THREE.Group()
  wrapper.add(root)
  return wrapper
}

/**
 * Panel.glb is authored flat in XZ (8×8 ft, ~1″ thick on Y).
 * Orient upright: width X, height Y, thickness Z — then fit & center.
 */
function fitPanelModel(
  source: THREE.Object3D,
  size: [number, number, number],
) {
  const [targetW, targetH, targetT] = size
  const root = source.clone(true)
  root.rotation.x = Math.PI / 2
  root.updateMatrixWorld(true)

  const box = new THREE.Box3().setFromObject(root)
  const dims = new THREE.Vector3()
  box.getSize(dims)

  const sx = dims.x > 0 ? targetW / dims.x : 1
  const sy = dims.y > 0 ? targetH / dims.y : 1
  const sz = dims.z > 0 ? targetT / dims.z : 1
  root.scale.set(sx, sy, sz)

  root.updateMatrixWorld(true)
  const fitted = new THREE.Box3().setFromObject(root)
  const center = new THREE.Vector3()
  fitted.getCenter(center)
  root.position.sub(center)

  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = createPlywoodMaterial()
    }
  })

  const wrapper = new THREE.Group()
  wrapper.add(root)
  return wrapper
}

/** Prefer the optimized steel mesh; otherwise drop the plywood base. */
function extractSteelTemplate(source: THREE.Object3D): THREE.Object3D {
  const named = source.getObjectByName('module-steel')
  if (named) {
    const group = new THREE.Group()
    group.add(named.clone(true))
    return group
  }

  const clone = source.clone(true)
  const toRemove: THREE.Object3D[] = []
  clone.traverse((child) => {
    if (child.name === 'module-base' || child.name === 'mesh_8') {
      toRemove.push(child)
    }
  })
  for (const child of toRemove) {
    child.parent?.remove(child)
  }
  return clone
}

/**
 * Compose a plywood base of the chosen height with the steel frame on top.
 */
function composeModule(
  template: THREE.Object3D,
  steelSize: [number, number, number],
  baseHeight: BaseHeightFt,
) {
  const [w, steelH, d] = steelSize
  const group = new THREE.Group()

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(w, baseHeight, d),
    createPlywoodMaterial(),
  )
  base.name = 'module-base'
  base.position.y = baseHeight / 2
  group.add(base)

  const steel = fitObjectToSize(extractSteelTemplate(template), [w, steelH, d])
  steel.name = 'module-steel-root'
  steel.position.y = baseHeight
  steel.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.name = child.name || 'module-steel'
      child.material = createMetalMaterial()
    }
  })
  group.add(steel)

  applyModuleMaterials(group)
  return group
}

function setSelectionHighlight(object: THREE.Object3D, selected: boolean) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    const materials = Array.isArray(child.material) ? child.material : [child.material]
    for (const material of materials) {
      if (
        material instanceof THREE.MeshStandardMaterial ||
        material instanceof THREE.MeshPhysicalMaterial
      ) {
        material.emissive = new THREE.Color(selected ? 0x0071e3 : 0x000000)
        material.emissiveIntensity = selected ? 0.15 : 0
      }
    }
  })
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose()
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      materials.forEach((material) => material.dispose())
    }
  })
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

  scene.add(new THREE.AmbientLight(0xffffff, 0.55))
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.05)
  keyLight.position.set(10, 15, 8)
  scene.add(keyLight)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.35)
  fillLight.position.set(-5, 8, -5)
  scene.add(fillLight)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.25)
  rimLight.position.set(0, 6, -10)
  scene.add(rimLight)

  const gridGroup = new THREE.Group()
  let gridHelper = new THREE.GridHelper(20, 20, 0xd2d2d7, 0xe8e8ed)
  gridHelper.position.y = GRID_Y_OFFSET
  gridGroup.add(gridHelper)
  scene.add(gridGroup)

  const boundingGroup = new THREE.Group()
  const boundingLines = new THREE.LineSegments(
    createBoxEdgeGeometry(10, 10, 10),
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

  const primitiveObjects = new Map<string, THREE.Object3D>()
  const modelTemplates = new Map<string, THREE.Object3D>()
  const modelLoadPromises = new Map<string, Promise<THREE.Object3D>>()
  const gltfLoader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco/`)
  gltfLoader.setDRACOLoader(dracoLoader)
  let animationId = 0
  let currentState = useDesignStore.getState()
  let isDragging = false
  let disposed = false

  const loadModelTemplate = (typeId: PrimitiveTypeId, modelUrl: string) => {
    const existing = modelTemplates.get(typeId)
    if (existing) return Promise.resolve(existing)

    // Reuse a template already loaded for another type that shares this URL
    for (const def of PRIMITIVE_DEFINITIONS) {
      if (def.modelUrl === modelUrl) {
        const shared = modelTemplates.get(def.id)
        if (shared) {
          modelTemplates.set(typeId, shared)
          return Promise.resolve(shared)
        }
      }
    }

    const pendingKey = modelUrl
    const pending = modelLoadPromises.get(pendingKey)
    if (pending) {
      return pending.then((template) => {
        modelTemplates.set(typeId, template)
        return template
      })
    }

    const promise = new Promise<THREE.Object3D>((resolve, reject) => {
      gltfLoader.load(
        resolveModelUrl(modelUrl),
        (gltf) => {
          let meshCount = 0
          gltf.scene.traverse((o) => {
            if ((o as THREE.Mesh).isMesh) meshCount++
          })

          const kind = getPlacementKind(typeId)
          let prepared: THREE.Object3D
          if (kind === 'wallAttach') {
            prepared = meshCount > 1 ? mergePanelScene(gltf.scene) : gltf.scene
          } else if (meshCount > 8) {
            prepared = optimizeModuleScene(gltf.scene)
          } else {
            prepared = gltf.scene
          }

          for (const def of PRIMITIVE_DEFINITIONS) {
            if (def.modelUrl === modelUrl) {
              modelTemplates.set(def.id, prepared)
            }
          }
          modelTemplates.set(typeId, prepared)
          modelLoadPromises.delete(pendingKey)
          resolve(prepared)
        },
        undefined,
        (error) => {
          modelLoadPromises.delete(pendingKey)
          reject(error)
        },
      )
    })

    modelLoadPromises.set(pendingKey, promise)
    return promise
  }

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

  const createBoxPrimitive = (
    primitive: StoreState['primitives'][number],
    selected: boolean,
  ) => {
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
        emissive: selected ? new THREE.Color(0x0071e3) : new THREE.Color(0x000000),
        emissiveIntensity: selected ? 0.15 : 0,
      }),
    )
    mesh.position.set(pos.x, pos.y, pos.z)
    mesh.userData.primitiveId = primitive.id
    return mesh
  }

  const createAccessoryPrimitive = (
    primitive: StoreState['primitives'][number],
    selected: boolean,
  ) => {
    const def = getPrimitiveDefinition(primitive.typeId)
    const isPanel =
      primitive.typeId === 'panel4x8' || primitive.typeId === 'panel8x8'

    if (primitive.hostId && primitive.face) {
      const host = useDesignStore
        .getState()
        .primitives.find((p) => p.id === primitive.hostId)
      if (host) {
        const pose = computeWallAttachment(host, primitive.face, primitive.typeId)
        if (pose) {
          let group: THREE.Object3D

          if (isPanel && def?.modelUrl) {
            const template = modelTemplates.get(primitive.typeId)
            if (template) {
              group = fitPanelModel(template, getPanelLocalSize(pose.wallWidth))
            } else {
              group = createAccessoryMesh(primitive.typeId, pose.wallWidth)
              void loadModelTemplate(primitive.typeId, def.modelUrl)
                .then(() => {
                  if (disposed) return
                  rebuildPrimitives(useDesignStore.getState())
                })
                .catch((error) => {
                  console.error('Failed to load panel GLB:', error)
                })
            }
          } else {
            group = createAccessoryMesh(primitive.typeId, pose.wallWidth)
          }

          group.rotation.y = pose.rotationY
          group.position.set(pose.center.x, pose.center.y, pose.center.z)
          group.userData.primitiveId = primitive.id
          group.traverse((child) => {
            child.userData.primitiveId = primitive.id
          })
          setSelectionHighlight(group, selected)
          return group
        }
      }
    }

    const group = createAccessoryMesh(primitive.typeId)
    group.position.set(
      primitive.gridX + primitive.size[0] / 2,
      0,
      primitive.gridZ + primitive.size[2] / 2,
    )
    group.rotation.y = primitive.rotationY ?? 0
    group.userData.primitiveId = primitive.id
    group.traverse((child) => {
      child.userData.primitiveId = primitive.id
    })
    setSelectionHighlight(group, selected)
    return group
  }

  const createModelPrimitive = (
    template: THREE.Object3D,
    primitive: StoreState['primitives'][number],
    selected: boolean,
  ) => {
    const steelLocal =
      getModelLocalSize(primitive.typeId) ?? [
        primitive.size[0],
        STEEL_HEIGHT_FT,
        primitive.size[2],
      ]
    const composed = composeModule(
      template,
      steelLocal,
      primitive.baseHeight ?? 1,
    )
    composed.rotation.y = primitive.rotationY ?? 0

    // Place using footprint size (may differ from local model size when rotated)
    composed.position.set(
      primitive.gridX + primitive.size[0] / 2,
      0,
      primitive.gridZ + primitive.size[2] / 2,
    )
    composed.userData.primitiveId = primitive.id
    composed.traverse((child) => {
      child.userData.primitiveId = primitive.id
    })
    setSelectionHighlight(composed, selected)
    return composed
  }

  const rebuildPrimitives = (state: StoreState) => {
    for (const object of primitiveObjects.values()) {
      disposeObject(object)
      primitivesGroup.remove(object)
    }
    primitiveObjects.clear()

    for (const primitive of state.primitives) {
      const def = getPrimitiveDefinition(primitive.typeId)
      const selected = state.selectedPrimitiveId === primitive.id
      const kind = getPlacementKind(primitive.typeId)

      if (kind === 'wallAttach' || kind === 'free') {
        const object = createAccessoryPrimitive(primitive, selected)
        primitivesGroup.add(object)
        primitiveObjects.set(primitive.id, object)
        continue
      }

      if (def?.modelUrl) {
        const template = modelTemplates.get(primitive.typeId)
        if (template) {
          const object = createModelPrimitive(template, primitive, selected)
          primitivesGroup.add(object)
          primitiveObjects.set(primitive.id, object)
        } else {
          const placeholder = createBoxPrimitive(primitive, selected)
          primitivesGroup.add(placeholder)
          primitiveObjects.set(primitive.id, placeholder)

          void loadModelTemplate(primitive.typeId, def.modelUrl)
            .then(() => {
              if (disposed) return
              rebuildPrimitives(useDesignStore.getState())
            })
            .catch((error) => {
              console.error('Failed to load GLB model:', error)
            })
        }
      } else {
        const mesh = createBoxPrimitive(primitive, selected)
        primitivesGroup.add(mesh)
        primitiveObjects.set(primitive.id, mesh)
      }
    }
  }

  const updatePreview = (state: StoreState) => {
    if (state.activeTool !== 'place' || !state.activePrimitiveType) {
      previewMesh.visible = false
      return
    }

    const kind = getPlacementKind(state.activePrimitiveType)

    if (kind === 'wallAttach') {
      const attach = state.hoverAttachment
      if (!attach || !state.placementValid) {
        previewMesh.visible = false
        return
      }
      // Local mesh axes (length/width on X, thickness/depth on Z) + rotationY —
      // same as placed accessories. Do not use world AABB size here.
      const isBench = state.activePrimitiveType === 'bench'
      const localW = attach.wallWidth - PANEL_EDGE_CLEARANCE_FT
      const localH = isBench
        ? BENCH_SEAT_HEIGHT_FT
        : STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT
      const localD = isBench ? BENCH_DEPTH_FT : PANEL_THICKNESS_FT
      previewMesh.geometry.dispose()
      previewMesh.geometry = new THREE.BoxGeometry(localW, localH, localD)
      // Benches use bottom-origin placement; panels are center-origin
      const y = isBench ? attach.center.y + localH / 2 : attach.center.y
      previewMesh.position.set(attach.center.x, y, attach.center.z)
      previewMesh.rotation.y = attach.rotationY
      ;(previewMesh.material as THREE.MeshStandardMaterial).color.set(0x0071e3)
      previewMesh.visible = true
      return
    }

    if (!state.hoverGrid) {
      previewMesh.visible = false
      return
    }

    const size = getPlaceSize(state.activePrimitiveType, state.activeBaseHeight)
    if (!size) {
      previewMesh.visible = false
      return
    }

    const [w, h, d] = size
    const pos = gridToWorldPosition(state.hoverGrid.x, state.hoverGrid.z, size)
    previewMesh.geometry.dispose()
    previewMesh.geometry = new THREE.BoxGeometry(w, h, d)
    previewMesh.position.set(pos.x, pos.y, pos.z)
    previewMesh.rotation.y = 0
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
      worldX: hit.x,
      worldZ: hit.z,
      ray: {
        origin: {
          x: raycaster.ray.origin.x,
          y: raycaster.ray.origin.y,
          z: raycaster.ray.origin.z,
        },
        direction: {
          x: raycaster.ray.direction.x,
          y: raycaster.ray.direction.y,
          z: raycaster.ray.direction.z,
        },
      },
    }
  }

  let stickyWallFace: WallFace | null = null

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
      const kind = getPlacementKind(state.activePrimitiveType)
      let attachment = null as ReturnType<typeof findWallAttachmentNear>
      if (kind === 'wallAttach') {
        attachment = findWallAttachmentNear(
          gridPos.worldX,
          gridPos.worldZ,
          state.activePrimitiveType,
          state.primitives,
          undefined,
          {
            stickyFace: stickyWallFace,
            ray: gridPos.ray,
          },
        )
        stickyWallFace = attachment?.face ?? null
      } else {
        stickyWallFace = null
      }
      const valid = canPlacePrimitive(
        state.activePrimitiveType,
        gridPos.gridX,
        gridPos.gridZ,
        state.boundingBox,
        state.primitives,
        state.activeBaseHeight,
        undefined,
        attachment,
      )
      useDesignStore
        .getState()
        .setHoverGrid({ x: gridPos.gridX, z: gridPos.gridZ }, valid, attachment)
      renderer.domElement.style.cursor = valid ? 'crosshair' : 'not-allowed'
    } else {
      stickyWallFace = null
      renderer.domElement.style.cursor = 'default'
    }
  }

  const onPointerLeave = () => {
    stickyWallFace = null
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

    const hits = raycaster.intersectObjects([...primitiveObjects.values()], true)
    if (hits.length > 0) {
      const id = hits[0].object.userData.primitiveId as string | undefined
      useDesignStore.getState().selectPrimitive(id ?? null)
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

  // Prefetch pavilion module + panel GLBs so first placement / merge is fast
  for (const id of ['block', 'block4x8', 'block8', 'panel4x8', 'panel8x8'] as const) {
    const def = getPrimitiveDefinition(id)
    if (def?.modelUrl) {
      void loadModelTemplate(id, def.modelUrl).catch((error) => {
        console.error(`Failed to prefetch ${id} GLB:`, error)
      })
    }
  }

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
        state.activeBaseHeight !== currentState.activeBaseHeight ||
        state.hoverGrid !== currentState.hoverGrid ||
        state.hoverAttachment !== currentState.hoverAttachment ||
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
      disposed = true
      cancelAnimationFrame(animationId)
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave)
      renderer.domElement.removeEventListener('click', onClick)

      for (const object of primitiveObjects.values()) {
        disposeObject(object)
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
      dracoLoader.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    },
  }
}
