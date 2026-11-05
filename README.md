# emmazh.fr · Portfolio d'Emma Zhao

Portfolio statique construit avec [Astro](https://astro.build), publié sur GitHub Pages avec le domaine `emmazh.fr`.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Où modifier quoi

| Je veux changer... | Fichier |
|---|---|
| Textes, projets, expériences, compétences | `src/data/fr.ts` |
| Libellés de navigation et boutons | `src/i18n/ui.ts` |
| Couleurs, polices, tailles (thème) | `src/styles/tokens.css` |
| Mise en page et animations CSS | `src/styles/global.css` |
| Animations JS (défilement, étoiles au clic, menu) | `src/scripts/motion.ts` |
| PDF téléchargeables (CV, dossiers PAPPE) | `public/docs/` |
| Captures d'écran | `public/images/<projet>/` |

### Ajouter une photo de hobby
1. Déposer l'image dans `public/images/hobbies/` (idéalement en `.webp`, format portrait 4:5).
2. Dans `src/data/fr.ts`, remplir le champ `img` du hobby, par ex. `img: '/images/hobbies/volley.webp'`.

### Activer la documentation anglaise des projets PAPPE
1. Déposer `PAPPE_PharmaEquip_EN.pdf` et `PAPPE_PharmaCantine_EN.pdf` dans `public/docs/`.
2. Dans `src/data/fr.ts`, décommenter la ligne `{ label: 'Technical documentation', ... }` de chaque projet.
3. Dans `src/pages/projets/[slug].astro`, supprimer le bouton "English version · coming soon".

### Ajouter la version anglaise du site
1. Copier `src/data/fr.ts` en `src/data/en.ts` et traduire.
2. Ajouter `'en'` dans `locales` (`astro.config.mjs`) et les textes `en` dans `src/i18n/ui.ts`.
3. Créer `src/pages/en/` avec les mêmes pages qui importent `en.ts`.
4. Dans `src/components/Header.astro`, passer `en.ready` à `true` (dans `src/i18n/ui.ts`).

### Activer le thème nuit
Le bloc `[data-theme="nuit"]` est prêt (commenté) dans `src/styles/tokens.css`. Le décommenter, puis ajouter un bouton qui change `document.documentElement.dataset.theme`.

## Déploiement (GitHub Pages + emmazh.fr)

1. Créer un dépôt **public** sur GitHub (nom conseillé : `EM186.github.io`, ou `portfolio`, les deux marchent avec un domaine perso).
2. Pousser ce dossier sur la branche `main` (avec `package-lock.json`).
3. GitHub > Settings > Pages > **Source : GitHub Actions**. Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque push.
4. GitHub > Settings > Pages > Custom domain : `emmazh.fr`, puis cocher **Enforce HTTPS** quand c'est proposé.

### DNS chez IONOS (Domaines & SSL > emmazh.fr > DNS)

Supprimer d'abord les enregistrements A / AAAA existants pour `@` (ceux d'IONOS par défaut), puis ajouter :

| Type | Nom d'hôte | Valeur |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | em186.github.io |

La propagation peut prendre de quelques minutes à quelques heures. Le certificat HTTPS est généré automatiquement par GitHub ensuite.

Conseillé : vérifier le domaine dans GitHub (Settings du compte > Pages > Add a domain) pour empêcher quelqu'un d'autre de l'utiliser sur GitHub Pages.

## Choix techniques

- **Astro en sortie statique** : HTML généré à la construction, presque pas de JavaScript envoyé au navigateur, donc rapide sur mobile.
- **Animations en CSS + ~70 lignes de JS sans librairie** : titres révélés ligne par ligne, apparition au défilement (IntersectionObserver), dossiers qui s'ouvrent au survol, damier qui change doucement de couleur. Tout est coupé si l'appareil demande moins d'animations (`prefers-reduced-motion`).
- **Polices auto-hébergées** (Fontsource : Instrument Serif, Instrument Sans, IBM Plex Mono, Gaegu) : pas d'appel à Google Fonts, meilleur pour la vitesse et le RGPD.
- **Contenu séparé du code** (`src/data/`) : traduire ou ajouter un projet ne demande pas de toucher aux composants.
