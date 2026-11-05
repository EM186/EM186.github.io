// @ts-check
import { defineConfig } from 'astro/config';

// Site statique (GitHub Pages) servi sur le domaine perso emmazh.fr.
// Si tu repasses un jour sur em186.github.io, change seulement `site`.
export default defineConfig({
  site: 'https://emmazh.fr',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'fr',
    // Ajouter 'en' (puis 'zh') ici quand les traductions seront prêtes :
    // locales: ['fr', 'en', 'zh'],
    locales: ['fr'],
    routing: { prefixDefaultLocale: false },
  },
});
