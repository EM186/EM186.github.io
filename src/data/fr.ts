import type { Experience, Project, SkillGroup } from './types';

/* =========================================================
   Contenu FR du portfolio.
   Pour la version anglaise : copier ce fichier en en.ts,
   traduire les textes, garder les mêmes clés et slugs.
   ========================================================= */

export const profile = {
  firstName: 'Emma',
  lastName: 'Zhao',
  role: 'Étudiante ingénieure Informatique & Cybersécurité',
  school: 'CPE Lyon',
  city: 'Lyon (Villeurbanne)',
  email: 'pro.emmazhao@gmail.com',
  // À vérifier : ton CV indique /in/emmazhaooo, ton ancien site /in/emma-zhao-29576132b
  linkedin: 'https://www.linkedin.com/in/emmazhaooo',
  github: 'https://github.com/EM186',
  cv: '/docs/CV_Emma_Zhao.pdf',
  intro:
    "Je suis arrivée dans l'informatique un peu par hasard, en tombant sur des tutoriels de code en terminale. Depuis, j'ai développé des applications web et mobiles, traité des tickets sur du code en production et participé au cloisonnement réseau d'un hôpital. Ce qui me plaît, c'est de comprendre la chaîne entière : comment une application est conçue, déployée, puis sécurisée.",
  pitch: "Développeuse full-stack qui se forme au réseau et à la cybersécurité, j'aime être le pont entre les deux.",
};

export const search = {
  alternance: {
    label: 'Alternance',
    when: 'Dès septembre 2027 · 2 ans',
    rhythm: '1 semaine en entreprise / 1 semaine à l’école',
    where: 'Région lyonnaise',
    what: [
      'Développement (web, applicatif, DevSecOps)',
      'Réseau et infrastructure',
      'Cybersécurité opérationnelle',
    ],
    wish: 'Des missions où je construis et où je progresse sur la durée des deux ans.',
    sentence: 'Je cherche une alternance de deux ans en développement, réseau ou cybersécurité, avec des missions où je construis vraiment.',
  },
  stage: {
    label: 'Stage à l’étranger',
    when: 'Juin à août 2027 · 3 mois',
    where:
      'Pays anglophones, Chine, Taïwan, Singapour, Vietnam, Thaïlande, Malaisie, Japon',
    what: ['Développement', 'Réseau / cybersécurité', 'CRM et présence en ligne'],
  },
};

