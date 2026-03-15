// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update to actual domain after custom domain setup
  site: 'https://your-domain.com',

  markdown: {
    shikiConfig: {
      // Dual themes: light/dark switch via .dark class on <html>
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        // pagefind assets are generated after build, so exclude from bundle resolution
        external: ['/pagefind/pagefind-ui.js'],
      },
    },
  },

  integrations: [mdx(), sitemap()],
});