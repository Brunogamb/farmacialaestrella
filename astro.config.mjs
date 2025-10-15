import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.farmacialaestrella.com.ar',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  }
});
