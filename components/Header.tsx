import React from "react";
import { Phone } from "lucide-react";
import { COMPANY } from "./constants";

export default function Header() {
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
            <svg aria-hidden width="20" height="20" viewBox="0 0 24 24"><path d="M20 3.5A10 10 0 0 0 4.8 17.8L3 22l4.4-1.8A10 10 0 1 0 20 3.5z" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M7.5 9.5c0 4 4 7 7.5 7.5l1.5-2-2.5-1-1 1c-2-.5-3.5-2-4-4l1-1-1-2.5-1.5 2z" fill="currentColor"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800" aria-label="Call Now">
            <Phone className="w-5 h-5" /> <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
