import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// serve /about, /offer, /book as their .html files in dev & preview
// (production hosts handle this via cleanUrls / pretty URLs)
const cleanUrls = () => ({
  name: 'clean-urls',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (/^\/(about|offer|book)\/?$/.test(req.url.split('?')[0])) {
        req.url = req.url.replace(/^\/(about|offer|book)\/?/, '/$1.html');
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (/^\/(about|offer|book)\/?$/.test(req.url.split('?')[0])) {
        req.url = req.url.replace(/^\/(about|offer|book)\/?/, '/$1.html');
      }
      next();
    });
  },
});

export default defineConfig({
  // VITE_BASE lets the GitHub Pages workflow build for the repo subpath;
  // local dev/preview and the eventual real domain use the default '/'.
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss(), cleanUrls()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        offer: resolve(__dirname, 'offer.html'),
        book: resolve(__dirname, 'book.html'),
      },
    },
  },
});
