import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Repo is "Hadeem-Secka-Official.github.io" so it deploys to subpath
  base: "/Hadeem-Secka-Official.github.io/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
