import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Указываем, что корневая директория проекта теперь src
  build: {
    outDir: '../dist', // Указываем, что выходная директория сборки теперь находится на уровень выше src
    rollupOptions: {
      input: 'src/index.html', // Указываем новый путь к index.html
    },
  },
});
