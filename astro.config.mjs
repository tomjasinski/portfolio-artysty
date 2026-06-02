// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   site: 'https://jerzyjasinski.pl',
   image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }

});
