import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {
  PANEL_THICKNESS_FT,
  PANEL_WIDTH_FT,
  STEEL_AUTHOR_SPAN_FT,
  STEEL_EDGE_INSET_FT,
  STEEL_FOOT_LIFT_FT,
  STEEL_HEIGHT_FT,
  getModelLocalSize,
  getPanelDisplaySize,
  getPlaceSize,
  getPlacementKind,
  getPrimitiveDefinition,
  PRIMITIVE_DEFINITIONS,
  panelHeightScale,
} from '../constants/primitives'
import {
  canPlacePrimitive,
  findStoolAttachmentNear,
  findWallAttachmentNear,
  gridToWorldPosition,
  useDesignStore,
} from '../store/designStore'
import type { BaseHeightFt, PrimitiveTypeId, WallFace } from '../types'
import {
  STOOL_DEPTH_FT,
  STOOL_HEIGHT_FT,
  STOOL_WIDTH_FT,
  createAccessoryMesh,
} from './createFurniture'
import {
  applyModuleMaterials,
  applyPanelFinish,
  applyPlywoodToObject,
  createMetalMaterial,
  createPlywoodMaterial,
} from './moduleMaterials'
import { addPanelBolts } from './createPanelHardware'
import { flattenAuthoredScene, optimizeModuleScene } from './optimizeModule'
import { computeWallAttachment } from '../logic/wallAttach'
import { computeStoolAttachment } from '../logic/stoolAttach'
import { exportDesignGlb } from './exportDesignGlb'
import { exportDesignUsdz } from './exportDesignUsdz'
import { registerViewportExport } from './viewportBridge'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

type StoreState = ReturnType<typeof useDesignStore.getState>

// Keep grid below y=0 so the bounding box bottom edge doesn't z-fight with it.
const GRID_Y_OFFSET = -0.02
const BOUNDING_FLOOR_Y = 0.02

