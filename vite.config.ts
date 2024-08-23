import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/mh-frontend/',
  server: {
    hmr: true, // Hot Module Replacement is enabled by default
    host: '0.0.0.0', // Allows access from any IP address
    port: 3000, // Or your chosen port
  },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/config.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: './index.html'
        }
      }
    }
  });