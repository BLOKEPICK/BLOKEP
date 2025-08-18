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
          <div className="mt-6 space-y-2 text-emerald-100">
            <p className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> <a className="underline" href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
            <p className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" /> <a className="underline" href={COMPANY.whatsappHref}>WhatsApp</a></p>
            <p className="inline-flex items-center gap-2"><Mail className="w-5 h-5" /> <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
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
