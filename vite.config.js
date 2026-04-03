import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Change base to '/portfolio/' if deploying to huunghia2807.github.io/portfolio
  base: './',
})
