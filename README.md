# Emma Zhao · Portfolio

**→ [emmazh.fr](https://emmazh.fr)**

Étudiante ingénieure en Informatique & Cybersécurité à CPE Lyon.
Je cherche une **alternance à partir de septembre 2027** (développement, réseau ou cybersécurité) et un **stage à l’étranger de juin à août 2027**.

*Engineering student in Computer Science & Cybersecurity at CPE Lyon, looking for a 3-month international internship (June to August 2027).*

---

## Ce que vous trouverez sur le site

- **Expériences** : développement web en entreprise (PHP, Symfony), réseau et support en milieu hospitalier (VLAN, 802.1X)
- **Projets** : applications web et mobile, avec leur code et leur dossier technique à télécharger
- **Compétences**, formation, langues (français, anglais, chinois, italien)
- **Mon CV** en PDF

## Projets présentés

| Projet | En bref | Code |
|---|---|---|
| PharmaEquip | Application mobile React Native + API Node.js sécurisée par JWT | [PAPPE_PharmaEquip](https://github.com/EM186/PAPPE_PharmaEquip) |
| PharmaCantine | Application web Laravel avec rôles, journalisation et événements SQL | [PAPPE_PharmaCantine](https://github.com/EM186/PAPPE_PharmaCantine) |
| DCS IT Games | Dashboard de consommation de ressources, concours DCS Easyware | [DCS_singleton](https://github.com/EM186/DCS_singleton) |
| ResAppli | Réservation de salle en équipe de 5 (cheffe de projet) | · |
| Portalis | Présence en ligne et CRM : SEO, e-mailing, réseaux sociaux | · |

## Comment le site est fait
- **[Astro](https://astro.build)** en génération statique : des pages HTML légères presque sans JavaScript
- **CSS** sans framework avec un système de variables pour gérer les thèmes
- **Animations** en CSS et quelques lignes de JavaScript, désactivées si l’appareil demande moins de mouvement
- **Polices auto-hébergées** : aucun appel à des services tiers
- **Déploiement** automatique sur GitHub Pages à chaque push via GitHub Actions

```
src/
├── data/       contenu du site (textes, projets, compétences)
├── pages/      accueil + une page par projet
├── components/ éléments réutilisables (dossiers, damier, dessins)
└── styles/     thème et mise en page
```

Pour le lancer en local :

```bash
npm install
npm run dev
```

## Contact
-  [pro.emmazhao@gmail.com](mailto:pro.emmazhao@gmail.com)
-  [LinkedIn](https://www.linkedin.com/in/emmazhaoo)
