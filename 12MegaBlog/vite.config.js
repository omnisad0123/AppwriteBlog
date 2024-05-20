import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' directory
  },
  server: {
    open: true, // Automatically opens the browser when the server starts
  },
})
