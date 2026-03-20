export type Project = {
  title: string;
  category: string;
  filterCat: string;
  credits: string;
  subtitle: string;
  muxId?: string;
  thumbUrl: string;
  featured?: boolean;
};

export type FilmographyItem = {
  title: string;
  subtitle: string;
  year: string;
};

export type MosaicFilm = {
  title: string;
  category: string;
  credits: string;
  subtitle: string;
  imgUrl: string;
  externalUrl: string;
  externalLabel: string;
  description: string;
  badges: { platform: string; type: string };
  meta: { label: string; value: string }[];
  role: string;
};

export type AboutDetail = {
  label: string;
  value: string[];
};

export const CONTACT = {
  email: "vatel.adrien@gmail.com",
  phone: "07 86 49 71 90",
  phoneHref: "tel:0786497190",
  instagram: "#",
  youtube: "#",
};

// ── VIDÉASTE ────────────────────────────────────────────────

export const videasteProjects: Project[] = [
  {
    title: "Les Sourires du Littoral",
    category: "Commercial",
    filterCat: "commercial",
    credits: "Réalisation & Image — 2025",
    subtitle: "Cabinet dentaire — Les Sourires du Littoral",
    muxId: "00WKlOzJcH01cY00v1YApa8Q00TeSJ5BoCLWFCU4IZAkEss",
    thumbUrl:
      "https://image.mux.com/00WKlOzJcH01cY00v1YApa8Q00TeSJ5BoCLWFCU4IZAkEss/thumbnail.jpg?time=0&width=1200",
    featured: true,
  },
  {
    title: "Pilates Therapie",
    category: "Commercial",
    filterCat: "commercial",
    credits: "Réalisation & Image",
    subtitle: "Commercial — 2025",
    muxId: "qCdqvDy2ck39MRKztoWETdknpkvLUj76hHlBLjkCMqI",
    thumbUrl:
      "https://image.mux.com/qCdqvDy2ck39MRKztoWETdknpkvLUj76hHlBLjkCMqI/thumbnail.jpg?time=0&width=800",
  },
  {
    title: "À La Poursuite de La Nébuleuse D'Orion",
    category: "Commercial",
    filterCat: "commercial",
    credits: "Réalisation & Image",
    subtitle: "2025",
    muxId: "6garOLQwylT02B00fHc02kVWCRDRE35SpOQG5Nz5PzEO800",
    thumbUrl:
      "https://image.mux.com/6garOLQwylT02B00fHc02kVWCRDRE35SpOQG5Nz5PzEO800/thumbnail.jpg?time=0&width=800",
  },
];

export const videasteFilters = ["all", "commercial"];

export const videasteAbout = {
  text: 'De la prise de vue au montage, je prends en charge un projet <em>de A à Z</em>.',
  details: [
    {
      label: "Matériel",
      value: ["Sony FX3 (24–70mm F2.8)", "Ronin RS3", "Rode Wireless Pro"],
    },
    {
      label: "Logiciels",
      value: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve Studio 20"],
    },
    {
      label: "Formation",
      value: [
        "E.S.E.C — Cadreur/Monteur",
        "Sorbonne — Cinéma & Audiovisuel",
        "School of Motion — After Effects",
      ],
    },
    {
      label: "Contact",
      value: ["vatel.adrien@gmail.com", "07 86 49 71 90"],
    },
  ] as AboutDetail[],
};

// ── MONTEUR ─────────────────────────────────────────────────

