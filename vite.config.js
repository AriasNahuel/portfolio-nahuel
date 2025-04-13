import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-nahuel/', // reemplazá con el nombre de tu repo
  plugins: [react()],
});
