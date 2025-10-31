import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use "/" for custom domain, or GitHub Pages base path if not using custom domain
  base: "/"
});