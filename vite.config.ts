import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Remove Replit-specific plugins for production deployment
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          (await import("@replit/vite-plugin-cartographer")).then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"), // Changed from "client/src" to just "src"
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Remove root since we're now at project root, not in client folder
  build: {
    outDir: "dist", // Changed from "dist/public" to just "dist"
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    // Allow Replit's dynamic hostnames
    allowedHosts: [".replit.dev", ".repl.co", "localhost"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
