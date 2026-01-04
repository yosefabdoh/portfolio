import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Remove comments from production builds
          comments: false,
          // Optimize whitespace handling
          whitespace: 'condense',
        },
      },
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Enable source maps for debugging in production
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['@vueuse/motion'],
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name || '')) {
            return 'assets/media/[name]-[hash].[ext]'
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash].[ext]'
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name || '')) {
            return 'assets/fonts/[name]-[hash].[ext]'
          }
          return `assets/${ext}/[name]-[hash].[ext]`
        },
      },
    },
    // Optimize dependencies
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', '@vueuse/motion'],
  },
  server: {
    fs: {
      // Improve file serving performance
      strict: false,
    },
  },
  define: {
    // Remove console logs in production
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
  esbuild: {
    // Drop console and debugger in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
