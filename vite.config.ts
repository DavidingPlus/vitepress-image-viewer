import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist/types' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ImageViewer',
      formats: ['es', 'umd'],
      fileName: (format) => `image-viewer.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: {
        globals: {
          vue: 'Vue',
          vitepress: 'vitepress'
        },
        assetFileNames(chunkInfo) {
          let fileName = chunkInfo.name
          if (fileName && fileName.endsWith('.css')) {
            fileName = 'style.css'
          }
          return fileName || '[name].[ext]'
        }
      }
    }
  }
})