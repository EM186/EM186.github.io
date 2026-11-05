export type Tone = 'mint' | 'sky' | 'rose' | 'butter' | 'lilac';

export interface Shot {
  src: string;
  alt: string;
  caption: string;
  /** capture de téléphone (format portrait) */
  phone?: boolean;
}

export interface DocLink {
  label: string;
  href: string;
  lang: 'FR' | 'EN';
  size?: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  frame: string;      // cadre : BTS, concours, etc.
  year: string;
  team: string;
  role: string;
  tagline: string;
  summary: string;
  tone: Tone;
  domains: string[];  // Dev, Réseau, Cyber, Web marketing...
  stack: string[];
  github?: string;
  live?: string;
  docs: DocLink[];
  cover?: Shot;
  gallery: Shot[];
  context: string[];
  did: string[];
  highlights: { title: string; text: string }[];
  learned: string[];
  note?: string;      // annotation manuscrite
  placeholder?: string; // message si contenu à venir
}

export interface Experience {
  id: string;
  company: string;
  place: string;
  title: string;
  dates: string;
  duration: string;
  tone: Tone;
  summary: string;
  stack: string[];
  points: { title: string; text: string }[];
  note?: string;
}

export interface SkillGroup {
  title: string;
  icon: 'code' | 'db' | 'net' | 'shield' | 'tools' | 'web' | 'mobile' | 'spark';
  items: { name: string; where?: string; level?: 'solide' | 'pratique' | 'notions' }[];
}
