
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get the correct base URL for GitHub Pages deployment
const getBase = () => {
  // For GitHub Pages deployment with specific repo name
  if (process.env.NODE_ENV === 'production') {
    return '/seedmvp-launchpad-42dc1c0e/'; // Use the actual repository name here
  }
  // Default for development
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBase(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