interface ViewportApi {
  sync: (state: StoreState) => void
  resize: () => void
  dispose: () => void
  exportDesignGlb: () => Promise<{
    filename: string
    meshCount: number
    byteSize: number
    rawByteSize: number
  }>
  exportDesignUsdz: () => Promise<{
    filename: string
    meshCount: number
    byteSize: number
    triangleCount: number
  }>
  hasDesign: () => boolean
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
 * Wall-panel GLB: two authored plywood sheets.
 * Scale X/Y to match the fitted steel (same sy as the module GLB) so the
 * sheet still clears under the top rail after steel is fit to 8 ft.
 * Thickness stays true ¾″. Back at z=0 against the tube exterior; +Z outward.
 */
function fitPanelModel(
  source: THREE.Object3D,
  wallWidth = 8,
  color?: string | null,
) {
  const root = source.clone(true)
  const steelW = Math.max(wallWidth - 2 * STEEL_EDGE_INSET_FT, 1)
  const sx = steelW / STEEL_AUTHOR_SPAN_FT
  const sy = panelHeightScale()
  root.scale.set(sx, sy, 1)

  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (!child.name.startsWith('wall-panel-sheet')) {
        child.name = 'wall-panel-sheet'
      }
    }
  })
  applyPanelFinish(root, color)

  // Dark kerf at the joint between the two sheets (local units; scaled with root)
  const kerf = new THREE.Mesh(
    new THREE.BoxGeometry(PANEL_WIDTH_FT * 0.998, 0.12 / 12, PANEL_THICKNESS_FT * 1.05),
    new THREE.MeshStandardMaterial({
      color: 0x2c2820,
      roughness: 1,
      metalness: 0,
    }),
  )
  kerf.name = 'wall-panel-seam'
  kerf.position.set(0, 44.875 / 12, PANEL_THICKNESS_FT / 2)
  root.add(kerf)

  const wrapper = new THREE.Group()
  wrapper.name = 'wall-panel-root'
  wrapper.add(root)
  addPanelBolts(wrapper, { sx, sy })
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

  // Fallback: if names were lost, keep only the tall mesh (steel), drop short base
  const meshes: THREE.Mesh[] = []
  source.traverse((child) => {
    if (child instanceof THREE.Mesh) meshes.push(child)
  })
  if (meshes.length >= 2) {
    meshes.sort((a, b) => {
      const ha = new THREE.Box3().setFromObject(a).getSize(new THREE.Vector3()).y
      const hb = new THREE.Box3().setFromObject(b).getSize(new THREE.Vector3()).y
      return hb - ha
    })
    const group = new THREE.Group()
    group.add(meshes[0].clone(true))
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

/** Cache key for a pre-fitted steel frame (avoids re-fitting huge meshes on every place). */
function steelFitKey(
  typeId: string,
  steelW: number,
  steelH: number,
  steelD: number,
) {
  return `${typeId}:${steelW.toFixed(4)}x${steelH.toFixed(4)}x${steelD.toFixed(4)}`
}

const BASE_CELL_FT = 4
/** Visible joint between adjacent 4×4 boxes — ~1½″ (couple inches max). */
const BASE_SEAM_GAP_FT = 0.125

/**
 * Real builds keep discrete 4×4 plywood boxes joined with slider connectors.
 * Tile the plinth to match that — even when the steel frame is a merged 4×8 / 8×8.
 *
 * Outer edges are inset by half a seam so two modules placed edge-to-edge
 * (e.g. two 8×8s) show the same gap as internal box joints, while everything
 * stays centered neatly inside the grid footprint.
 */
function createTiledPlywoodBase(
  footprintW: number,
  footprintD: number,
  baseHeight: number,
) {
  const group = new THREE.Group()
  group.name = 'module-base-root'

  const cellsX = Math.max(1, Math.round(footprintW / BASE_CELL_FT))
  const cellsZ = Math.max(1, Math.round(footprintD / BASE_CELL_FT))
  const outerInset = BASE_SEAM_GAP_FT / 2
  const usableW = Math.max(footprintW - 2 * outerInset, BASE_CELL_FT * 0.85)
  const usableD = Math.max(footprintD - 2 * outerInset, BASE_CELL_FT * 0.85)
  const gap = cellsX > 1 || cellsZ > 1 ? BASE_SEAM_GAP_FT : 0
  const boxW = (usableW - gap * (cellsX - 1)) / cellsX
  const boxD = (usableD - gap * (cellsZ - 1)) / cellsZ
  const ply = createPlywoodMaterial()
  const metal = createMetalMaterial()

  const originX = -usableW / 2
  const originZ = -usableD / 2

  for (let ix = 0; ix < cellsX; ix++) {
    for (let iz = 0; iz < cellsZ; iz++) {
      const cx = originX + ix * (boxW + gap) + boxW / 2
      const cz = originZ + iz * (boxD + gap) + boxD / 2
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(boxW, baseHeight, boxD),
        ply,
      )
      box.name = 'module-base'
      box.position.set(cx, baseHeight / 2, cz)
      group.add(box)
    }
  }

  // Furniture slider connectors along each shared edge (2 per seam)
  const connectorLen = Math.min(0.85, Math.min(boxW, boxD) * 0.35)
  const connectorH = Math.min(0.22, baseHeight * 0.35)
  const connectorT = gap > 0 ? gap * 0.85 : BASE_SEAM_GAP_FT * 0.85

  const addConnectorsAlongSeam = (
    midX: number,
    midZ: number,
    alongX: boolean,
  ) => {
    const span = alongX ? boxW : boxD
    const offsets = [-span * 0.22, span * 0.22]
    for (const offset of offsets) {
      const sleeve = new THREE.Mesh(
        new THREE.BoxGeometry(
          alongX ? connectorLen : connectorT * 1.6,
          connectorH,
          alongX ? connectorT * 1.6 : connectorLen,
        ),
        metal,
      )
      sleeve.name = 'module-connector'
      sleeve.position.set(
        midX + (alongX ? offset : 0),
        baseHeight * 0.55,
        midZ + (alongX ? 0 : offset),
      )
      group.add(sleeve)

      const tongue = new THREE.Mesh(
        new THREE.BoxGeometry(
          alongX ? connectorLen * 0.7 : connectorT * 0.55,
          connectorH * 0.55,
          alongX ? connectorT * 0.55 : connectorLen * 0.7,
        ),
        metal,
      )
      tongue.name = 'module-connector'
      tongue.position.set(
        midX + (alongX ? offset : 0.02),
        baseHeight * 0.55,
        midZ + (alongX ? 0.02 : offset),
      )
      group.add(tongue)
    }
  }

  for (let ix = 0; ix < cellsX - 1; ix++) {
    for (let iz = 0; iz < cellsZ; iz++) {
      const midX = originX + (ix + 1) * boxW + ix * gap + gap / 2
      const midZ = originZ + iz * (boxD + gap) + boxD / 2
      addConnectorsAlongSeam(midX, midZ, false)
    }
  }
  for (let iz = 0; iz < cellsZ - 1; iz++) {
    for (let ix = 0; ix < cellsX; ix++) {
      const midX = originX + ix * (boxW + gap) + boxW / 2
      const midZ = originZ + (iz + 1) * boxD + iz * gap + gap / 2
      addConnectorsAlongSeam(midX, midZ, true)
    }
  }

  return group
}

