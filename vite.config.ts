import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@layouts': path.resolve(import.meta.dirname, './src/layouts'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@models': path.resolve(import.meta.dirname, './src/models'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@services': path.resolve(import.meta.dirname, './src/services'),
    },
  },
})
