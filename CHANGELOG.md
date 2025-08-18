# Changelog — Ozuna Construction LLC (EN)

## 2025-08-18
- Refactor de headings: 1 H1 global en Hero; H2 por sección con `aria-labelledby` y anclas (`id`).
- TrustBar y Our Process con íconos (lucide-react), como tarjetas accesibles.
- Botón de WhatsApp en estilo outline gris; removidos duplicados en el footer.
- SEO base en `app/layout.jsx` con `metadata`, OG/Twitter y `metadataBase`.
- JSON-LD añadidos: Organization + LocalBusiness (layout), Service (cada `/services/[slug]`), y FAQ (Home).
- `app/sitemap.ts` y `app/robots.ts` automáticos (Next MetadataRoute).
- Web Vitals: `next/image` en hero/proyectos/servicios, `priority` en hero/logo, `sizes` definidos para evitar CLS, fuentes con `next/font` (Inter, display=swap y preconnect), `loading="lazy"` en grids.
- Accesibilidad: `aria-label` en CTAs/icon buttons, `focus-visible`, nombres accesibles, landmarks semánticos.
- Páginas `/services/[slug]` con contenido real y `generateMetadata`; `generateStaticParams`.
- FAQ con copy enfocado a roofing/siding/framing/remodeling y marcado FAQPage.
- GA4 (gtag): Script en layout y helper `lib/gtag.js`; eventos `cta_click` para tel/whatsapp/email en todos los CTAs.
- Placeholders en `/public` (og.png, hero, servicios, proyectos).
