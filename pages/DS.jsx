// Base landing page inspired by the reference (built from scratch)
// Assumes Next.js App Router and TailwindCSS installed.
// Save as app/page.tsx or app/page.jsx in a Next.js project.
// You can paste this entire component and it will render a clean, responsive landing.

import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Star, Calendar, Heart, Image as ImageIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f3f2eb] text-zinc-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-zinc-900" />
              <span className="font-semibold tracking-tight">Your Med Spa</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#specials" className="hover:opacity-80">Specials</a>
              <a href="#services" className="hover:opacity-80">Servicios</a>
              <a href="#memberships" className="hover:opacity-80">Membresías</a>
              <a href="#gallery" className="hover:opacity-80">Resultados</a>
              <a href="#contact" className="hover:opacity-80">Contacto</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="#book" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:shadow-md transition">
                Reservar <Calendar className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Donde el minimalismo
                <br />
                se encuentra con la belleza
              </motion.h1>
              <p className="mt-5 max-w-xl text-zinc-600 text-base lg:text-lg">
                Resultados auténticos, naturales y medibles. Experiencias de spa médico con tecnología de punta y un trato cercano.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white text-sm font-medium shadow-sm hover:shadow-md transition">
                  Agenda tu consulta <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#planner" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-white transition">
                  Planificador de tratamiento <Sparkles className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
                <div className="flex items-center gap-1"><Star className="h-4 w-4"/> 4.9 rating</div>
                <div className="flex items-center gap-1"><Phone className="h-4 w-4"/> (845) 000-0000</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200 overflow-hidden">
                <div className="h-full w-full grid grid-cols-2 gap-1 p-1">
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block rounded-3xl bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-200">
                <div className="flex items-center gap-2 text-sm">
                  <ImageIcon className="h-4 w-4"/> Antes & después
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specials */}
        <section id="specials" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Promociones & Paquetes</h2>
            <p className="mt-2 text-zinc-600">Ofertas por tiempo limitado diseñadas para maximizar resultados.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {title:"Neurotoxinas (Dysport/Botox)", desc:"Suave de líneas de expresión con un look natural."},
                {title:"Rellenos dérmicos", desc:"Volumen sutil y armonía facial."},
                {title:"Glo2Facial / Peelings", desc:"Piel luminosa y textura refinada."},
              ].map((c,i)=> (
                <div key={i} className="rounded-3xl border border-zinc-200 bg-[#f8f7f2] p-6 hover:shadow-sm transition">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{c.title}</h3>
                    <Heart className="h-4 w-4"/>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
                  <a href="#book" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                    Ver detalles <ArrowRight className="h-4 w-4"/>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Favorites / Services */}
        <section id="services" className="">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Algunos de nuestros favoritos</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                  <div className="aspect-[4/3] w-full bg-zinc-100"/>
                  <div className="p-5">
                    <h3 className="font-medium">Servicio {i+1}</h3>
                    <p className="mt-1 text-sm text-zinc-600">Descripción breve del beneficio principal.</p>
                    <a href="#book" className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                      Agendar <ArrowRight className="h-4 w-4"/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section id="memberships" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Membresías Beauty Pass</h2>
                <p className="mt-2 text-zinc-600 max-w-2xl">Obtén beneficios recurrentes, descuentos preferenciales y citas prioritarias.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {name:"Esencial", price:"$49/mes", perks:["Facial mensual básico","5% OFF en neurotoxinas","Recordatorios VIP"]},
                {name:"Plus", price:"$99/mes", perks:["Facial premium","10% OFF en rellenos","Prioridad de agenda"]},
                {name:"Elite", price:"$199/mes", perks:["Tratamiento avanzado","15% OFF global","Obsequios de temporada"]},
              ].map((m, i)=> (
                <div key={i} className="rounded-3xl border border-zinc-200 bg-[#f8f7f2] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{m.name}</h3>
                    <span className="text-sm font-semibold">{m.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                    {m.perks.map((p,idx)=>(<li key={idx} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900"/> {p}</li>))}
                  </ul>
                  <a href="#join" className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-white text-sm font-medium hover:shadow-sm">Unirme</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Planner CTA */}
        <section id="planner" className="">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200">
              <h3 className="text-xl font-semibold tracking-tight">Planificador de Tratamiento</h3>
              <p className="mt-2 text-zinc-600">Responde 3 preguntas y te sugerimos un plan a tu medida: piel, volumen y correcciones sutiles.</p>
              <a href="#book" className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-white">Comenzar</a>
            </div>
            <div className="rounded-3xl bg-[#f8f7f2] p-6 ring-1 ring-zinc-200">
              <h4 className="font-medium">¿Qué incluye?</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Objetivo estético y tiempo disponible</li>
                <li>• Presupuesto y prioridades</li>
                <li>• Sesiones recomendadas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Antes & Después</h2>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="aspect-[4/3] w-full rounded-3xl bg-zinc-100"/>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Agenda tu visita</h2>
              <p className="mt-2 text-zinc-600">50 Front St, Suite 202, Newburgh, NY • Lun–Sáb</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="tel:+18450000000" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-white transition">
                  <Phone className="h-4 w-4"/> Llamar
                </a>
                <a href="#book" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white text-sm font-medium shadow-sm hover:shadow-md transition">
                  Reservar ahora <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200">
              <form className="grid gap-3">
                <input placeholder="Nombre" className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"/>
                <input placeholder="Email" type="email" className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"/>
                <input placeholder="Teléfono" className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"/>
                <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"/>
                <button className="mt-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white text-sm font-medium hover:shadow-sm" type="button">Enviar</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Your Med Spa. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 text-sm">
              <a className="hover:opacity-80" href="#">Privacidad</a>
              <a className="hover:opacity-80" href="#">Términos</a>
            </div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
