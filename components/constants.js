export const COMPANY = {
  name: "Ozuna Construction LLC",
  phone: "614-984-0351",
  phoneHref: "tel:+16149840351",
  whatsappHref: "https://wa.me/16149840351",
  email: "ozunaconstructionllc@gmail.com",
  instagram: "https://www.instagram.com/ozuna_construction_llc/",
  city: "Columbus, OH",
};

export const SERVICES: { slug: string; title: string; desc= [
  { slug: "framing", title: "Framing", desc: "Structural framing for new builds, additions and repairs." },
  { slug: "roofing", title: "Roofing", desc: "Repairs & replacements • Asphalt • Metal • Flat roofs." },
  { slug: "siding", title: "Siding", desc: "Vinyl, fiber cement, wood — installation & repairs." },
  { slug: "carpentry", title: "Carpentry", desc: "Decks, trims, doors, custom woodwork and more." },
  { slug: "remodeling", title: "Remodeling", desc: "Kitchens, bathrooms, basements and full renovations." },
];

export const PROJECTS: { title: string; service: string; city: string; img?: string; href?= [
  { title: "Asphalt Roof Replacement", service: "roofing", city: "Columbus", img: "/images/ig/roof-shingles-01.webp", href: COMPANY.instagram },
  { title: "Metal Roof Install", service: "roofing", city: "Dublin", img: "/images/ig/roof-metal-02.webp", href: COMPANY.instagram },
  { title: "Flat Roof Repair", service: "roofing", city: "Hilliard", img: "/images/ig/roof-flat-03.webp", href: COMPANY.instagram },
  { title: "Vinyl Siding Upgrade", service: "siding", city: "Westerville", img: "/images/ig/siding-vinyl-01.webp", href: COMPANY.instagram },
  { title: "Fiber Cement Siding", service: "siding", city: "Gahanna", img: "/images/ig/siding-fiber-02.webp", href: COMPANY.instagram },
  { title: "Deck & Railing Build", service: "carpentry", city: "Worthington", img: "/images/ig/carpentry-deck-01.webp", href: COMPANY.instagram },
  { title: "Interior Trim & Doors", service: "carpentry", city: "Grove City", img: "/images/ig/carpentry-trim-02.webp", href: COMPANY.instagram },
  { title: "Kitchen Remodeling", service: "remodeling", city: "New Albany", img: "/images/ig/remodel-kitchen-01.webp", href: COMPANY.instagram },
];

export const REVIEWS: { name: string; city: string; rating: number; text= [
  { name: "M. Rivera", city: "Columbus, OH", rating: 5, text: "Nos reemplazaron el techo en 2 días y dejaron todo limpio. Trato claro y precio justo. (Sample)" },
  { name: "E. Thompson", city: "Dublin, OH", rating: 5, text: "Actualizamos el siding vinílico y la casa parece nueva. Excelente detalle en las terminaciones. (Sample)" },
  { name: "Carlos H.", city: "Hilliard, OH", rating: 5, text: "Repararon una filtración complicada. Puntuales y profesionales, cero sorpresas. (Sample)" },
  { name: "J. Patel", city: "Westerville, OH", rating: 5, text: "Remodelación de cocina impecable, respetaron el calendario y el presupuesto. (Sample)" },
  { name: "S. Miller", city: "Gahanna, OH", rating: 5, text: "Construyeron un deck sólido y precioso. Volvería a contratarlos. (Sample)" },
  { name: "Ana G.", city: "Worthington, OH", rating: 5, text: "Cambio completo de shingles con garantía por escrito. Comunicación A+. (Sample)" },
  { name: "R. Scott", city: "Grove City, OH", rating: 5, text: "Carpintería interior: marcos y puertas perfectas. Trabajo limpio. (Sample)" },
  { name: "L. Nguyen", city: "New Albany, OH", rating: 5, text: "Reparación de techo plano y mantenimiento. Sin goteras desde entonces. (Sample)" },
];

export const AREAS = ["Columbus","Dublin","Hilliard","Westerville","Gahanna","Worthington","Grove City","New Albany"];
