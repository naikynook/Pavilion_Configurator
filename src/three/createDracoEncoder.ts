import draco3d from 'draco3dgltf'

function resolvePublicUrl(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`
}

function isWasmMagic(buffer: ArrayBuffer) {
  if (buffer.byteLength < 4) return false
  const b = new Uint8Array(buffer, 0, 4)
  // \0asm
  return b[0] === 0x00 && b[1] === 0x61 && b[2] === 0x73 && b[3] === 0x6d
}

/**
 * Load the Draco glTF encoder with an explicit WASM binary from /public/draco
 * so Vite workers don't fetch HTML (SPA fallback) instead of the .wasm file.
 */
export async function createDracoEncoder() {
  const wasmUrl = resolvePublicUrl('draco/draco_encoder.wasm')
  const response = await fetch(wasmUrl)
  if (!response.ok) {
    throw new Error(`Failed to load Draco encoder WASM (${response.status}).`)
  }
  const wasmBinary = await response.arrayBuffer()
  if (!isWasmMagic(wasmBinary)) {
    throw new Error(
      'Draco encoder WASM was not valid (got HTML/text instead of binary).',
    )
  }
  return draco3d.createEncoderModule({ wasmBinary })
}
