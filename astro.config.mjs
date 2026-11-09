// @ts-check
import { defineConfig } from 'astro/config';

// URL de prueba en GitHub Pages. Cuando se use el dominio propio,
// cambiar `site` por https://saezsanchezarquitectos.com y quitar `base`.
export default defineConfig({
  site: 'https://arquitectura-ssa-git.github.io',
  base: '/LandingPageSSA',
  trailingSlash: 'ignore',
});