export const experiences: Experience[] = [
  {
    id: 'sparks',
    company: 'Sparks Formation',
    place: 'Lyon',
    title: 'Stage développeuse web',
    dates: 'Février à avril 2026',
    duration: '8 semaines',
    tone: 'mint',
    summary:
      "Organisme de formation professionnelle (groupe Apollo). J'ai traité des tickets d'évolution et de correction en autonomie sur deux plateformes en production : un intranet en PHP legacy et un espace formateur en Symfony.",
    stack: ['PHP legacy', 'Symfony', 'Twig', 'MySQL (MyISAM)', 'Azure DevOps', 'Git', 'Plesk', 'CRON', 'Fail2ban'],
    points: [
      {
        title: 'Import en masse depuis Excel',
        text: "Le ticket le plus complexe du stage : une modale d'import qui crée plusieurs affaires de formation à partir d'un fichier Excel basé sur un modèle, avec validation des champs obligatoires et gestion des cellules à formules.",
      },
      {
        title: 'Logique métier des horaires',
        text: "Affichage automatique des horaires d'une session selon le type (INTRA / INTER), le lieu, la distance et le code postal. Logique conditionnelle dans un contrôleur Symfony, rendue en Twig.",
      },
      {
        title: 'Automatisations',
        text: 'Tâches CRON sur Plesk : relance client à J+5, alerte 7 jours avant la première animation d’un formateur, rapport quotidien des sessions sans formateur.',
      },
      {
        title: 'Travailler dans l’existant',
        text: 'Base MyISAM sans clés étrangères : intégrité gérée côté code et compromis assumés. Workflow complet branche, pull request, QA, production.',
      },
    ],
    note: 'tickets traités en autonomie !',
  },
  {
    id: 'ghpp',
    company: 'GHPP (Groupement Hospitalier Portes de Provence)',
    place: 'Montélimar',
    title: 'Stage support et réseau',
    dates: 'Juin 2025',
    duration: '5 semaines',
    tone: 'sky',
    summary:
      "Service informatique d'un hôpital, où aucune coupure n'est possible. J'ai participé au projet de cloisonnement réseau (VLAN et 802.1X) en plus du support quotidien.",
    stack: ['VLAN', '802.1X', 'GPO', 'DHCP', 'Active Directory', 'Azure AD Connect', 'PowerShell', 'GLPI'],
    points: [
      {
        title: 'Cloisonnement réseau',
        text: "Inventaire des VLANs existants, participation aux réunions de suivi et au déploiement de l'adressage DHCP par GPO. Interventions hors horaires pour ne pas couper les services.",
      },
      {
        title: 'Tests 802.1X en salle maquette',
        text: "Preuve de concept du déploiement par GPO (service dot3svc, certificat machine) avant la généralisation, et script PowerShell d'analyse des authentifications utilisé par l'équipe.",
      },
      {
        title: 'Support en milieu critique',
        text: 'Tickets GLPI, dépannage de la synchronisation Azure AD Connect, remplacement et reconfiguration (VLAN, GPO) d’une imprimante aux urgences.',
      },
    ],
    note: 'mon premier vrai pas côté sécu',
  },
  {
    id: 'mairie',
    company: 'Mairie de Montélimar',
    place: 'Montélimar',
    title: 'Stage d’observation, service informatique',
    dates: 'Juin 2022',
    duration: '1 semaine',
    tone: 'butter',
    summary: 'Découverte du service informatique municipal : configuration de postes et aide au service communication lors d’événements.',
    stack: [],
    points: [],
  },
];

