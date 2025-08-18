import React from "react";

export default function Process() {
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
