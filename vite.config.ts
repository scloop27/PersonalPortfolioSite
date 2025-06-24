// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Define Replit-specific plugins conditionally and without await in the array itself
const replitPlugins = [];

// Only include these plugins if running in a Replit environment (i.e., not on Vercel production)
// process.env.REPL_ID is set in Replit. NODE_ENV is "production" on Vercel.
if (
  process.env.NODE_ENV !== "production" ||
  process.env.REPL_ID !== undefined
) {
  // Use regular import if not directly in the plugins array, or ensure they are devDependencies
  // and handle potential errors if they are not available in production build environment.
  // For simplicity and directness, we will assume these are always available in dev.
  // If `runtimeErrorOverlay` is also Replit-specific, it should be handled similarly.
  replitPlugins.push(
    // Assuming runtimeErrorOverlay is also a Replit-specific dev plugin
    // If it is always needed, remove this conditional.
    (await import("@replit/vite-plugin-runtime-error-modal")).default(),
    (await import("@replit/vite-plugin-cartographer")).cartographer(),
  );
}

export default defineConfig({
  plugins: [
    react(), // Keep react plugin
    ...replitPlugins, // Spread the conditionally added Replit plugins
  ],
  resolve: {
    alias: {
      // Ensure these paths are correct relative to the 'client' root
      "@": path.resolve(process.cwd(), "client", "src"), // Use process.cwd() for root
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
  },
  root: path.resolve(process.cwd(), "client"), // Your Vite project root is the client folder
  build: {
    outDir: path.resolve(process.cwd(), "dist/public"), // Output to dist/public at the project root
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
