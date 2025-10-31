import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Try root first - if repo name matches username.github.io pattern, it may deploy to root
  // If not working, change to "/Hadeem-Secka-Official.github.io/"
  base: "/"
});