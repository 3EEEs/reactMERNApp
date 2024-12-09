import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Base path for routing
  plugins: [react()],
  server: {
    port: 5173, // Make sure the app runs on port 5173
    proxy: {
      "/exercises": "http://localhost:3000", // Replace with the backend URL if different
    },
  },
});
