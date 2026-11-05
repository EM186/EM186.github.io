/* Textes d'interface (navigation, boutons). Le contenu long est dans src/data/<lang>.ts */

export const languages = {
  fr: { label: 'FR', name: 'Français', ready: true },
  en: { label: 'EN', name: 'English', ready: false },
  zh: { label: '中文', name: '中文', ready: false },
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    'nav.search': 'Ce que je cherche',
    'nav.xp': 'Expériences',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.about': 'À côté',
    'nav.contact': 'Contact',
    'cta.cv': 'Télécharger mon CV',
    'cta.contact': 'M’écrire',
    'cta.projects': 'Voir mes projets',
    'cta.project': 'Lire le projet',
    'cta.github': 'Code sur GitHub',
    'cta.back': 'Retour aux projets',
    'lang.soon': 'bientôt',
    'lang.coming': 'coming soon',
    'footer.made': 'Conçu et codé avec Astro, sans template, avec beaucoup de pastel.',
  },
  // en: { ... } à ajouter avec la traduction
} as const;

export function t(key: keyof (typeof ui)['fr'], lang: 'fr' = 'fr') {
  return ui[lang][key];
}
