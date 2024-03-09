import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fontAwesomePlugin from 'vite-plugin-font-awesome';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    fontAwesomePlugin()
  ]
});