export const projects: Project[] = [
  {
    slug: 'pharmaequip',
    title: 'PharmaEquip',
    kind: 'Application mobile + API REST',
    frame: 'BTS SIO · épreuve PAPPE',
    year: '2026',
    team: 'Projet individuel',
    role: 'Conception, développement full-stack, déploiement',
    tagline: 'Réserver un équipement de laboratoire depuis son téléphone, avec le bon technicien au bon créneau.',
    summary:
      "Application React Native pour un laboratoire pharmaceutique fictif : catalogue d'équipements, réservation de créneaux, validation par un administrateur et notifications. API Node.js sécurisée par JWT, déployée en Docker.",
    tone: 'sky',
    domains: ['Dev mobile', 'Back-end', 'Sécurité applicative'],
    stack: ['React Native', 'Expo', 'Expo Router', 'Zustand', 'Node.js', 'Express', 'JWT', 'MariaDB', 'Docker', 'EAS Build', 'Cloudflare'],
    github: 'https://github.com/EM186/PAPPE_PharmaEquip',
    docs: [
      { label: 'Dossier technique PAPPE', href: '/docs/PAPPE_PharmaEquip_FR.pdf', lang: 'FR', size: '0,9 Mo' },
      // Version anglaise à terminer : décommenter quand le PDF est prêt
      // { label: 'Technical documentation', href: '/docs/PAPPE_PharmaEquip_EN.pdf', lang: 'EN' },
    ],
    cover: { src: '/images/pharmaequip/catalogue.webp', alt: 'Catalogue des équipements dans PharmaEquip', caption: 'Catalogue employé', phone: true },
    gallery: [
      { src: '/images/pharmaequip/connexion.webp', alt: 'Écran de connexion', caption: 'Connexion', phone: true },
      { src: '/images/pharmaequip/detail.webp', alt: "Détail d'un équipement et choix du créneau", caption: 'Détail et réservation', phone: true },
      { src: '/images/pharmaequip/demandes.webp', alt: 'Suivi des demandes de l’employé', caption: 'Suivi des demandes', phone: true },
      { src: '/images/pharmaequip/dashboard-technicien.webp', alt: 'Tableau de bord technicien', caption: 'Dashboard technicien', phone: true },
      { src: '/images/pharmaequip/admin-demandes.webp', alt: 'Gestion des techniciens d’un équipement par l’administrateur', caption: 'Techniciens (admin)', phone: true },
    ],
    context: [
      "Dans le laboratoire fictif GSB, l'accès aux équipements sensibles (HPLC, centrifugeuses, autoclaves...) doit être encadré par un technicien qualifié et tracé. Les demandes se faisaient à la main.",
      "L'objectif : une application mobile pour consulter les équipements, réserver un créneau, et laisser l'administrateur valider et assigner les techniciens.",
    ],
    did: [
      'Trois espaces selon le rôle (employé, technicien, administrateur), avec navigation par onglets et garde de route côté Expo Router',
      'API REST Express organisée en routes, contrôleurs, modèles et middlewares',
      'Base MariaDB de 8 tables, avec historique horodaté de chaque utilisation (access_logs)',
      'Notifications in-app à chaque changement de statut d’une demande',
      'Déploiement de l’API en Docker sur une VM Ubuntu derrière Cloudflare, APK Android généré avec EAS Build',
    ],
    highlights: [
      {
        title: 'Créneaux calculés, pas stockés',
        text: "Le back-end génère 8 plages fixes, retire celles déjà réservées et bloque aussi un créneau si tous les techniciens de l'équipement sont occupés ailleurs. Une contrainte UNIQUE en base protège contre deux réservations simultanées.",
      },
      {
        title: 'Authentification JWT + rôles',
        text: 'Middleware protectRoute (token valide, utilisateur non supprimé) puis authorize(...roles) qui renvoie 403. Le token est conservé dans Expo SecureStore et non dans un stockage en clair.',
      },
      {
        title: 'Suppression logique',
        text: "Utilisateurs marqués supprimés et équipements passés indisponibles : l'historique reste intact et un compte supprimé ne peut plus se connecter.",
      },
    ],
    learned: [
      'Penser la sécurité dès la conception de l’API, pas après',
      'Gérer l’état global d’une application mobile (Zustand) et la restauration de session',
      'Mettre une application en production de bout en bout',
    ],
    note: 'mon projet préféré',
  },
  {
    slug: 'pharmacantine',
    title: 'PharmaCantine',
    kind: 'Application web',
    frame: 'BTS SIO · épreuve PAPPE',
    year: '2026',
    team: 'Projet individuel',
    role: 'Conception, développement full-stack, déploiement',
    tagline: 'La cantine d’entreprise en quelques clics : menus de la semaine, réservations et statistiques.',
    summary:
      'Application Laravel 12 avec trois rôles (employé, cuisinier, admin) gérés par des Gates, journalisation de toutes les actions, événements SQL planifiés et tableau de bord statistique.',
    tone: 'mint',
    domains: ['Dev web', 'Base de données', 'Sécurité applicative'],
    stack: ['PHP 8.2', 'Laravel 12', 'Blade', 'Tailwind CSS 4', 'MariaDB', 'SQL Events', 'Docker'],
    github: 'https://github.com/EM186/PAPPE_PharmaCantine',
    docs: [
      { label: 'Dossier technique PAPPE', href: '/docs/PAPPE_PharmaCantine_FR.pdf', lang: 'FR', size: '1,5 Mo' },
      // Version anglaise à terminer : décommenter quand le PDF est prêt
      // { label: 'Technical documentation', href: '/docs/PAPPE_PharmaCantine_EN.pdf', lang: 'EN' },
    ],
    cover: { src: '/images/pharmacantine/statistiques.webp', alt: 'Tableau de bord statistique de PharmaCantine', caption: 'Statistiques admin' },
    gallery: [
      { src: '/images/pharmacantine/connexion.webp', alt: 'Page de connexion', caption: 'Connexion' },
      { src: '/images/pharmacantine/dashboard-admin.webp', alt: 'Dashboard administrateur', caption: 'Dashboard administrateur' },
      { src: '/images/pharmacantine/planning.webp', alt: 'Planning hebdomadaire des menus', caption: 'Planning employé' },
      { src: '/images/pharmacantine/plats.webp', alt: 'Gestion des plats', caption: 'Gestion des plats' },
      { src: '/images/pharmacantine/utilisateurs.webp', alt: 'Gestion des utilisateurs', caption: 'Gestion des utilisateurs' },
    ],
    context: [
      "Dans la même entreprise fictive GSB, la cantine était gérée sans outil : pas de suivi des réservations, et des cuisiniers qui devaient deviner les quantités.",
      "L'application permet aux employés de réserver leur repas (déjeuner ou dîner), aux cuisiniers de composer les menus, et aux administrateurs de suivre la fréquentation.",
    ],
    did: [
      'Gestion des droits par Laravel Gates (employe, cuisinier, admin) et redirection selon le rôle après connexion',
      'CRUD des plats avec filtres, composition des menus quotidiens par service',
      'Tableau de bord : fréquentation, taux d’annulation, plat le plus populaire',
      'Middleware de journalisation de toutes les actions, consultables via un log viewer',
      'Environnement Docker (PHP-FPM + MariaDB) versionné',
    ],
    highlights: [
      {
        title: 'La base de données travaille seule',
        text: "Deux événements SQL quotidiens archivent les anciens menus et clôturent les réservations passées, même si personne n'utilise l'application.",
      },
      {
        title: 'Règles métier garanties',
        text: "Un seul menu actif par date et par service. Annuler un menu annule toutes ses réservations dans une transaction, avec rollback en cas d'erreur.",
      },
      {
        title: 'Sessions et comptes',
        text: 'Session régénérée à chaque connexion, protection CSRF, et un compte désactivé est refusé même avec le bon mot de passe.',
      },
    ],
    learned: [
      'Choisir où placer une règle : application, base de données ou les deux',
      'Structurer les autorisations proprement plutôt que de multiplier les if',
      'Documenter un projet pour qu’un autre développeur puisse le reprendre',
    ],
  },
  {
    slug: 'resappli',
    title: 'ResAppli',
    kind: 'Application web en équipe',
    frame: 'BTS SIO · atelier professionnel',
    year: '2025',
    team: 'Équipe de 5',
    role: 'Cheffe de projet et développeuse',
    tagline: 'Gérer le planning d’une salle de formation sans conflit de créneaux.',
    summary:
      "Application de réservation de la salle Beryl pour le client fictif PRIXY. J'ai mené le projet : cahier des charges, maquettes, charte graphique, organisation de l'équipe et réunions avec le CTO (notre professeur).",
    tone: 'butter',
    domains: ['Gestion de projet', 'Dev web', 'Déploiement'],
    stack: ['PHP 8', 'MySQL', 'JavaScript', 'Docker Compose', 'Cloudflare Tunnel'],
    docs: [],
    cover: { src: '/images/resappli/planning.webp', alt: 'Planning hebdomadaire de ResAppli', caption: 'Planning hebdomadaire' },
    gallery: [
      { src: '/images/resappli/connexion.webp', alt: 'Connexion administrateur', caption: 'Connexion' },
      { src: '/images/resappli/dashboard.webp', alt: 'Tableau de bord avec sidebar', caption: 'Tableau de bord' },
      { src: '/images/resappli/ajout-reservation.webp', alt: "Modale d'ajout de réservation", caption: 'Ajout d’une réservation' },
    ],
    context: [
      'PRIXY voulait louer sa salle Beryl (30 places) en plus des formations et réunions internes, mais gérait les créneaux à la main.',
      'Trois types de réservation avec leurs propres règles : formations sur demi-journées bloquées, réunions internes de durée libre, locations externes à la demi-journée ou à la journée.',
    ],
    did: [
      'Rédaction du cahier des charges, de la charte graphique, des wireframes et maquettes (versions 1 et 2)',
      'Organisation de l’équipe : répartition des tâches, préparation et animation des réunions, suivi',
      'Vues jour, semaine et mois, modale d’ajout en deux étapes selon le type, vérification des conflits',
      'Mise en ligne via Docker et un tunnel Cloudflare',
    ],
    highlights: [
      {
        title: 'Mener une équipe',
        text: "Premier rôle de cheffe de projet : il a fallu écouter, trancher, gérer des désaccords et même réorganiser un deuxième groupe en cours de route.",
      },
      {
        title: 'Du besoin au produit',
        text: 'Le projet a suivi tout le cycle : analyse des règles de gestion, conception visuelle, développement, déploiement accessible depuis Internet.',
      },
    ],
    learned: [
      'Animer une équipe et tenir un planning',
      'Traduire des règles métier en contraintes techniques',
      'Exposer une application sans ouvrir de port grâce à un tunnel',
    ],
    note: 'cheffe de projet',
  },
  {
    slug: 'dcs-it-games',
    title: 'DCS IT Games',
    kind: 'Dashboard de consommation',
    frame: 'Concours DCS Easyware · 2026',
    year: '2026',
    team: 'Équipe de 4 (2 SLAM, 2 SISR)',
    role: 'Cheffe d’équipe et développeuse',
    tagline: 'Visualiser la consommation de ressources IT et pitcher la solution devant des pros.',
    summary:
      "Concours organisé par l'entreprise DCS Easyware. Notre équipe a construit un tableau de bord Laravel sur la consommation de stockage, CPU et réseau, puis l'a présenté devant une RH et un ingénieur de DCS.",
    tone: 'lilac',
    domains: ['Dev web', 'Data / visualisation', 'Soft skills'],
    stack: ['Laravel 12', 'Eloquent', 'Chart.js', 'MariaDB', 'Docker Compose'],
    github: 'https://github.com/EM186/DCS_singleton',
    docs: [],
    gallery: [],
    placeholder: 'Captures et support de présentation à venir',
    context: [
      "Le sujet : rendre lisible la consommation de ressources (stockage, CPU, réseau) d'un parc d'applications sur six mois.",
      "Nous n'avons pas été retenus pour représenter les Chartreux, mais présenter un projet technique devant des professionnels, en temps limité, a été une vraie expérience.",
    ],
    did: [
      'Coordination de l’équipe mixte développement / réseau',
      'Trois vues : classement des plus gros consommateurs, évolution mensuelle, comparaison avec variation en pourcentage',
      'Modèles Eloquent et relations (applications, ressources, consommations)',
      'Environnement Docker (Apache + MariaDB)',
    ],
    highlights: [
      {
        title: 'Pitcher devant des professionnels',
        text: 'Expliquer des choix techniques à une RH et à un ingénieur en même temps : deux publics, un seul discours.',
      },
    ],
    learned: ['Livrer vite en équipe', 'Rendre des données compréhensibles en un coup d’œil'],
  },
  {
    slug: 'portalis',
    title: 'Portalis',
    kind: 'Présence en ligne & CRM',
    frame: 'BTS SIO · développement de la présence en ligne',
    year: '2025',
    team: 'Projet individuel',
    role: 'Stratégie digitale, site, SEO, campagnes',
    tagline: 'Lancer une marque fictive sur le web : site, SEO local, réseaux sociaux et e-mailing.',
    summary:
      "Toute la présence en ligne d'une agence fictive de « voyages dans les jeux vidéo » : site WordPress, référencement, fiche Google, Instagram, backlink et campagne e-mailing segmentée avec Brevo.",
    tone: 'rose',
    domains: ['CRM', 'SEO', 'Marketing digital', 'UX'],
    stack: ['WordPress', 'Yoast SEO', 'Google Business Profile', 'Meta Business Suite', 'Instagram', 'Brevo', 'Chrome DevTools'],
    docs: [{ label: 'Rapport complet', href: '/docs/Portalis_rapport_presence_en_ligne.pdf', lang: 'FR', size: '1,7 Mo' }],
    cover: { src: '/images/portalis/accueil.webp', alt: "Page d'accueil du site Portalis", caption: 'Page d’accueil' },
    gallery: [
      { src: '/images/portalis/fiche-google.webp', alt: 'Fiche Google Business de Portalis', caption: 'Fiche Google (SEO local)' },
      { src: '/images/portalis/perf-reseau.webp', alt: 'Analyse réseau dans les outils développeur', caption: 'Audit de performance' },
      { src: '/images/portalis/brevo-segments.webp', alt: 'Segments de contacts dans Brevo', caption: 'Segmentation Brevo' },
    ],
    context: [
      "Créer de A à Z l'identité et la stratégie digitale d'une entreprise fictive : Portalis, une agence qui propose de « voyager » dans des univers de jeux vidéo.",
      'Concept, cible, positionnement, SWOT et indicateurs de performance avant de produire quoi que ce soit.',
    ],
    did: [
      'Site WordPress : arborescence, charte, ergonomie, blog « Carnet des voyageurs »',
      'SEO : comparatif de plugins, Yoast, expressions clés, slugs, méta-descriptions, balises alt, maillage interne',
      'SEO local avec une fiche Google Business et un backlink partenaire',
      'Compte Instagram professionnel piloté avec Meta Business Suite',
      'Campagne e-mailing avec Brevo : base de contacts CSV, segmentation, offre de bienvenue, suivi des statistiques',
    ],
    highlights: [
      {
        title: 'Penser comme une entreprise',
        text: 'Définir des KPI mesurables (visites, engagement Instagram, interactions blog) avant de lancer les actions.',
      },
      {
        title: 'Outils CRM concrets',
        text: 'Segmentation de contacts et campagnes ciblées : la base de ce que demandent les stages CRM et marketing digital.',
      },
    ],
    learned: [
      'Un site est aussi un outil stratégique, pas seulement une vitrine',
      'Mesurer avant de décider',
    ],
  },
];

