import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/algorithms-sorting/" : "/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