export const monteurProjects: Project[] = [
  {
    title: "BRUT / LOOPSIDER",
    category: "Reportage",
    filterCat: "brand",
    credits: "2022 – 2025",
    subtitle: "Reportages · Youtube · Réseaux Sociaux",
    muxId: "Wuo961zNiy8igMRxkl6DhFjDIcSzWRtB01KLUZN7eJ01w",
    thumbUrl:
      "https://image.mux.com/Wuo961zNiy8igMRxkl6DhFjDIcSzWRtB01KLUZN7eJ01w/thumbnail.jpg?time=0&width=1200",
    featured: true,
  },
  {
    title: "Tulipes & Co",
    category: "Brand Content",
    filterCat: "brand",
    credits: "Montage — 2024",
    subtitle: "Brand Content",
    muxId: "kS73b4s6nt2ekpvHSxiW9RDy1FLzNnOtdV013F2CszXE",
    thumbUrl:
      "https://image.mux.com/kS73b4s6nt2ekpvHSxiW9RDy1FLzNnOtdV013F2CszXE/thumbnail.jpg?time=0&width=800",
  },
  {
    title: "Nike · EDF · Visa · Getty",
    category: "Brand Content",
    filterCat: "brand",
    credits: "2022 – 2025",
    subtitle: "Ketchup Mayo · Tulipe & Cie · Prod & Cie",
    thumbUrl:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
  },
  {
    title: "Planète Rap",
    category: "Émission TV",
    filterCat: "tv",
    credits: "France 2 — Fred Musa — 2024",
    subtitle: "Prod & Cie. | France 2",
    thumbUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  },
  {
    title: "Zine! Zine!",
    category: "Émission TV",
    filterCat: "tv",
    credits: "France 4 — Marie Palot — 2020–2021",
    subtitle: "Empreinte Digitale | France 4",
    muxId: "auFrbvvg2wnFdDGaTgVZOVCBa5hF8sUFXxvP8HaQgQ4",
    thumbUrl:
      "https://image.mux.com/auFrbvvg2wnFdDGaTgVZOVCBa5hF8sUFXxvP8HaQgQ4/thumbnail.jpg?time=82&width=800",
  },
  {
    title: "Les endormeurs",
    category: "Court Métrage",
    filterCat: "film",
    credits: "Dir : Boris Biaou | Prod : 1000 Visages",
    subtitle: "Court Métrage — juin 2024",
    thumbUrl:
      "https://images.unsplash.com/photo-1500462918058-0212d9cf1d79?w=1200&q=80",
    featured: true,
  },
  {
    title: "Minou",
    category: "Série CM",
    filterCat: "film",
    credits: "Dir : Natacha Cavagnac — mars 2025",
    subtitle: "Série de court métrage",
    thumbUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    title: "RIP",
    category: "Court Métrage",
    filterCat: "film",
    credits: "Montage",
    subtitle: "Court Métrage — 2024",
    muxId: "RzcpfdTgORepX71P3Zv0280275HWMmyyHG1zDnfKs9900M",
    thumbUrl:
      "https://image.mux.com/RzcpfdTgORepX71P3Zv0280275HWMmyyHG1zDnfKs9900M/thumbnail.jpg?time=0&width=800",
  },
  {
    title: "SUN",
    category: "Court Métrage",
    filterCat: "film",
    credits: "Montage",
    subtitle: "Court Métrage",
    muxId: "FlQBNidgtgvcR01FBszfbEvthEinTwPQYGvZ9GgmtNbA",
    thumbUrl:
      "https://image.mux.com/FlQBNidgtgvcR01FBszfbEvthEinTwPQYGvZ9GgmtNbA/thumbnail.jpg?time=39&width=800",
  },
  {
    title: "Vakita",
    category: "Reportage",
    filterCat: "brand",
    credits: "Montage — 2024",
    subtitle: "Reportage",
    muxId: "GcmsHcCHh3AJcuS901AIlg01lgGmy8re4GV9EM02qxTyws",
    thumbUrl:
      "https://image.mux.com/GcmsHcCHh3AJcuS901AIlg01lgGmy8re4GV9EM02qxTyws/thumbnail.jpg?time=0&width=800",
  },
];

export const monteurFilters = ["all", "tv", "brand", "film"];
export const monteurFilterLabels: Record<string, string> = {
  all: "Tous",
  tv: "TV / Émission",
  brand: "Brand Content",
  film: "Fiction",
};

export const monteurFilmography: FilmographyItem[] = [
  { title: "Vakita", subtitle: "Reportage — Montage", year: "2024" },
  {
    title: "BRUT / LOOPSIDER",
    subtitle: "Reportages · Youtube · Réseaux Sociaux",
    year: "2022–2025",
  },
  {
    title: "Brand Content",
    subtitle:
      "Nike, EDF, Visa, Getty — Ketchup Mayo, Tulipe & Cie, Prod & Cie",
    year: "2022–2025",
  },
  {
    title: "Planète Rap",
    subtitle: "Émission TV — Prod & Cie. · France 2 · animée par Fred Musa",
    year: "2024",
  },
  { title: "RIP", subtitle: "Court Métrage — Montage", year: "2024" },
  { title: "SUN", subtitle: "Court Métrage — Montage", year: "2024" },
  {
    title: "Minou",
    subtitle: "Série de court métrage — réalisé par Natacha Cavagnac",
    year: "mars 2025",
  },
  {
    title: "Les endormeurs",
    subtitle: "Court Métrage — dir. Boris Biaou · prod. 1000 Visages",
    year: "juin 2024",
  },
  {
    title: "Zine! Zine!",
    subtitle:
      "Émission TV — Empreinte Digitale · France 4 · animée par Marie Palot",
    year: "2020–2021",
  },
];