/** Projet d'archive, cité sans page dédiée */
export const archives = [
  {
    title: 'FormLab',
    text: 'Mon tout premier projet PHP / MySQL : génération de formulaires PDF en 3 étapes (FPDF).',
    year: '2024',
  },
];

export const writings = [
  {
    title: 'Le « model collapse » des IA',
    text: "Veille sur la dégénérescence des modèles entraînés sur des données générées par d'autres IA.",
    href: '/docs/Veille_model_collapse.pdf',
  },
];


/* Compétences racontées : [texte|couleur] = pastille, {texte} = mot en italique.
   Couleurs possibles : sky, matcha, ochre, lilac, terracotta, peach, blush, sage, teal */
export const skillsStory = [
  "Côté {développement}, je travaille surtout en [PHP|ochre] avec [Laravel|terracotta] et [Symfony|sky], et je construis des applications mobiles en [React Native|sky] reliées à des API [Node.js|matcha] sécurisées par [JWT|lilac]. Mes données vivent dans [MySQL / MariaDB|peach], mes projets dans [Docker|teal] et [Git|blush].",
  "Côté {réseau}, j’ai travaillé sur des [VLAN|matcha], du [802.1X|lilac], de l’[Active Directory|sky] et des [GPO|ochre], dans un hôpital où rien ne doit couper.",
  "Côté {sécurité}, j’apprends à CPE Lyon ce qui fait tenir l’ensemble : [systèmes & réseaux|peach], [cryptographie|blush], [administration Linux|sage].",
];

