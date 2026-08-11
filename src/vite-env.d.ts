/// <reference types="vite/client" />

declare module 'draco3dgltf' {
  const draco3dgltf: {
    createEncoderModule: (config?: {
      wasmBinary?: ArrayBuffer
      locateFile?: (path: string, prefix?: string) => string
    }) => Promise<unknown>
    createDecoderModule: (config?: {
      wasmBinary?: ArrayBuffer
      locateFile?: (path: string, prefix?: string) => string
    }) => Promise<unknown>
  }
  export default draco3dgltf
}
