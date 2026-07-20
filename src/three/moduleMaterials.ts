import * as THREE from 'three'

function createPlywoodTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#D2B48C'
  ctx.fillRect(0, 0, size, size)

  for (let y = 0; y < size; y += 1) {
    const band = Math.floor(y / 18) % 2
    const shade = band === 0 ? 0.92 : 1.05
    const noise = (Math.sin(y * 0.35) + Math.sin(y * 0.11 + 2)) * 4
    ctx.fillStyle = `rgba(${Math.floor(180 * shade)}, ${Math.floor(140 * shade)}, ${Math.floor(90 * shade)}, 0.18)`
    ctx.fillRect(0, y, size, 1)
    if (y % 18 === 0) {
      ctx.strokeStyle = 'rgba(120, 85, 50, 0.25)'
      ctx.beginPath()
      ctx.moveTo(0, y + noise * 0.1)
      ctx.lineTo(size, y + noise * 0.1)
      ctx.stroke()
    }
  }

  for (let i = 0; i < 90; i++) {
    const x = Math.random() * size
    ctx.strokeStyle = `rgba(110, 75, 40, ${0.04 + Math.random() * 0.08})`
    ctx.lineWidth = 1 + Math.random() * 2
    ctx.beginPath()
    ctx.moveTo(x, 0)
    let px = x
    for (let y = 0; y < size; y += 8) {
      px += (Math.random() - 0.5) * 6
      ctx.lineTo(px, y)
    }
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 2)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function createMetalTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#8A8F96'
  ctx.fillRect(0, 0, size, size)

  for (let y = 0; y < size; y++) {
    const shade = 0.85 + Math.random() * 0.25
    ctx.fillStyle = `rgba(${Math.floor(140 * shade)}, ${Math.floor(145 * shade)}, ${Math.floor(150 * shade)}, 0.35)`
    ctx.fillRect(0, y, size, 1)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(4, 4)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

let plywoodMap: THREE.CanvasTexture | null = null
let metalMap: THREE.CanvasTexture | null = null

function getPlywoodMap() {
  if (!plywoodMap) plywoodMap = createPlywoodTexture()
  return plywoodMap
}

function getMetalMap() {
  if (!metalMap) metalMap = createMetalTexture()
  return metalMap
}

export function createPlywoodMaterial() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color('#C9A36A'),
    map: getPlywoodMap(),
    roughness: 0.85,
    metalness: 0.02,
    envMapIntensity: 0.4,
  })
}

export function createMetalMaterial() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color('#9AA0A8'),
    map: getMetalMap(),
    roughness: 0.35,
    metalness: 0.95,
    envMapIntensity: 1.2,
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

    const byName =
      child.name === 'module-base'
        ? 'base'
        : child.name === 'module-steel'
          ? 'steel'
          : null

    const meshBox = new THREE.Box3().setFromObject(child)
    const isBase =
      byName === 'base' ||
      (byName == null &&
        (child.name === 'mesh_8' || meshBox.max.y <= baseTop + fullHeight * 0.01))

    child.material = isBase ? createPlywoodMaterial() : createMetalMaterial()
  })
}
