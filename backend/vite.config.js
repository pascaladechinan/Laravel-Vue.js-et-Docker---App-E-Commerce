import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // ⚠️ Essentiel pour Docker
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost',
      clientPort: 5173  // ⚠️ Important pour le hot-reload
    },
    watch: {
      usePolling: true  // ⚠️ Nécessaire pour Docker sur Windows
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})