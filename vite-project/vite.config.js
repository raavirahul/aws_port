import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000, // optional
    },
    host: true,      // optional, helps on some networks
    port: 5173,      // default
  },
})
