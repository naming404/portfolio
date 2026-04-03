import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages: set to '/<repo-name>/' if deploying to huunghia2807.github.io/<repo-name>
  // Set to '/' if deploying to huunghia2807.github.io (root domain repo)
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})