export const monteurAbout = {
  text: "Je façonne le rythme et la narration — du rush au master final. <em>Couteau suisse de l'image</em>, autonome de A à Z.",
  details: [
    {
      label: "Logiciels",
      value: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "DaVinci Resolve Studio 20",
        "Final Cut Pro X",
      ],
    },
    {
      label: "Spécialités",
      value: ["Montage narratif", "Motion Design", "Étalonnage", "Brand Content"],
    },
    {
      label: "Formation",
      value: [
        "E.S.E.C — Cadreur/Monteur",
        "School of Motion — AE",
        "Sorbonne — Cinéma",
      ],
    },
    {
      label: "Langues",
      value: ["Français", "Anglais (bilingue)", "Italien (en apprentissage)"],
    },
  ] as AboutDetail[],
};

// ── ASSISTANT MONTEUR ───────────────────────────────────────

export const assistantFilms: MosaicFilm[] = [
  {
    title: "Lucky Luke",
    category: "Série de fiction",
    credits: "Prod : Fédération",
    subtitle: "Disney+ — 2025",
    imgUrl: "https://i.imgur.com/HOJwIVx.jpeg",
    externalUrl: "",
    externalLabel: "Voir sur Disney+",
    description:
      "Série de fiction produite par Fédération, diffusée sur Disney+.",
    badges: { platform: "Disney+", type: "Série de fiction · 2026" },
    meta: [
      { label: "Réal.", value: "Benjamin Rocher" },
      {
        label: "Prod.",
        value:
          "Federation Studio France · Un Pour Tous Productions · Homerun",
      },
      {
        label: "Avec",
        value: "Alban Lenoir · Billie Blain · Alice Taglioni · Jérôme Niel",
      },
      { label: "Format", value: "8 × 35' — Disney+ · France TV" },
    ],
    role: "Assistant Monteur",
  },
  {
    title: "Je serai jamais parfaite",
    category: "Documentaire",
    credits:
      "Un film de Mila Kiss | Prod : Les Films Ex Aequo - BBC Studios France",
    subtitle: "Slash · FranceTV — 2025",
    imgUrl: "https://i.imgur.com/dSx3Tl2.jpeg",
    externalUrl:
      "https://www.france.tv/slash/je-serai-jamais-parfaite-selfie-et-chirurgie/",
    externalLabel: "Voir sur France.tv",
    description:
      "Les réseaux sociaux imposent un idéal de beauté artificiel. Ce documentaire interroge l'impact de cette normalisation sur les nouvelles générations.",
    badges: { platform: "France TV Slash", type: "Documentaire · 2026" },
    meta: [
      { label: "Réal.", value: "Mila Kiss" },
      {
        label: "Prod.",
        value: "Les Films Ex Aequo · BBC Studios France",
      },
      { label: "Produit par", value: "Manel Larbi · Aurore Aubin" },
      { label: "Format", value: "52' — France TV Slash · France 2" },
    ],
    role: "Assistant Monteur",
  },
  {
    title: 'L\'Apocalypse Selon "Mad Max"',
    category: "Documentaire",
    credits: "Réalisé par Julien Dupuy | Prod : Yuzu Production",
    subtitle: "ARTE — 2025",
    imgUrl: "https://i.imgur.com/J3tMGWB.jpeg",
    externalUrl: "https://www.imdb.com/fr/title/tt37482696/",
    externalLabel: "Voir sur IMDb",
    description:
      "Un documentaire qui explore l'univers post-apocalyptique de la saga Mad Max et son influence sur notre vision du futur.",
    badges: { platform: "ARTE", type: "Documentaire · 2025" },
    meta: [
      { label: "Réal.", value: "Julien Dupuy" },
      { label: "Prod.", value: "Yuzu Productions · ARTE France" },
      { label: "Format", value: "53' — ARTE" },
    ],
    role: "Assistant Monteur",
  },
  {
    title: "L'affaire Flactif",
    category: "Documentaire",
    credits: "Prod : Empreinte Digitale",
    subtitle: "Canal+ — 2024",
    imgUrl: "https://i.imgur.com/p10KD2s.jpeg",
    externalUrl:
      "https://www.canalplus.com/decouverte/l-affaire-flactif-une-jalousie-meurtriere/h/24796295_50001",
    externalLabel: "Voir sur Canal+",
    description:
      "En décembre 2003, dans un chalet isolé des Alpes, la famille Flactif est assassinée. Ce documentaire revient sur l'une des affaires criminelles les plus marquantes de France.",
    badges: { platform: "Canal+", type: "Série documentaire · 2024" },
    meta: [
      { label: "Réal.", value: "Aurore Aubin" },
      {
        label: "Prod.",
        value: "Empreinte Digitale · Federation Studio France",
      },
      { label: "Format", value: "4 × 52' — Canal+Docs" },
    ],
    role: "Assistant Monteur",
  },
  {
    title: "Antigang : la relève",
    category: "Long métrage",
    credits: "Réalisation : Benjamin Rocher | Prod : Empreinte Digitale",
    subtitle: "Disney+ — 2023",
    imgUrl: "https://i.imgur.com/KkNTfxX.jpeg",
    externalUrl:
      "https://www.disneyplus.com/fr-fr/browse/entity-6c83f1cd-0ae3-4885-8e0d-ad4c5a6ef378",
    externalLabel: "Voir sur Disney+",
    description:
      "Ancienne légende de la brigade Antigang, Niels Cartier retrouve la trace du gang responsable de la mort de sa femme. Avec Alban Lenoir, Jean Reno, Sofia Essaïdi.",
    badges: { platform: "Disney+", type: "Long métrage · 2023" },
    meta: [
      { label: "Réal.", value: "Benjamin Rocher" },
      {
        label: "Prod.",
        value: "Empreinte Digitale · Empreinte Cinéma",
      },
      {
        label: "Avec",
        value:
          "Alban Lenoir · Jean Reno · Sofia Essaïdi · Cassiopée Mayance",
      },
      { label: "Montage", value: "Dimitri Amar · Dorian Tabone" },
    ],
    role: "Assistant Monteur",
  },
  {
    title: "Prison(s)",
    category: "Série documentaire",
    credits: "Réalisé par Charlotte Lavocat | Prod : Empreinte Digitale",
    subtitle: "France Télévisions — 2022",
    imgUrl: "https://i.imgur.com/H1BJbTx.jpeg",
    externalUrl: "https://www.empreintedigitale.net/prison",
    externalLabel: "Voir le projet",
    description:
      "5 épisodes, 5 thématiques qui montrent 5 quartiers et parcours de la détention en France. Réalisé par Charlotte Lavocat, produit par Joachim Landau et Raphaël Rocher.",
    badges: { platform: "France TV Slash", type: "Série documentaire · 2022" },
    meta: [
      { label: "Réal.", value: "Charlotte Lavocat" },
      { label: "Prod.", value: "Empreinte Digitale" },
      {
        label: "Produit par",
        value: "Joachim Landau · Raphaël Rocher",
      },
      {
        label: "Montage",
        value: "Brice Gauthier · Vincent Eyer",
      },
      { label: "Format", value: "5 × 20' — France Télévisions" },
    ],
    role: "Assistant Monteur",
  },
];

export const assistantAbout = {
  text: "Rigoureux et organisé, j'assiste les monteurs sur des projets <em>ambitieux</em> — longs métrages, séries et documentaires diffusés sur les <em>grandes chaînes</em>.",
  details: [
    {
      label: "Logiciels",
      value: [
        "Adobe Premiere Pro",
        "DaVinci Resolve Studio 20",
        "Final Cut Pro X",
      ],
    },
    {
      label: "Compétences",
      value: [
        "Gestion des médias",
        "Conformité",
        "Sync son & image",
        "Organisation rushes",
      ],
    },
    {
      label: "Diffuseurs",
      value: ["Disney+ · ARTE", "Canal+ · FranceTV", "Slash"],
    },
    {
      label: "Contact",
      value: ["vatel.adrien@gmail.com", "07 86 49 71 90"],
    },
  ] as AboutDetail[],
};
