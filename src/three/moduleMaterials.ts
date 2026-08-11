import * as THREE from 'three'

/** Larger grain on ~4×4 ft bases (lower repeat = bigger features). */
const PLYWOOD_REPEAT = 0.45
/** Diffuse brighten: multiply then add (keeps grain, lifts midtones). */
const PLYWOOD_BRIGHTNESS = 1.45
const PLYWOOD_LIFT = 36

function resolveTextureUrl(path: string) {
  const base = import.meta.env.BASE_URL ?? '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`
}

function configurePlywoodMap(texture: THREE.Texture, isColor = false) {
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(PLYWOOD_REPEAT, PLYWOOD_REPEAT)
  texture.anisotropy = 8
  if (isColor) texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

function brightenDiffuseImage(
  image: HTMLImageElement | ImageBitmap | HTMLCanvasElement,
): HTMLCanvasElement {
  const width =
    'naturalWidth' in image && image.naturalWidth
      ? image.naturalWidth
      : image.width
  const height =
    'naturalHeight' in image && image.naturalHeight
      ? image.naturalHeight
      : image.height
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(image, 0, 0, width, height)
  const frame = ctx.getImageData(0, 0, width, height)
  const data = frame.data
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, data[i] * PLYWOOD_BRIGHTNESS + PLYWOOD_LIFT)
    data[i + 1] = Math.min(
      255,
      data[i + 1] * PLYWOOD_BRIGHTNESS + PLYWOOD_LIFT,
    )
    data[i + 2] = Math.min(
      255,
      data[i + 2] * PLYWOOD_BRIGHTNESS + PLYWOOD_LIFT,
    )
  }
  ctx.putImageData(frame, 0, 0)
  return canvas
}

function loadPlywoodDiffuse(): THREE.Texture {
  const loader = new THREE.TextureLoader()
  const texture = loader.load(
    resolveTextureUrl('textures/plywood_diff_1k.jpg'),
    (tex) => {
      tex.image = brightenDiffuseImage(tex.image)
      configurePlywoodMap(tex, true)
    },
  )
  return configurePlywoodMap(texture, true)
}

let plywoodMaps: {
  map: THREE.Texture
  normalMap: THREE.Texture
  roughnessMap: THREE.Texture
} | null = null

function getPlywoodMaps() {
  if (!plywoodMaps) {
    const loader = new THREE.TextureLoader()
    plywoodMaps = {
      map: loadPlywoodDiffuse(),
      normalMap: configurePlywoodMap(
        loader.load(resolveTextureUrl('textures/plywood_nor_gl_1k.jpg')),
      ),
      roughnessMap: configurePlywoodMap(
        loader.load(resolveTextureUrl('textures/plywood_rough_1k.jpg')),
      ),
    }
  }
  return plywoodMaps
}

function createMetalTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#B0B5BC'
  ctx.fillRect(0, 0, size, size)

  for (let y = 0; y < size; y++) {
    const shade = 0.9 + Math.random() * 0.2
    ctx.fillStyle = `rgba(${Math.floor(175 * shade)}, ${Math.floor(180 * shade)}, ${Math.floor(186 * shade)}, 0.3)`
    ctx.fillRect(0, y, size, 1)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(4, 4)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

let metalMap: THREE.CanvasTexture | null = null

function getMetalMap() {
  if (!metalMap) metalMap = createMetalTexture()
  return metalMap
}

export function createPlywoodMaterial() {
  const maps = getPlywoodMaps()
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ffffff'),
    map: maps.map,
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughnessMap: maps.roughnessMap,
    roughness: 1,
    metalness: 0.02,
    envMapIntensity: 0.35,
  })
}

/**
 * Match base BoxGeometry UV density: a 4×4 ft face uses ~0–1 UV space.
 * Stool / wall-panel GLBs ship without TEXCOORDs, so the map would otherwise
 * sample a single texel and look flat.
 */
const PLYWOOD_UV_PER_FT = 1 / 4

