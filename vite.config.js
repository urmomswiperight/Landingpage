import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['unrubrically-nonsilicious-euclid.ngrok-free.dev'],
  },
});
