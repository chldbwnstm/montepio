import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// shortcut: GitHub Pages preview path, switch site to https://montepio.com.au and drop base once the domain is confirmed
export default defineConfig({
  site: 'https://chldbwnstm.github.io',
  base: '/montepio',
  vite: { plugins: [tailwindcss()] },
});
