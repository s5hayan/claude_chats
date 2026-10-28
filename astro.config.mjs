// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set to the custom domain once chosen, so canonical and OG URLs are absolute.
  // site: 'https://example.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
