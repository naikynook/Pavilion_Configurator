import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from https://<user>.github.io/<repo>/
// Set VITE_BASE_PATH=/YourRepoName/ when building for Pages (done in CI).
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
  optimizeDeps: {
    include: ['three', 'zustand', 'react', 'react-dom'],
  },
})
