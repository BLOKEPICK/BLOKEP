export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceMap: Record<string, { title: string; items: string[] }> = {
    framing: { title: "Framing", items: ["Wood & metal framing","Load-bearing walls","Additions & garages","Code compliance"] },
    roofing: { title: "Roofing", items: ["Asphalt shingles","Metal roofing","Flat roof membranes","Emergency repairs"] },
    siding: { title: "Siding", items: ["Vinyl siding","Fiber cement","Wood siding","Trim & soffit"] },
    carpentry: { title: "Carpentry", items: ["Decks & railings","Interior trim & doors","Custom woodwork","Repairs"] },
    remodeling: { title: "Remodeling", items: ["Kitchens","Bathrooms","Basements","Open-concept"] },
  };
  const s = serviceMap[params.slug];
  if (!s) return <main className="p-10">Service not found</main>;
  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold">{s.title}</h1>
          <p className="mt-3 text-slate-200">Expert {s.title.toLowerCase()} services in Columbus, OH.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 grid gap-4">
          {s.items.map((it, i) => (<div key={i} className="rounded-xl border border-slate-200 p-6">{it}</div>))}
        </div>
      </section>
    </main>
  );
}
