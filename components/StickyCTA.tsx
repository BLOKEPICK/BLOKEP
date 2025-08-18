import React from "react";
import { COMPANY } from "./constants";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <a href={COMPANY.whatsappHref} className="rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-lg px-4 py-3">WhatsApp</a>
      <a href={COMPANY.phoneHref} className="rounded-full bg-slate-900 text-white font-semibold shadow-lg px-4 py-3">Call {COMPANY.phone}</a>
    </div>
  );
}
