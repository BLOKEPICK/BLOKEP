// Clean JS constants (no TypeScript types)

export const COMPANY = {
  name: "Ozuna Construction LLC",
  phone: "614-984-0351",
  phoneHref: "tel:16149840351",
  email: "ozunaconstructionllc@gmail.com",
  city: "Columbus, OH",
  instagram: "https://www.instagram.com/ozuna_construction_llc/",
  whatsappHref: "https://wa.me/16149840351"
};

export const AREAS = [
  "Columbus", "Dublin", "Hilliard", "Westerville", "Gahanna", "New Albany"
];

export const SERVICES = [
  { slug: "framing", title: "Framing", desc: "Structural framing for new builds, additions and repairs." },
  { slug: "roofing", title: "Roofing", desc: "Repairs & replacements • Asphalt • Metal • Flat roofs." },
  { slug: "siding", title: "Siding", desc: "Vinyl, fiber cement, wood — installation & repairs." },
  { slug: "carpentry", title: "Carpentry", desc: "Decks, interior trim, custom woodwork, repairs." },
  { slug: "remodeling", title: "Remodeling", desc: "Kitchens, bathrooms, basements and full renovations." }
];

export const PROJECTS = [
  { title: "Asphalt Roof Replacement", service: "roofing", city: "Columbus", img: "/images/ig/roof-shingles-01.webp", href: COMPANY.instagram },
  { title: "Metal Roof Install", service: "roofing", city: "Dublin", img: "/images/ig/roof-metal-02.webp", href: COMPANY.instagram },
  { title: "Flat Roof Repair", service: "roofing", city: "Hilliard", img: "/images/ig/roof-flat-03.webp", href: COMPANY.instagram },
  { title: "Vinyl Siding Refresh", service: "siding", city: "Westerville", img: "/images/ig/siding-vinyl-01.webp", href: COMPANY.instagram },
  { title: "Fiber Cement Upgrade", service: "siding", city: "Columbus", img: "/images/ig/siding-fibercement-02.webp", href: COMPANY.instagram },
  { title: "Deck & Railing", service: "carpentry", city: "Dublin", img: "/images/ig/deck-rail-01.webp", href: COMPANY.instagram },
];
