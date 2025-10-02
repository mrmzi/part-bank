import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/main" as *;`,
      },
    },
  },
  server: {
    proxy: {
      '/auth': {
        target: 'https://turbofront5.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/deposit-account': {
        target: 'https://turbofront5.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
