// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages URL for farrosfr/cvtegar
  site: 'https://farrosfr.github.io',
  base: '/cvtegar',

  // URL configuration
  trailingSlash: 'never',

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
  },

  // Required integrations
  integrations: [
    react(),
    sitemap({
      serialize: (item) => {
        const url = item.url.endsWith('/') ? item.url.slice(0, -1) : item.url;
        return { ...item, url };
      },
    }),
  ],

  // Static output for GitHub Pages deployment
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
