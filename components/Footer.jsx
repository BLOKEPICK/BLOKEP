import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-white font-extrabold text-lg">{COMPANY.name}</p>
          <p className="text-sm mt-2">{COMPANY.city}</p>
          <div className="mt-3 space-y-1 text-sm">
            <a className="block hover:text-white" href={COMPANY.phoneHref}><span className="inline-block mr-1"><Phone className="w-4 h-4 inline" /></span>{COMPANY.phone}</a>
            <a className="block hover:text-white" href={`mailto:${COMPANY.email}`}><span className="inline-block mr-1"><Mail className="w-4 h-4 inline" /></span>{COMPANY.email}</a>
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
          <div className="md:col-span-4 flex items-center justify-center gap-3 mt-2">
  </div>
  <div className="md:col-span-4 flex items-center justify-center gap-3 mt-2">
    
  </div>
</div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
    </footer>
  );
}