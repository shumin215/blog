// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 커스텀 도메인 연결 후 실제 도메인으로 변경
  site: 'https://your-domain.com',

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});