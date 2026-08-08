import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: mode === 'gh-pages' ? '/portfolio_web/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})