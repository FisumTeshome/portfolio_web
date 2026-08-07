import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  return {
    // Use relative asset paths so the build works on GitHub Pages and Vercel
    // This avoids hardcoding the repo name and prevents 404s for assets.
    base: './',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
