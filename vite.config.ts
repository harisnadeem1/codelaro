import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
   server: {
  host: '0.0.0.0',
  port: 3000,
  strictPort: true,
  allowedHosts: true,
},

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    plugins: [
        reactRouter(),
    ],
});