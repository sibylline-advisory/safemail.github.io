import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://safemail.ai",
    base: process.env.ASTRO_ENV === 'development' ? '/' : '/',
    // commenting out because name of the repo is <sub>.github.io as documented here:
    // https://docs.astro.build/en/guides/deploy/github/
    integrations: [tailwind()],
});
