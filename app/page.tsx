"use client";

import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Star, Calendar, Heart, Image as ImageIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white text-brand-text antialiased">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-brand-border bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-brand-primary" />
              <span className="font-semibold tracking-tight">D‑Essence Wellness</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#specials" className="hover:opacity-80">Specials</a>
              <a href="#services" className="hover:opacity-80">Servicios</a>
              <a href="#memberships" className="hover:opacity-80">Membresías</a>
              <a href="#gallery" className="hover:opacity-80">Resultados</a>
              <a href="#contact" className="hover:opacity-80">Contacto</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="#book" className="btn btn-primary">
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
              <p className="mt-5 max-w-xl muted text-base lg:text-lg">
                Resultados auténticos, naturales y medibles. Experiencias de spa médico con tecnología de punta y un trato cercano.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book" className="btn btn-primary">
                  Agenda tu consulta <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#planner" className="btn btn-outline">
                  Planificador de tratamiento <Sparkles className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm muted">
                <div className="flex items-center gap-1"><Star className="h-4 w-4"/> 4.9 rating</div>
                <div className="flex items-center gap-1"><Phone className="h-4 w-4"/> (845) 000-0000</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl bg-white shadow-soft ring-1 ring-brand-border overflow-hidden">
                <div className="h-full w-full grid grid-cols-2 gap-1 p-1">
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                  <div className="rounded-2xl bg-zinc-100" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block rounded-3xl bg-white px-4 py-3 shadow-soft ring-1 ring-brand-border">
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
            <p className="mt-2 muted">Ofertas por tiempo limitado diseñadas para maximizar resultados.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {title:"Neurotoxinas (Dysport/Botox)", desc:"Suave de líneas de expresión con un look natural."},
                {title:"Rellenos dérmicos", desc:"Volumen sutil y armonía facial."},
                {title:"Glo2Facial / Peelings", desc:"Piel luminosa y textura refinada."},
              ].map((c,i)=> (
                <div key={i} className="card hover:shadow-soft transition">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{c.title}</h3>
                    <Heart className="h-4 w-4"/>
                  </div>
                  <p className="mt-2 text-sm muted">{c.desc}</p>
                  <a href="#book" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                    Ver detalles <ArrowRight className="h-4 w-4"/>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Favorites / Services */}
        <section id="services">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Algunos de nuestros favoritos</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="group overflow-hidden rounded-3xl border border-brand-border bg-white">
                  <div className="aspect-[4/3] w-full bg-zinc-100"/>
                  <div className="p-5">
                    <h3 className="font-medium">Servicio {i+1}</h3>
                    <p className="mt-1 text-sm muted">Descripción breve del beneficio principal.</p>
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
                <p className="mt-2 muted max-w-2xl">Obtén beneficios recurrentes, descuentos preferenciales y citas prioritarias.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {name:"Esencial", price:"$49/mes", perks:["Facial mensual básico","5% OFF en neurotoxinas","Recordatorios VIP"]},
                {name:"Plus", price:"$99/mes", perks:["Facial premium","10% OFF en rellenos","Prioridad de agenda"]},
                {name:"Elite", price:"$199/mes", perks:["Tratamiento avanzado","15% OFF global","Obsequios de temporada"]},
              ].map((m, i)=> (
                <div key={i} className="rounded-3xl border border-brand-border bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{m.name}</h3>
                    <span className="text-sm font-semibold">{m.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-brand-text">
                    {m.perks.map((p,idx)=>(<li key={idx} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary"/> {p}</li>))}
                  </ul>
                  <a href="#join" className="mt-5 btn btn-primary">Unirme</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Planner CTA */}
        <section id="planner">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-border">
              <h3 className="text-xl font-semibold tracking-tight">Planificador de Tratamiento</h3>
              <p className="mt-2 muted">Responde 3 preguntas y te sugerimos un plan a tu medida: piel, volumen y correcciones sutiles.</p>
              <a href="#book" className="mt-5 btn btn-outline">Comenzar</a>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-border">
              <h4 className="font-medium">¿Qué incluye?</h4>
              <ul className="mt-3 space-y-2 text-sm text-brand-text">
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
        <section id="contact">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">Agenda tu visita</h2>
              <p className="mt-2 muted">50 Front St, Suite 202, Newburgh, NY • Lun–Sáb</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="tel:+18450000000" className="btn btn-outline">
                  <Phone className="h-4 w-4"/> Llamar
                </a>
                <a href="#book" className="btn btn-primary">
                  Reservar ahora <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-border">
              <form className="grid gap-3">
                <input placeholder="Nombre" className="rounded-xl border border-brand-border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/10"/>
                <input placeholder="Email" type="email" className="rounded-xl border border-brand-border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/10"/>
                <input placeholder="Teléfono" className="rounded-xl border border-brand-border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/10"/>
                <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="rounded-xl border border-brand-border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/10"/>
                <button className="mt-2 btn btn-primary" type="button">Enviar</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-brand-footerBg" style={{ borderColor: "var(--tw-color-brand-footerBorder, #212121)" }}>
          <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: "#a8a8a8" }}>© {new Date().getFullYear()} D‑Essence Wellness. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 text-sm">
              <a className="hover:opacity-80" style={{ color: "#a8a8a8" }} href="#">Privacidad</a>
              <a className="hover:opacity-80" style={{ color: "#a8a8a8" }} href="#">Términos</a>
            </div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
