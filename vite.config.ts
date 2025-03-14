
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get the repository name from the GitHub Pages URL or use an empty string for local development
const getBase = () => {
  // Use empty string for development or if no repo name is detected
  if (process.env.NODE_ENV !== 'production') return '/';
  
  // For GitHub Pages deployment
  return './';
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
