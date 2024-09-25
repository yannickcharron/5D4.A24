import { fileURLToPath, URL } from "url"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: 'src/renderer',
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@renderer',
        replacement: fileURLToPath(new URL('./src/renderer/src', import.meta.url))
      }
    ]
  }
})
