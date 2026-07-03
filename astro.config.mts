import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://udon-photography.pages.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});