export const direction = {
  inputs: ['Développement', 'Systèmes & réseaux', 'Sécurité'],
  middle: 'Comprendre toute la chaîne',
  goal: 'DevOps · cybersécurité opérationnelle',
  note: 'concevoir, déployer, sécuriser',
};

export const skills: SkillGroup[] = [
  {
    title: 'Développement web',
    icon: 'web',
    items: [
      { name: 'PHP (POO, MVC)', where: 'Sparks, PharmaCantine', level: 'solide' },
      { name: 'Laravel', where: 'PharmaCantine, DCS', level: 'solide' },
      { name: 'Symfony / Twig', where: 'Sparks', level: 'pratique' },
      { name: 'HTML / CSS / JavaScript', level: 'solide' },
      { name: 'Tailwind CSS', where: 'PharmaCantine', level: 'pratique' },
      { name: 'Bootstrap', level: 'pratique' },
      { name: 'Astro', where: 'ce portfolio', level: 'notions' },
    ],
  },
  {
    title: 'Mobile & API',
    icon: 'mobile',
    items: [
      { name: 'React Native / Expo', where: 'PharmaEquip', level: 'pratique' },
      { name: 'Node.js / Express', where: 'PharmaEquip', level: 'pratique' },
      { name: 'API REST + JWT', where: 'PharmaEquip', level: 'pratique' },
      { name: 'Zustand', where: 'PharmaEquip', level: 'notions' },
      { name: 'React', level: 'notions' },
    ],
  },
  {
    title: 'Langages',
    icon: 'code',
    items: [
      { name: 'PHP', level: 'solide' },
      { name: 'JavaScript', level: 'pratique' },
      { name: 'Python', level: 'pratique' },
      { name: 'C#', level: 'pratique' },
      { name: 'Java', level: 'notions' },
      { name: 'C', level: 'notions' },
      { name: 'Bash / PowerShell', where: 'GHPP', level: 'pratique' },
    ],
  },
  {
    title: 'Bases de données',
    icon: 'db',
    items: [
      { name: 'SQL (MySQL, MariaDB)', level: 'solide' },
      { name: 'Procédures, triggers, events', where: 'PharmaCantine', level: 'pratique' },
      { name: 'PL/SQL', level: 'pratique' },
      { name: 'Modélisation MCD / MLD', level: 'solide' },
    ],
  },
  {
    title: 'Systèmes & réseaux',
    icon: 'net',
    items: [
      { name: 'VLAN / 802.1X', where: 'GHPP', level: 'pratique' },
      { name: 'Active Directory, GPO, DHCP, DNS', where: 'GHPP', level: 'pratique' },
      { name: 'Linux (administration)', level: 'pratique' },
      { name: 'Docker / Docker Compose', where: 'tous mes projets', level: 'solide' },
      { name: 'VMware', level: 'notions' },
      { name: 'Plesk, CRON', where: 'Sparks', level: 'pratique' },
    ],
  },
  {
    title: 'Sécurité',
    icon: 'shield',
    items: [
      { name: 'Authentification JWT, rôles, CSRF', where: 'projets PAPPE', level: 'pratique' },
      { name: 'Fail2ban', where: 'Sparks', level: 'notions' },
      { name: 'Wireshark, nmap', level: 'notions' },
      { name: 'Cloudflare (tunnel, proxy)', where: 'ResAppli, PharmaEquip', level: 'pratique' },
    ],
  },
  {
    title: 'Outils & méthodes',
    icon: 'tools',
    items: [
      { name: 'Git, GitHub, GitLab', level: 'solide' },
      { name: 'Azure DevOps (tickets, PR, QA)', where: 'Sparks', level: 'pratique' },
      { name: 'Agile / Kanban', level: 'pratique' },
      { name: 'GLPI', where: 'GHPP', level: 'pratique' },
      { name: 'UML, Trello, Jira', level: 'pratique' },
      { name: 'Composer, NPM, PIP', level: 'pratique' },
    ],
  },
  {
    title: 'Web marketing & CRM',
    icon: 'spark',
    items: [
      { name: 'SEO (Yoast, SEO local)', where: 'Portalis', level: 'pratique' },
      { name: 'Brevo (e-mailing, segments)', where: 'Portalis', level: 'pratique' },
      { name: 'WordPress', where: 'Portalis', level: 'pratique' },
      { name: 'Meta Business Suite', where: 'Portalis', level: 'notions' },
    ],
  },
];

