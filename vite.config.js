import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    }
  },
  server: {
    open: true
  }
})
