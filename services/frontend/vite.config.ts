import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    proxy: {
      '/api/': {
        target: 'http://localhost:3001',
      },
    },
    port: 3000,
    strictPort: true,
  },
  server: {
    proxy: {
      '/api/': {
        target: 'http://backend:3001',
        // changeOrigin: true,
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),

      },
    },
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
});
