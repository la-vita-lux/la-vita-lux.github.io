import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  publicDir: "build",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@images": path.resolve(__dirname, "build/images"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // Use root base in preview/dev. GH Pages still works because we emit relative asset URLs
  base: "/",
  server: {
    port: 5173,
    open: true,
  },
})

