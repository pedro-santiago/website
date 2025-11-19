import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'src/public'),
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,gif}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024, // 8 MB
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: '~/pedrosantiago.com.br/main.php',
        short_name: 'Pedro Santiago',
        description: 'Portfolio of Pedro Oliveira - CTO as a Service & PHP Specialist',
        theme_color: '#272822',
        background_color: '#272822',
        display: 'standalone',
        icons: [
          {
            src: '/logo@192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo@512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
    },
  },
  server: {
    port: 3000,
    host: 'localhost',
  },
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: '',
      },
    },
  },
});