export const softSkills = [
  {
    name: 'Leadership',
    proof: "Cheffe de projet sur ResAppli (5 personnes) et cheffe d'équipe au concours DCS : organiser, écouter, trancher.",
    tone: 'rose',
  },
  {
    name: 'Organisation',
    proof: 'Planning, réunions préparées, suivi des tâches de chacun : ce qui fait avancer un projet à plusieurs.',
    tone: 'butter',
  },
  {
    name: 'Esprit d’équipe',
    proof: "Six ans de volley : communiquer, garder le moral du groupe, lire les mouvements des autres pour réagir vite.",
    tone: 'mint',
  },
  {
    name: 'Autonomie & rigueur',
    proof: 'Tickets en production chez Sparks : comprendre le métier, chercher seule, passer la relecture et la QA.',
    tone: 'sky',
  },
  {
    name: 'Adaptabilité',
    proof: "Du code legacy au réseau hospitalier en passant par le marketing digital : j'apprends vite des environnements très différents.",
    tone: 'lilac',
  },
];

export const education = [
  {
    dates: '2026 - 2029',
    title: 'Cycle ingénieur Informatique & Cybersécurité',
    school: 'CPE Lyon, Villeurbanne',
    text: 'Sécurité des systèmes et réseaux, cryptographie, administration systèmes, développement. En alternance à partir de la 4e année.',
    current: true,
  },
  {
    dates: '2024 - 2026',
    title: 'BTS SIO option SLAM',
    school: 'Institution des Chartreux, Lyon',
    text: "Développement d'applications, bases de données, réseaux et sécurité.",
  },
  {
    dates: '2021 - 2024',
    title: 'Baccalauréat général, mention Très Bien',
    school: 'Lycée Chabrillan Saint Jean-Baptiste, Montélimar',
    text: '',
  },
];

