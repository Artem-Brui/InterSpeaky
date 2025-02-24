import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  base: './',
  resolve: {
    alias: {
      '@global-css': '/src/styles/global',
      '@components': '/src/components',
      '@images': '/public/images',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/variables" as *;
          @use "src/styles/mixins" as *;
          @use "src/styles/global" as *;
        `,
      },
    },
  },
})