export function ensurePlywoodUVs(geometry: THREE.BufferGeometry) {
  if (geometry.userData.plywoodUVs) return
  const pos = geometry.getAttribute('position')
  if (!pos || pos.count === 0) return

  if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
  const nrm = geometry.getAttribute('normal')
  const uvs = new Float32Array(pos.count * 2)

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    const z = pos.getZ(i)
    const nx = Math.abs(nrm.getX(i))
    const ny = Math.abs(nrm.getY(i))
    const nz = Math.abs(nrm.getZ(i))

    let u: number
    let v: number
    if (nx >= ny && nx >= nz) {
      u = z * PLYWOOD_UV_PER_FT
      v = y * PLYWOOD_UV_PER_FT
    } else if (ny >= nx && ny >= nz) {
      u = x * PLYWOOD_UV_PER_FT
      v = z * PLYWOOD_UV_PER_FT
    } else {
      u = x * PLYWOOD_UV_PER_FT
      v = y * PLYWOOD_UV_PER_FT
    }
    uvs[i * 2] = u
    uvs[i * 2 + 1] = v
  }

  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
  geometry.userData.plywoodUVs = true
}

/** Apply shared plywood maps + box-projected UVs (for panels, stools, etc.). */
export function applyPlywoodToMesh(mesh: THREE.Mesh) {
  ensurePlywoodUVs(mesh.geometry)
  mesh.material = createPlywoodMaterial()
}

export function applyPlywoodToObject(root: THREE.Object3D) {
  root.traverse((child) => {
    if (child instanceof THREE.Mesh) applyPlywoodToMesh(child)
  })
}

export function createMetalMaterial() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color('#C5CAD1'),
    map: getMetalMap(),
    roughness: 0.32,
    metalness: 0.92,
    envMapIntensity: 1.15,
  })
}

/** Solid paint for wall panels (no texture). */
export function createSolidPanelMaterial(hex: string) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(hex),
    roughness: 0.72,
    metalness: 0.04,
    envMapIntensity: 0.4,
  })
}

function isWallPanelSheet(mesh: THREE.Mesh) {
  const n = mesh.name || ''
  return n === 'wall-panel-sheet' || n.startsWith('wall-panel-sheet')
}

/**
 * Plywood texture, or solid hex paint, on wall-panel sheet meshes only
 * (leaves seam kerf / bolts alone).
 */
export function applyPanelFinish(root: THREE.Object3D, color?: string | null) {
  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !isWallPanelSheet(child)) return
    if (color) {
      child.material = createSolidPanelMaterial(color)
    } else {
      applyPlywoodToMesh(child)
    }
  })
}

/**
 * Assign plywood to the square base and metal to steel members.
 * Supports optimized meshes (`module-base` / `module-steel`) and raw height heuristic.
 */
export function applyModuleMaterials(object: THREE.Object3D) {
  object.updateMatrixWorld(true)
  const fullBox = new THREE.Box3().setFromObject(object)
  const fullHeight = Math.max(fullBox.max.y - fullBox.min.y, 1e-6)
  const baseTop = fullBox.min.y + fullHeight * 0.12

  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return

    if (
      child.name === 'module-bolt' ||
      child.name === 'module-foot' ||
      child.name === 'module-xyz' ||
      child.name === 'module-connection' ||
      child.name === 'wall-panel-sheet' ||
      child.name.startsWith('wall-panel-sheet') ||
      child.name.startsWith('module-foot') ||
      child.name.startsWith('module-xyz') ||
      child.name.startsWith('module-bolt')
    ) {
      return
    }

    if (child.name === 'module-base') {
      return
    }

    const byName =
      child.name === 'module-connector' ||
      child.name === 'module-steel' ||
      child.name === 'module-bracket' ||
      child.name.startsWith('module-bolt')
        ? 'steel'
        : null

    const meshBox = new THREE.Box3().setFromObject(child)
    const isBase =
      byName == null &&
      (child.name === 'mesh_8' || meshBox.max.y <= baseTop + fullHeight * 0.01)

    child.material =
      byName === 'steel' || (!isBase && byName == null)
        ? createMetalMaterial()
        : createPlywoodMaterial()
  })
}
