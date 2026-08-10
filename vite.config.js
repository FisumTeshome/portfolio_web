import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => ({
  base: mode === 'gh-pages' ? '/portfolio_web/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}))
