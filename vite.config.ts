import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "esnext", // This allows top-level await if needed
  },
  esbuild: {
    supported: {
      "top-level-await": true, // This fixes the top-level await error
    },
  },
});
