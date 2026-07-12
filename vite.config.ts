import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev uses /. GitHub Actions build uses ./ for relative asset paths in docs/.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
  optimizeDeps: {
    include: ['three', 'zustand', 'react', 'react-dom'],
  },
})
