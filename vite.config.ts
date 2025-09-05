import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // IMPORTANT for swcapital.co.uk
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