export const languages = [
  { hello: 'Bonjour', name: 'Français', level: 'Langue maternelle', pct: 100 },
  { hello: 'Hello', name: 'Anglais', level: 'B2-C1 · courant professionnel', pct: 82 },
  { hello: '你好', name: 'Chinois (mandarin)', level: 'Bilingue à l’oral · écrit niveau HSK5 estimé', pct: 78 },
  { hello: 'Ciao', name: 'Italien', level: 'B1', pct: 55 },
];

export const certifications = [
  { name: 'SecNumacadémie', by: 'ANSSI (MOOC cybersécurité)' },
  { name: 'Certification SQL', by: 'W3Schools' },
  { name: 'Pix · 555 points', by: 'Compétences numériques' },
  { name: 'PSC1', by: 'Premiers secours' },
  // À confirmer : intitulé exact de la certification Cisco Python mentionnée dans ton bilan de 1re année
  // { name: 'Python Essentials', by: 'Cisco Networking Academy' },
];

export const hobbies = [
  {
    name: 'Volley-ball',
    text: 'Depuis 6 ans. Le sport où personne ne gagne seul.',
    tone: 'sky',
    doodle: 'ball',
    // Remplacer par une vraie photo : /images/hobbies/volley.webp
    img: '',
  },
  {
    name: 'Dessin',
    text: 'Digital et traditionnel, surtout des petits personnages tout ronds.',
    tone: 'rose',
    doodle: 'pencil',
    img: '',
  },
  {
    name: 'Pâtisserie',
    text: 'Même logique que le code : suivre la recette, puis comprendre pourquoi elle marche.',
    tone: 'butter',
    doodle: 'cake',
    img: '',
  },
  {
    name: 'Thé',
    text: 'Toujours à la recherche du prochain thé à goûter.',
    tone: 'mint',
    doodle: 'cup',
    img: '',
  },
];
