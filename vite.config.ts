import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(async () => {
  const plugins = [react()];

  // Only add Replit plugins in development
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
  ) {
    try {
      const runtimeErrorModal = await import(
        "@replit/vite-plugin-runtime-error-modal"
      );
      const cartographer = await import("@replit/vite-plugin-cartographer");

      plugins.push(runtimeErrorModal.default(), cartographer.cartographer());
    } catch (error) {
      console.warn("Replit plugins not available, skipping...");
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      allowedHosts: [".replit.dev", ".repl.co", "localhost"],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
