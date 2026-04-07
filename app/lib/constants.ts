// ─────────────────────────────────────────────────────────
// constants.ts — Single source of truth for all site data
// Change anything here → reflected across the entire site
// ─────────────────────────────────────────────────────────

// ── Site-wide ──────────────────────────────────────────

export const SITE = {
  name: "THE AGENCY FRAME",
  operatedBy: "THE FOURTH FRAME",
  established: 2024,
  logo: "/images/logo.jpg",
  email: "hellothefourthframe@gmail.com",
  footerEmail: "HELLO@THEFOURTHFRAME.COM",
  footerEmailHref: "mailto:hello@thefourthframe.com",
  location: {
    studio: "Fourth Frame Production Studio",
    city: "Bikaner",
    country: "India",
  },
  badges: ["EST. 2024", "PRODUCTION PARTNER", "PAN-INDIA"],
} as const;

// ── Navigation ─────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Models", href: "/#work" },
] as const;

export const NAV_CTA = {
  label: "Let's Build the Frame",
  href: "/contact",
} as const;

// ── Social Links ───────────────────────────────────────

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/the_fourthframe_/",
    handle: "@the_fourthframe_",
  },
] as const;

// ── Hero Section ───────────────────────────────────────

export const HERO_MEDIA = {
  desktopVideo: "/main/main.mp4",
  mobileVideo: "/main/mianveritical.mp4",
} as const;

// ── Founders Section ───────────────────────────────────

export const FOUNDERS_SECTION = {
  label: "LEADERSHIP",
  title: "The Faces Behind",
  titleAccent: "The Fourth Frame",
} as const;

export const FOUNDERS = [
  {
    name: "Co-Founder & Producer",
    role: "PRODUCER",
    image: "/main/COP.jpeg",
  },
  {
    name: "Casting Manager",
    role: "CASTING",
    image: "/main/CM.jpeg",
  },
  {
    name: "Co-Founder & DOP",
    role: "DIRECTOR OF PHOTOGRAPHY",
    image: "/main/CFD.jpeg",
  },
] as const;

