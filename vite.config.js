import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use GitHub Pages base path (your repo name)
  base: "/Hadeem-Secka-Official.github.io/"
});