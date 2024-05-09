import { fileURLToPath, URL } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),//vite打包分chunk👩
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {//vite打包分chunk设置规则👩
          'vue-common-lib': ['vue', 'vue-router', 'pinia'],
          'react-common-lib': ['react', 'react-dom', '@glideapps/glide-data-grid'],
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})