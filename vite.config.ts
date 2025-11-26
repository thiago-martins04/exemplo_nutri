import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Mock process.env to avoid errors in client-side code if strict legacy libs are used
    'process.env': {}
  }
});