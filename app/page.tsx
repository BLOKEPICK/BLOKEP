// TailwindCSS recommended. Replace placeholder images later with real IG assets.
"use client";
import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

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


function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-emerald-600 text-white w-9 h-9 grid place-items-center font-bold">O</span>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-slate-900 text-lg">Ozuna Construction LLC</p>
            <p className="text-xs text-slate-500">{COMPANY.city}</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-emerald-700">Servicios</a>
          <a href="#projects" className="hover:text-emerald-700">Proyectos</a>
          <a href="#reviews" className="hover:text-emerald-700">Reseñas</a>
          <a href="#areas" className="hover:text-emerald-700">Áreas</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#contact" className="hover:text-emerald-700">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={COMPANY.whatsappHref} className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-700" aria-label="WhatsApp">
            <MessageCircle className=\"w-5 h-5\" /> <span>WhatsApp</span>
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800" aria-label="Call Now">
            <Phone className=\"w-5 h-5\" /> <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "16px 16px"}}/>
      <div className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Roofing, Siding & Remodeling in {COMPANY.city}</h1>
          <p className="mt-4 text-lg text-slate-200">Licensed & Insured · Free Estimates · Warranty on Labor</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl px-6 py-3 bg-emerald-500 font-semibold text-slate-900 hover:bg-emerald-400">Get a Free Quote</a>
            <a href={COMPANY.whatsappHref} className="rounded-xl px-6 py-3 border border-white/30 hover:bg-white/10">Chat on WhatsApp</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><Phone className=\"w-5 h-5\" /> {COMPANY.phone}</span>
            <span className="inline-flex items-center gap-2"><Mail className=\"w-5 h-5\" /> {COMPANY.email}</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-center p-6">
            <p className="text-slate-200">Reemplaza este bloque con una foto real del Instagram del cliente (16:9 ó 4:3).
              <br/>Optimizada en .webp para mejor performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Servicios</h2>
        <p className="mt-2 text-slate-600">Framing · Roofing · Siding · Carpentry · Remodeling</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <a href={`/#contact`} className="mt-4 inline-block text-emerald-700 font-semibold">Free estimate →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Licensed & Insured",
    "10+ Years Experience",
    "Warranty on Labor",
    "Local & Family-Owned",
  ];
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((t) => (
          <div key={t} className="rounded-xl bg-white border border-slate-200 py-4 font-semibold text-slate-700">{t}</div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Proyectos recientes</h2>
            <p className="mt-2 text-slate-600">Galería con fotos seleccionadas del Instagram del cliente. En producción usaré versiones .webp optimizadas y alt text SEO.</p>
          </div>
          <a className="text-emerald-700 font-semibold" href={COMPANY.instagram} target="_blank">Ver Instagram →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <a key={i} href={p.href || "#"} target="_blank" className="group block">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 grid place-items-center">
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={`${p.title} in ${p.city}`} className="h-full w-full object-cover group-hover:scale-105 transition"/>
                ) : (
                  <div className="text-center p-6 text-slate-500">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm">{p.service} – {p.city}</p>
                    <p className="mt-3 text-xs">(Imagen de ejemplo — sustituir por foto real)</p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Reseñas</h2>
        <p className="mt-2 text-slate-600">Por cumplimiento, estas reseñas son de ejemplo (*Sample*). Sustituiremos por reseñas verificadas del cliente cuando estén disponibles.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-amber-500" aria-label={`${r.rating} stars`}>{"★".repeat(r.rating)}</p>
              </div>
              <p className="text-xs text-slate-500">{r.city}</p>
              <p className="mt-3 text-slate-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "1. Free estimate", d: "Contáctanos por teléfono o WhatsApp y agenda una visita." },
    { t: "2. Detailed proposal", d: "Te enviamos el alcance, materiales y precio claro." },
    { t: "3. Schedule", d: "Coordinamos fecha, permisos y logística." },
    { t: "4. Build", d: "Equipo profesional, seguridad y limpieza diaria." },
    { t: "5. Final walkthrough", d: "Revisión contigo y garantía por escrito." },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Nuestro proceso</h2>
        <div className="mt-8 grid md:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Áreas de servicio</h2>
        <p className="mt-2 text-slate-600">{COMPANY.city} y alrededores.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AREAS.map((a) => (
            <div key={a} className="rounded-xl bg-white border border-slate-200 py-3 text-center font-medium text-slate-700">{a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Ofrecen estimados gratis?", a: "Sí, en Columbus y ciudades cercanas." },
    { q: "¿Tienen licencia y aseguranza?", a: "Sí, somos LLC, con licencia y asegurados. Documentos disponibles a solicitud." },
    { q: "¿Qué garantía ofrecen?", a: "Garantía en mano de obra; materiales según fabricante (p. ej., shingles)." },
    { q: "¿Trabajan con reclamos de seguro?", a: "Podemos asistir con fotos, estimados y documentación." },
    { q: "¿Qué materiales usan para roofing?", a: "Asphalt, metal y sistemas para techos planos según el caso." },
    { q: "¿Plazos de obra?", a: "Según el alcance: reparaciones 1–2 días; reemplazos 1–3; remodelaciones varían." },
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-slate-50 p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">{f.q}<span className="text-slate-400 group-open:rotate-45 transition">＋</span></summary>
              <p className="mt-3 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");
    const msg = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`);
    window.location.href = `mailto:${COMPANY.email}?subject=Free%20Quote%20Request&body=${msg}`;
  }
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Obtén un estimado gratis</h2>
          <p className="mt-2 text-emerald-50">Cuéntanos sobre tu proyecto y te contactamos hoy.</p>
          <div className="mt-6 space-y-2 text-emerald-100">
            <p className="inline-flex items-center gap-2"><Phone className=\"w-5 h-5\" /> <a className="underline" href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
            <p className="inline-flex items-center gap-2"><MessageCircle className=\"w-5 h-5\" /> <a className="underline" href={COMPANY.whatsappHref}>WhatsApp</a></p>
            <p className="inline-flex items-center gap-2"><Mail className=\"w-5 h-5\" /> <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input name="name" required placeholder="Tu nombre" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm font-medium">Teléfono</label>
              <input name="phone" required placeholder="(614) ..." className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" name="email" placeholder="tu@email.com" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm font-medium">Servicio</label>
              <select name="service" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                {SERVICES.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea name="message" rows={4} placeholder="Cuéntanos brevemente tu proyecto" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>
          </div>
          <button type="submit" className="mt-4 w-full rounded-xl bg-slate-900 text-white font-semibold py-3 hover:bg-slate-800">Enviar</button>
          <p className="mt-3 text-xs text-slate-500">Al enviar, se abrirá tu cliente de correo con los datos prellenados.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-white font-extrabold text-lg">{COMPANY.name}</p>
          <p className="text-sm mt-2">{COMPANY.city}</p>
          <div className="mt-3 space-y-1 text-sm">
            <a className="block hover:text-white" href={COMPANY.phoneHref}><span className="inline-block mr-1"><Phone className="w-4 h-4 mr-1 inline" /></span>{COMPANY.phone}</a>
            <a className="block hover:text-white" href={`mailto:${COMPANY.email}`}><span className="inline-block mr-1"><Mail className="w-4 h-4 mr-1 inline" /></span>{COMPANY.email}</a>
            <a className="block hover:text-white" href={COMPANY.instagram} target="_blank">Instagram</a>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold">Servicios</p>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.map(s => <li key={s.slug}>{s.title}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Navegación</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#services" className="hover:text-white">Servicios</a></li>
            <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
            <li><a href="#reviews" className="hover:text-white">Reseñas</a></li>
            <li><a href="#areas" className="hover:text-white">Áreas</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Horario</p>
          <p className="mt-3 text-sm">Lun–Sáb: 8:00am – 6:00pm<br/>Dom: Emergencias</p>
          <a href="#contact" className="inline-block mt-4 rounded-xl bg-emerald-500 text-slate-900 font-semibold px-4 py-2">Free Quote</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <a href={COMPANY.whatsappHref} className="rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-lg px-4 py-3">WhatsApp</a>
      <a href={COMPANY.phoneHref} className="rounded-full bg-slate-900 text-white font-semibold shadow-lg px-4 py-3">Call {COMPANY.phone}</a>
    </div>
  );
}

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