import React from "react";

export default function TrustBar() {
  const items = ["Licensed & Insured","10+ Years Experience","Warranty on Labor","Local & Family-Owned"];
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((t) => (
          <div key={t} className="rounded-xl bg-white border border-slate-200 py-4 font-semibold text-slate-700">{t}</div>
        ))}
      </div>
    </section>
  );
}
