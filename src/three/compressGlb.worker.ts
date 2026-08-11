/**
 * Optimizes GLB off the main thread for Rhino / Blender using Draco.
 * WASM is loaded from /public/draco/draco_encoder.wasm (not Meshopt).
 */
import { WebIO } from '@gltf-transform/core'
import {
  KHRDracoMeshCompression,
  KHRMeshQuantization,
} from '@gltf-transform/extensions'
import { dedup, dequantize, draco, prune, weld } from '@gltf-transform/functions'
import { createDracoEncoder } from './createDracoEncoder'

async function optimizeGlb(raw: ArrayBuffer): Promise<ArrayBuffer> {
  const encoder = await createDracoEncoder()
  const io = new WebIO()
    // Three's GLTFExporter may mark KHR_mesh_quantization as required.
    .registerExtensions([KHRDracoMeshCompression, KHRMeshQuantization])
    .registerDependencies({ 'draco3d.encoder': encoder })

  const document = await io.readBinary(new Uint8Array(raw))
  await document.transform(
    // Float attrs only — Rhino doesn't need mesh quantization.
    dequantize(),
    dedup(),
    weld(),
    draco({ method: 'edgebreaker' }),
    prune(),
  )
  const out = await io.writeBinary(document)
  return out.buffer.slice(
    out.byteOffset,
    out.byteOffset + out.byteLength,
  ) as ArrayBuffer
}

self.onmessage = async (event: MessageEvent<ArrayBuffer>) => {
  try {
    const buffer = await optimizeGlb(event.data)
    self.postMessage({ ok: true as const, buffer }, { transfer: [buffer] })
  } catch (error) {
    self.postMessage({
      ok: false as const,
      message: error instanceof Error ? error.message : String(error),
    })
  }
}

export {}
