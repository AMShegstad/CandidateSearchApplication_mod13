import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: 3002,
  },
  build: {
    rollupOptions: {
      //input: 'index.html', // Ensure index.html is in the client/ folder
    },
  },
});