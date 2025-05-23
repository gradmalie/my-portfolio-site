import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],

  site: 'https://yourwebsite.com', // Replace with your domain

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  /* --------------------------------------------------------
     Vite dev-server options
     --------------------------------------------------------
     - host: true           → listen on 0.0.0.0 (required in Netlify)
     - allowedHosts: […]   → whitelist every *.netlify.app preview URL
  ---------------------------------------------------------------- */
  vite: {
    server: {
      host: true,
      allowedHosts: ['.netlify.app'],
    },
  },
});