/**
 * Compose tiled 4×4 plywood bases (with slider connectors) + steel frame on top.
 * `steelTemplate` should already be extracted (and ideally pre-fitted) — do not
 * run heavy mesh surgery here; that belongs in load-time prep.
 */
function composeModule(
  steelTemplate: THREE.Object3D,
  steelSize: [number, number, number],
  baseHeight: BaseHeightFt,
  opts?: { alreadyFitted?: boolean },
) {
  const [w, steelH, d] = steelSize
  const group = new THREE.Group()

  group.add(createTiledPlywoodBase(w, d, baseHeight))

  const inset = STEEL_EDGE_INSET_FT
  const steelW = Math.max(w - 2 * inset, 1)
  const steelD = Math.max(d - 2 * inset, 1)
  const steel = opts?.alreadyFitted
    ? steelTemplate.clone(true)
    : fitObjectToSize(steelTemplate, [steelW, steelH, steelD])
  steel.name = 'module-steel-root'
  // Foot plates flush with plywood top (screws sink into wood)
  steel.position.y = baseHeight + STEEL_FOOT_LIFT_FT
  if (!opts?.alreadyFitted) {
    const metal = createMetalMaterial()
    steel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.name = 'module-steel'
        child.material = metal
      }
    })
  }
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
        material.emissive = new THREE.Color(selected ? 0xb84fd9 : 0x000000)
        material.emissiveIntensity = selected ? 0.15 : 0
      }
    }
  })
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Prefetched module / connection templates share GPU buffers across clones
      if (child.userData.sharedResource) return
      child.geometry.dispose()
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material]
      materials.forEach((material) => material.dispose())
    }
  })
}

