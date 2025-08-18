import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "./constants";

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
            <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-3 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold hover:brightness-95 transition"><svg viewBox="0 0 256 256" width="18" height="18" aria-hidden><path fill="currentColor" d="M127.9 0C57.5 0 0 57.4 0 127.9c0 22.6 6 44.7 17.4 64.1L0 256l65.3-17c18.7 10.2 39.7 15.6 61.2 15.6 70.4 0 127.9-57.4 127.9-127.9C254.4 57.4 198.3 0 127.9 0z"/><path fill="#FFF" d="M190.8 151.3c-2.9 8.3-14.2 15.7-22.2 16.6-5.9.7-13.6.9-39.4-8.2-33.1-11.7-54.5-45.5-56.1-47.6-1.6-2.1-13.4-17.9-13.4-34.2 0-16.3 8.5-24.3 11.5-27.6 2.9-3.3 6.3-4.1 8.4-4.1 2.1 0 4.2.02 6.1.11 2 .09 4.6-.75 7.2 5.5 2.6 6.2 8.9 21.5 9.7 23.1.8 1.6 1.3 3.5.2 5.6-1.1 2.1-1.7 3.4-3.4 5.2-1.7 1.8-3.4 4.1-4.9 5.5-1.6 1.6-3.3 3.3-1.4 6.4 1.9 3.1 8.6 14.2 18.5 23 12.7 11.3 23.4 14.8 26.5 16.4 3.1 1.6 4.9 1.4 6.8-.8 1.9-2.1 7.8-9.1 9.9-12.2 2.1-3.1 4.2-2.6 7.1-1.6 2.9 1 18.5 8.7 21.7 10.3 3.2 1.6 5.3 2.4 6.1 3.7.8 1.3.8 7.4-2.1 15.7z"/></svg> Chat on WhatsApp</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 underline decoration-white/40 underline-offset-4"><Phone className="w-5 h-5" /> {COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 underline decoration-white/40 underline-offset-4"><Mail className="w-5 h-5" /> {COMPANY.email}</a>
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