// ── Services Section ───────────────────────────────────

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`;

export const SERVICE_IMAGES = {
  talent: unsplash("1610296669228-602fa827fc1f", 1200, 1200),
  production: unsplash("1583939003579-730e3918a45a", 1200, 1200),
  locations: unsplash("1494526585095-c41746248156", 1200, 1200),
  backstage: unsplash("1529333166437-7750a6dd5a70", 1200, 1200),
  brandShoot: unsplash("1529333166437-7750a6dd5a70", 1200, 1200),
  editors: unsplash("1515378791036-0648a3ef77b2", 1200, 1200),
  bts: unsplash("1526948128573-703ee1aeb6fa", 1200, 1200),
} as const;

export const SERVICES_SECTION = {
  label: "OUR EXPERTISE",
  title: "Integrated Production &",
  titleAccent: "Talent Management",
} as const;

export const SERVICES = [
  {
    index: "01",
    title: "BACKSTAGE",
    description:
      "Complete backstage support to keep the show running smoothly — from team setup to choreography coordination.",
    image: SERVICE_IMAGES.backstage,
    details: "TEAM | COORDINATION | CHOREOGRAPHY",
    includes: [
      "Provide a professional team",
      "Provide a professional coordinator & choreographer",
    ],
  },
  {
    index: "02",
    title: "BRAND SHOOT",
    description:
      "End-to-end brand shoot execution — talent, setup, and on-ground creative support for premium results.",
    image: SERVICE_IMAGES.brandShoot,
    details: "MODELS | LOCATION | MAKEUP",
    includes: [
      "Provide models",
      "Provide location & studio",
      "Provide makeup artist",
    ],
  },
  {
    index: "03",
    title: "PROFESSIONAL EDITORS",
    description:
      "Editing that matches your brand’s pace and polish — from short-form education to full event storytelling.",
    image: SERVICE_IMAGES.editors,
    details: "REELS | SHORTS | EVENT FILMS",
    includes: [
      "Educational reel",
      "Pre-wedding short song",
      "Complete event reel",
    ],
  },
  {
    index: "04",
    title: "BTS MAN",
    description:
      "Dedicated behind-the-scenes coverage to capture the process and energy on set — perfect for social-first content.",
    image: SERVICE_IMAGES.bts,
    details: "ON-SET | STORY | SOCIAL",
    includes: ["Behind-the-scenes capture & coverage"],
  },
] as const;

// ── Models / Portfolio Roster ──────────────────────────

export const MODELS_SECTION = {
  label: "OUR TALENT",
  title: "Models",
  titleAccent: "Roster",
} as const;

export const MODELS = [
  {
    id: 1,
    name: "Iri",
    height: '162 cm (5\'4")',
    hair: "Dark Brown",
    eyes: "Dark Brown",
    image: "/main/M1.jpeg",
  },
  {
    id: 2,
    name: "Tamannah",
    height: '162 cm (5\'4")',
    hair: "Dark Brown",
    eyes: "Dark Brown",
    image: "/main/M3.png",
  },
  {
    id: 3,
    name: "Bhavika Jain",
    height: '167 cm (5\'5")',
    hair: "Black",
    eyes: "Dark Brown",
    image: "/main/M4.png",
  },
  {
    id: 4,
    name: "Zuber mirza",
    height: '180 cm (5\'9")',
    hair: "Black",
    eyes: "Black",
    image: "/main/M5.png",
  },
] as const;

// ── Contact Section ────────────────────────────────────

export const CONTACT_SECTION = {
  label: "GET IN TOUCH",
  title: "CONNECT WITH",
  titleAccent: "THE FRAME",
  submitButtonText: "Book Your Talent",
  successTitle: "Submission Successful",
  successMessage:
    "Your query has been submitted and our team will connect with you soon.",
} as const;

export const CONTACT_FORM_INTERESTS = [
  "Talent Booking",
  "Production Management",
  "Location Scouting",
  "Full Agency Service",
] as const;

// ── Footer ─────────────────────────────────────────────

export const FOOTER = {
  ctaVideoSrc: "/main/CTABG.mp4",
  ctaHeadline:
    "Build visuals that look premium before production even starts.",
  heading: ["WE COMMAND", "THE STAGE.", "WE CURATE", "THE FACE"],
  description:
    "Premium talent casting for global brands and comprehensive backstage logistics for large-scale fashion shows. We handle the hustle; you take the applause.",
  studioLocations: [{ city: "Bikaner", note: "Primary Base" }],
} as const;

// ── Image Pools (unsplash, kept for legacy / gallery) ──

export const HERO_BACKGROUND_IMAGE = unsplash("1492691527719-9d1e07e534b4", 2400, 1600);

export const HERO_PREVIEW_IMAGES = {
  talent: unsplash("1610296669228-602fa827fc1f", 900, 900),
  production: unsplash("1583939003579-730e3918a45a", 900, 900),
  locations: unsplash("1494526585095-c41746248156", 900, 900),
} as const;

export const TALENT_IMAGE_POOL = [
  unsplash("1610296669228-602fa827fc1f", 1200, 1600),
  unsplash("1542038784456-1ea8e935640e", 1200, 1600),
  unsplash("1509631179647-0177331693ae", 1200, 1600),
  unsplash("1519741497674-611481863552", 1200, 1600),
  unsplash("1606216794079-73f85bbd57d5", 1200, 1600),
  unsplash("1511285560929-80b456fea0bc", 1200, 1600),
  unsplash("1492691527719-9d1e07e534b4", 1200, 1600),
  unsplash("1583939003579-730e3918a45a", 1200, 1600),
] as const;

export const PORTFOLIO_IMAGE_POOL = [
  unsplash("1492691527719-9d1e07e534b4", 1400, 1800),
  unsplash("1511285560929-80b456fea0bc", 1400, 1800),
  unsplash("1606216794079-73f85bbd57d5", 1400, 1800),
  unsplash("1583939003579-730e3918a45a", 1400, 1800),
  unsplash("1519741497674-611481863552", 1400, 1800),
  unsplash("1509631179647-0177331693ae", 1400, 1800),
  unsplash("1520854221256-17451cc331bf", 1400, 1800),
  unsplash("1542038784456-1ea8e935640e", 1400, 1800),
] as const;

export const LOCATION_IMAGE_POOL = [
  unsplash("1494526585095-c41746248156", 1400, 1800),
  unsplash("1502672260266-1c1ef2d93688", 1400, 1800),
  unsplash("1505691938895-1758d7feb511", 1400, 1800),
  unsplash("1479839672679-a46483c0e7c8", 1400, 1800),
  unsplash("1464890100898-a385f744067f", 1400, 1800),
  unsplash("1460317442991-0ec209397118", 1400, 1800),
  unsplash("1489515217757-5fd1be406fef", 1400, 1800),
  unsplash("1493809842364-78817add7ffb", 1400, 1800),
  unsplash("1512918728675-ed5a9ecdebfd", 1400, 1800),
] as const;