export function createViewport(container: HTMLElement): ViewportApi {
  const width = Math.max(container.clientWidth, 1)
  const height = Math.max(container.clientHeight, 1)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#F5F5F7')

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
    createBoxEdgeGeometry(20, 20, 12),
    new THREE.LineBasicMaterial({ color: 0xb84fd9, depthTest: true }),
  )
  const boundingFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({ color: 0xb84fd9, transparent: true, opacity: 0.04 }),
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
      color: 0xb84fd9,
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
  /** Pre-extracted steel (no base) — still needs fitObjectToSize unless in fittedSteelCache */
  const steelTemplates = new Map<string, THREE.Object3D>()
  /** Pre-fitted steel clones keyed by type + target size — clone-only on place */
  const fittedSteelCache = new Map<string, THREE.Object3D>()
  const modelLoadPromises = new Map<string, Promise<THREE.Object3D>>()
  const gltfLoader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco/`)
  gltfLoader.setDRACOLoader(dracoLoader)
  gltfLoader.setMeshoptDecoder(MeshoptDecoder)
  let animationId = 0
  let currentState = useDesignStore.getState()
  let isDragging = false
  let disposed = false

  const prepareSteelTemplate = (typeId: string, scene: THREE.Object3D) => {
    if (steelTemplates.has(typeId)) return steelTemplates.get(typeId)!
    const steel = extractSteelTemplate(scene)
    const metal = createMetalMaterial()
    steel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.name = 'module-steel'
        child.material = metal
        child.userData.sharedResource = true
      }
    })
    steelTemplates.set(typeId, steel)

    // Prefit to the module's default steel size so first placement is clone-only
    const local = getModelLocalSize(typeId as PrimitiveTypeId)
    if (local) {
      const inset = STEEL_EDGE_INSET_FT
      const steelW = Math.max(local[0] - 2 * inset, 1)
      const steelD = Math.max(local[2] - 2 * inset, 1)
      const key = steelFitKey(typeId, steelW, local[1], steelD)
      if (!fittedSteelCache.has(key)) {
        const fitted = fitObjectToSize(steel, [steelW, local[1], steelD])
        fitted.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.userData.sharedResource = true
          }
        })
        fittedSteelCache.set(key, fitted)
      }
    }
    return steel
  }

  const getFittedSteel = (
    typeId: string,
    steelW: number,
    steelH: number,
    steelD: number,
  ) => {
    const key = steelFitKey(typeId, steelW, steelH, steelD)
    const cached = fittedSteelCache.get(key)
    if (cached) return { steel: cached, alreadyFitted: true as const }

    const source = steelTemplates.get(typeId)
    if (!source) return null
    const fitted = fitObjectToSize(source, [steelW, steelH, steelD])
    fitted.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.userData.sharedResource = true
      }
    })
    fittedSteelCache.set(key, fitted)
    return { steel: fitted, alreadyFitted: true as const }
  }

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
          if (kind === 'baseAttach') {
            // Stool GLB stores size in node.scale (Meshopt quantize); bake to feet.
            prepared = flattenAuthoredScene(gltf.scene)
          } else if (kind === 'wallAttach') {
            // Keep authored panel meshes (do not merge)
            prepared = gltf.scene
          } else if (meshCount > 8) {
            prepared = optimizeModuleScene(gltf.scene)
          } else {
            prepared = gltf.scene
          }

          for (const def of PRIMITIVE_DEFINITIONS) {
            if (def.modelUrl === modelUrl) {
              modelTemplates.set(def.id, prepared)
              if (getPlacementKind(def.id) === 'module') {
                prepareSteelTemplate(def.id, prepared)
              }
            }
          }
          modelTemplates.set(typeId, prepared)
          if (kind === 'module') {
            prepareSteelTemplate(typeId, prepared)
          }
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
        emissive: selected ? new THREE.Color(0xb84fd9) : new THREE.Color(0x000000),
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
    const isPanel = primitive.typeId === 'panel8x8'

    if (primitive.hostId && primitive.face) {
      const host = useDesignStore
        .getState()
        .primitives.find((p) => p.id === primitive.hostId)
      if (host) {
        const pose = computeWallAttachment(
          host,
          primitive.face,
          primitive.typeId,
          { along: primitive.attachAlong },
        )
        if (pose) {
          let group: THREE.Object3D

          if (isPanel && def?.modelUrl) {
            const template = modelTemplates.get(primitive.typeId)
            if (template) {
              group = fitPanelModel(
                template,
                pose.wallWidth,
                primitive.color,
              )
            } else {
              group = createAccessoryMesh(
                primitive.typeId,
                pose.wallWidth,
                primitive.color,
              )
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
            group = createAccessoryMesh(
              primitive.typeId,
              pose.wallWidth,
              primitive.color,
            )
          }

          if (pose.face === 'top') {
            // Parent yaws around world up (left↔right spin); child pitches
            // flat so thickness points up — avoids Euler “flip” from rotY
            // after rotX on the same object.
            const [, panelH] = getPanelDisplaySize(pose.wallWidth)
            const root = new THREE.Group()
            root.name = 'wall-panel-roof'
            root.position.set(pose.center.x, pose.center.y, pose.center.z)
            root.rotation.y = pose.rotationY
            group.rotation.x = pose.rotationX ?? -Math.PI / 2
            // Back-face center (0, panelH/2, 0) → (0,0,-panelH/2) after pitch
            group.position.set(0, 0, panelH / 2)
            root.add(group)
            root.userData.primitiveId = primitive.id
            root.traverse((child) => {
              child.userData.primitiveId = primitive.id
            })
            setSelectionHighlight(root, selected)
            return root
          }

          group.rotation.x = pose.rotationX ?? 0
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

    if (
      primitive.hostId &&
      primitive.corner != null &&
      primitive.cellIx != null &&
      primitive.cellIz != null &&
      primitive.typeId === 'stool'
    ) {
      const host = useDesignStore
        .getState()
        .primitives.find((p) => p.id === primitive.hostId)
      if (host) {
        const pose = computeStoolAttachment(
          host,
          primitive.cellIx,
          primitive.cellIz,
          primitive.corner,
        )
        const def = getPrimitiveDefinition(primitive.typeId)
        let group: THREE.Object3D
        if (def?.modelUrl) {
          const template = modelTemplates.get(primitive.typeId)
          if (template) {
            group = template.clone(true)
            group.name = 'stool'
            group.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.name = child.name || 'stool'
              }
            })
            applyPlywoodToObject(group)
          } else {
            group = createAccessoryMesh(primitive.typeId)
            void loadModelTemplate(primitive.typeId, def.modelUrl)
              .then(() => {
                if (disposed) return
                rebuildPrimitives(useDesignStore.getState())
              })
              .catch((error) => {
                console.error('Failed to load stool GLB:', error)
              })
          }
        } else {
          group = createAccessoryMesh(primitive.typeId)
        }
        group.position.set(pose.center.x, pose.center.y, pose.center.z)
        group.rotation.y = pose.rotationY
        group.userData.primitiveId = primitive.id
        group.traverse((child) => {
          child.userData.primitiveId = primitive.id
        })
        setSelectionHighlight(group, selected)
        return group
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
    const [w, steelH, d] = steelLocal
    const inset = STEEL_EDGE_INSET_FT
    const steelW = Math.max(w - 2 * inset, 1)
    const steelD = Math.max(d - 2 * inset, 1)

    // Prefer a pre-fitted steel clone (prep happens at GLB load) — avoids
    // re-fitting multi-million-vert meshes on every place / rebuild.
    const fitted = getFittedSteel(primitive.typeId, steelW, steelH, steelD)
    const steelSource =
      fitted?.steel ??
      steelTemplates.get(primitive.typeId) ??
      extractSteelTemplate(template)

    const composed = composeModule(
      steelSource,
      steelLocal,
      primitive.baseHeight ?? 1,
      { alreadyFitted: Boolean(fitted) },
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

      if (kind === 'wallAttach' || kind === 'free' || kind === 'baseAttach') {
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
      const isPanel = state.activePrimitiveType === 'panel8x8'
      const panelSize = isPanel
        ? getPanelDisplaySize(attach.wallWidth)
        : null
      const localW = isPanel
        ? panelSize![0]
        : attach.wallWidth - 2 * STEEL_EDGE_INSET_FT
      const localH = isPanel ? panelSize![1] : STEEL_HEIGHT_FT
      const localD = isPanel ? panelSize![2] : PANEL_THICKNESS_FT
      previewMesh.geometry.dispose()
      previewMesh.geometry = new THREE.BoxGeometry(localW, localH, localD)
      const isTopPanel = isPanel && attach.face === 'top'
      if (isTopPanel) {
        const pitch = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(1, 0, 0),
          attach.rotationX ?? -Math.PI / 2,
        )
        const yaw = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 1, 0),
          attach.rotationY,
        )
        previewMesh.quaternion.copy(yaw).multiply(pitch)
        previewMesh.position.set(
          attach.center.x,
          attach.center.y + localD / 2,
          attach.center.z,
        )
      } else {
        previewMesh.quaternion.identity()
        previewMesh.rotation.x = 0
        previewMesh.rotation.y = attach.rotationY
        const y = isPanel ? attach.center.y + localH / 2 : attach.center.y
        previewMesh.position.set(attach.center.x, y, attach.center.z)
      }
      previewMesh.scale.set(1, 1, 1)
      ;(previewMesh.material as THREE.MeshStandardMaterial).color.set(0xb84fd9)
      previewMesh.visible = true
      return
    }

    if (kind === 'baseAttach') {
      const attach = state.hoverAttachment
      if (!attach || !state.placementValid) {
        previewMesh.visible = false
        return
      }
      previewMesh.geometry.dispose()
      previewMesh.geometry = new THREE.BoxGeometry(
        STOOL_WIDTH_FT,
        STOOL_HEIGHT_FT,
        STOOL_DEPTH_FT,
      )
      previewMesh.quaternion.identity()
      previewMesh.rotation.set(0, attach.rotationY, 0)
      previewMesh.position.set(
        attach.center.x,
        attach.center.y + STOOL_HEIGHT_FT / 2,
        attach.center.z,
      )
      previewMesh.scale.set(1, 1, 1)
      ;(previewMesh.material as THREE.MeshStandardMaterial).color.set(0xb84fd9)
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
    previewMesh.scale.set(1, 1, 1)
    ;(previewMesh.material as THREE.MeshStandardMaterial).color.set(
      state.placementValid ? 0xb84fd9 : 0xff3b30,
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
      } else if (kind === 'baseAttach') {
        stickyWallFace = null
        attachment = findStoolAttachmentNear(
          gridPos.worldX,
          gridPos.worldZ,
          state.activePrimitiveType,
          state.primitives,
        )
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

  // Prefetch pavilion module + panel + stool GLBs so first placement / merge is fast
  for (const id of ['block', 'block4x8', 'block8', 'panel8x8', 'stool'] as const) {
    const def = getPrimitiveDefinition(id)
    if (def?.modelUrl) {
      void loadModelTemplate(id, def.modelUrl).catch((error) => {
        console.error(`Failed to prefetch ${id} GLB:`, error)
      })
    }
  }

  const api: ViewportApi = {
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

    hasDesign() {
      return currentState.primitives.length > 0
    },

    async exportDesignGlb() {
      const result = await exportDesignGlb(
        primitivesGroup,
        currentState.primitives,
      )
      return {
        filename: result.filename,
        meshCount: result.meshCount,
        byteSize: result.byteSize,
        rawByteSize: result.rawByteSize,
      }
    },

    async exportDesignUsdz() {
      const result = await exportDesignUsdz(
        primitivesGroup,
        currentState.primitives,
      )
      return {
        filename: result.filename,
        meshCount: result.meshCount,
        byteSize: result.byteSize,
        triangleCount: result.triangleCount,
      }
    },

    dispose() {
      disposed = true
      registerViewportExport(null)
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

  registerViewportExport({
    hasDesign: () => api.hasDesign(),
    exportDesignGlb: () => api.exportDesignGlb(),
    exportDesignUsdz: () => api.exportDesignUsdz(),
  })

  return api
}
