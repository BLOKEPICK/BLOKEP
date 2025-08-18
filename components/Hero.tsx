import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
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
