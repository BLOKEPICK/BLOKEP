"use client";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Wrench, Home, Phone, MessageSquare, ChevronRight, Hammer, Building2, PanelsTopLeft, House } from "lucide-react";
import { event as gaEvent } from "../lib/gtag";

const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1 (614) 000-0000";
const wa = process.env.NEXT_PUBLIC_WHATSAPP || "+16140000000";
const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "ozunaconstructionllc@gmail.com";

const ctaClick = (method) => () => gaEvent("cta_click", { method });

export default function HomePage() {
  return (
    <main>
      {/* Hero (single H1) */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Roofing, Siding, Framing & Remodeling in Columbus, OH
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Licensed & insured. 10+ years of experience. Warranty on labor. Local & family-owned.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                onClick={ctaClick("tel")}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                aria-label="Call for a free estimate"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </Link>
              <Link
                href={`https://wa.me/${wa.replace(/[^\d]/g, "")}`}
                onClick={ctaClick("whatsapp")}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-400 text-slate-800 px-4 py-2 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                aria-label="Chat on WhatsApp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageSquare className="size-5" aria-hidden="true" />
                WhatsApp
              </Link>
              <Link
                href={`mailto:${email}`}
                onClick={ctaClick("email")}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                aria-label="Email us"
              >
                Email
              </Link>
            </div>

            {/* Trust bar */}
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700 md:grid-cols-4" aria-label="Company trust indicators">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4" aria-hidden/><span>Licensed & Insured</span></li>
              <li className="flex items-center gap-2"><Wrench className="size-4" aria-hidden/><span>10+ Years</span></li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4" aria-hidden/><span>Warranty on Labor</span></li>
              <li className="flex items-center gap-2"><Home className="size-4" aria-hidden/><span>Local & Family-Owned</span></li>
            </ul>
          </div>

          <div className="relative h-64 md:h-[420px]">
            <Image
              src="/hero-roof.jpg"
              alt="Crew working on a residential roof in Columbus, Ohio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" aria-labelledby="services-heading" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold">Services</h2>
          <p className="mt-2 text-slate-600 max-w-prose">Quality craftsmanship for residential and light commercial projects.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "roofing", title: "Roofing", icon: House, desc: "Asphalt shingle replacement, repairs & storm damage." },
              { slug: "siding", title: "Siding", icon: PanelsTopLeft, desc: "Vinyl, fiber cement, and wood siding installations." },
              { slug: "framing", title: "Framing", icon: Building2, desc: "Structural framing for additions and new builds." },
              { slug: "remodeling", title: "Remodeling", icon: Hammer, desc: "Kitchens, bathrooms, basements & more." }
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl border bg-white p-5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500" aria-label={`${s.title} service`}>
                <s.icon className="size-6" aria-hidden/>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                  Learn more <ChevronRight className="size-4" aria-hidden/>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" aria-labelledby="process-heading" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="process-heading" className="text-2xl md:text-3xl font-bold">Our Process</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { title: "1) Free Estimate", desc: "We evaluate your project on-site or remotely.", icon: Phone },
              { title: "2) Detailed Proposal", desc: "Transparent scope, timeline, and materials.", icon: Wrench },
              { title: "3) Professional Work", desc: "Licensed crew, daily cleanup, safety-first.", icon: ShieldCheck },
              { title: "4) Final Walkthrough", desc: "We review the work and warranty together.", icon: Home }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
                <item.icon className="size-6" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold">Recent Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((n) => (
              <figure key={n} className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={`/project-${n}.jpg`} alt={`Project photo ${n}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" loading="lazy" />
                </div>
                <figcaption className="p-3 text-sm text-slate-600">Project #{n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-heading" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <dl className="mt-6 space-y-6">
            {[
              {q:"Do you provide free estimates?", a:"Yes, we offer free, no-obligation estimates in Columbus and nearby areas."},
              {q:"Are you licensed and insured?", a:"Yes. We carry proper licensing and insurance, and we provide warranty on labor."},
              {q:"What roofing materials do you use?", a:"We install quality asphalt shingles and can work with metal and flat roofing upon request."},
              {q:"Do you handle siding and framing?", a:"Absolutely. We install vinyl and fiber cement siding and provide structural framing for additions."},
              {q:"Can you help with remodeling?", a:"Yes—kitchens, bathrooms, basements, and general home upgrades."}
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg border bg-white p-4">
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-1 text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">Call, WhatsApp, or email us to schedule your free estimate.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`tel:${phone.replace(/[^\d+]/g, "")}`} onClick={ctaClick("tel")} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2" aria-label="Call for a free estimate"><Phone className="size-5" aria-hidden/>Call Now</Link>
            <Link href={`https://wa.me/${wa.replace(/[^\d]/g, "")}`} onClick={ctaClick("whatsapp")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-400 text-slate-800 px-4 py-2 hover:bg-slate-50" aria-label="Chat on WhatsApp"><MessageSquare className="size-5" aria-hidden/>WhatsApp</Link>
            <Link href={`mailto:${email}`} onClick={ctaClick("email")} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50" aria-label="Email us">Email</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FAQJsonLd />
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Ozuna Construction LLC. All rights reserved.</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#projects" className="hover:underline">Projects</Link></li>
              <li><Link href="#process" className="hover:underline">Our Process</Link></li>
              <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// FAQ JSON-LD component
function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type":"Question","name":"Do you provide free estimates?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer free, no-obligation estimates in Columbus and nearby areas."}},
      {"@type":"Question","name":"Are you licensed and insured?","acceptedAnswer":{"@type":"Answer","text":"Yes. We carry proper licensing and insurance, and we provide warranty on labor."}},
      {"@type":"Question","name":"What roofing materials do you use?","acceptedAnswer":{"@type":"Answer","text":"We install quality asphalt shingles and can work with metal and flat roofing upon request."}},
      {"@type":"Question","name":"Do you handle siding and framing?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We install vinyl and fiber cement siding and provide structural framing for additions."}},
      {"@type":"Question","name":"Can you help with remodeling?","acceptedAnswer":{"@type":"Answer","text":"Yes—kitchens, bathrooms, basements, and general home upgrades."}}
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>;
}
