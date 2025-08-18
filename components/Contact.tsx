"use client";
import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";

export default function Contact() {
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
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"><a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-white font-medium transition"><Phone className="w-5 h-5" /> Llamar</a><a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:brightness-95 px-4 py-2 text-white font-medium transition"><svg viewBox="0 0 256 256" width="18" height="18" aria-hidden><path fill="currentColor" d="M127.9 0C57.5 0 0 57.4 0 127.9c0 22.6 6 44.7 17.4 64.1L0 256l65.3-17c18.7 10.2 39.7 15.6 61.2 15.6 70.4 0 127.9-57.4 127.9-127.9C254.4 57.4 198.3 0 127.9 0z"/><path fill="#FFF" d="M190.8 151.3c-2.9 8.3-14.2 15.7-22.2 16.6-5.9.7-13.6.9-39.4-8.2-33.1-11.7-54.5-45.5-56.1-47.6-1.6-2.1-13.4-17.9-13.4-34.2 0-16.3 8.5-24.3 11.5-27.6 2.9-3.3 6.3-4.1 8.4-4.1 2.1 0 4.2.02 6.1.11 2 .09 4.6-.75 7.2 5.5 2.6 6.2 8.9 21.5 9.7 23.1.8 1.6 1.3 3.5.2 5.6-1.1 2.1-1.7 3.4-3.4 5.2-1.7 1.8-3.4 4.1-4.9 5.5-1.6 1.6-3.3 3.3-1.4 6.4 1.9 3.1 8.6 14.2 18.5 23 12.7 11.3 23.4 14.8 26.5 16.4 3.1 1.6 4.9 1.4 6.8-.8 1.9-2.1 7.8-9.1 9.9-12.2 2.1-3.1 4.2-2.6 7.1-1.6 2.9 1 18.5 8.7 21.7 10.3 3.2 1.6 5.3 2.4 6.1 3.7.8 1.3.8 7.4-2.1 15.7z"/></svg> WhatsApp</a><a href={`mailto:${COMPANY.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-white font-medium transition"><Mail className="w-5 h-5" /> Email</a></div>
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
