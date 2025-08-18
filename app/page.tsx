// TailwindCSS recommended. Replace placeholder images later with real IG assets.
"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Areas from "@/components/Areas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const COMPANY = {
  name: "Ozuna Construction LLC",
  phone: "614-984-0351",
  phoneHref: "tel:+16149840351",
  whatsappHref: "https://wa.me/16149840351",
  email: "ozunaconstructionllc@gmail.com",
  instagram: "https://www.instagram.com/ozuna_construction_llc/",
  city: "Columbus, OH",
} as const;

const SERVICES: { slug: string; title: string; desc: string }[] = [
  { slug: "framing", title: "Framing", desc: "Structural framing for new builds, additions and repairs." },
  { slug: "roofing", title: "Roofing", desc: "Repairs & replacements • Asphalt • Metal • Flat roofs." },
  { slug: "siding", title: "Siding", desc: "Vinyl, fiber cement, wood — installation & repairs." },
  { slug: "carpentry", title: "Carpentry", desc: "Decks, trims, doors, custom woodwork and more." },
  { slug: "remodeling", title: "Remodeling", desc: "Kitchens, bathrooms, basements and full renovations." },
];

const PROJECTS: { title: string; service: string; city: string; img?: string; href?: string }[] = [
  { title: "Asphalt Roof Replacement", service: "roofing", city: "Columbus", img: "/images/ig/roof-shingles-01.webp", href: COMPANY.instagram },
  { title: "Metal Roof Install", service: "roofing", city: "Dublin", img: "/images/ig/roof-metal-02.webp", href: COMPANY.instagram },
  { title: "Flat Roof Repair", service: "roofing", city: "Hilliard", img: "/images/ig/roof-flat-03.webp", href: COMPANY.instagram },
  { title: "Vinyl Siding Upgrade", service: "siding", city: "Westerville", img: "/images/ig/siding-vinyl-01.webp", href: COMPANY.instagram },
  { title: "Fiber Cement Siding", service: "siding", city: "Gahanna", img: "/images/ig/siding-fiber-02.webp", href: COMPANY.instagram },
  { title: "Deck & Railing Build", service: "carpentry", city: "Worthington", img: "/images/ig/carpentry-deck-01.webp", href: COMPANY.instagram },
  { title: "Interior Trim & Doors", service: "carpentry", city: "Grove City", img: "/images/ig/carpentry-trim-02.webp", href: COMPANY.instagram },
  { title: "Kitchen Remodeling", service: "remodeling", city: "New Albany", img: "/images/ig/remodel-kitchen-01.webp", href: COMPANY.instagram },
];

const REVIEWS: { name: string; city: string; rating: number; text: string }[] = [
  { name: "M. Rivera", city: "Columbus, OH", rating: 5, text: "Nos reemplazaron el techo en 2 días y dejaron todo limpio. Trato claro y precio justo. (Sample)" },
  { name: "E. Thompson", city: "Dublin, OH", rating: 5, text: "Actualizamos el siding vinílico y la casa parece nueva. Excelente detalle en las terminaciones. (Sample)" },
  { name: "Carlos H.", city: "Hilliard, OH", rating: 5, text: "Repararon una filtración complicada. Puntuales y profesionales, cero sorpresas. (Sample)" },
  { name: "J. Patel", city: "Westerville, OH", rating: 5, text: "Remodelación de cocina impecable, respetaron el calendario y el presupuesto. (Sample)" },
  { name: "S. Miller", city: "Gahanna, OH", rating: 5, text: "Construyeron un deck sólido y precioso. Volvería a contratarlos. (Sample)" },
  { name: "Ana G.", city: "Worthington, OH", rating: 5, text: "Cambio completo de shingles con garantía por escrito. Comunicación A+. (Sample)" },
  { name: "R. Scott", city: "Grove City, OH", rating: 5, text: "Carpintería interior: marcos y puertas perfectas. Trabajo limpio. (Sample)" },
  { name: "L. Nguyen", city: "New Albany, OH", rating: 5, text: "Reparación de techo plano y mantenimiento. Sin goteras desde entonces. (Sample)" },
];

const AREAS = ["Columbus","Dublin","Hilliard","Westerville","Gahanna","Worthington","Grove City","New Albany"] as const;


// Header moved to components/Header.tsx

// Hero moved to components/Hero.tsx

// Services moved to components/Services.tsx

// TrustBar moved to components/TrustBar.tsx

// Projects moved to components/Projects.tsx

// Reviews moved to components/Reviews.tsx

// Process moved to components/Process.tsx

// Areas moved to components/Areas.tsx

// FAQ moved to components/FAQ.tsx

// Contact moved to components/Contact.tsx

// Footer moved to components/Footer.tsx

// StickyCTA moved to components/StickyCTA.tsx

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: COMPANY.name,
            address: { addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
            areaServed: Array.from(AREAS).map((a) => `${a}, OH`),
            telephone: COMPANY.phone,
            email: COMPANY.email,
            sameAs: [COMPANY.instagram],
          }),
        }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <Reviews />
      <Process />
      <Areas />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}