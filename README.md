# D‑Essence Wellness – Landing (Next.js + Tailwind)

Landing page lista para desplegar en **Vercel** con App Router, Tailwind y Framer Motion.

## Uso rápido

```bash
# 1) Instalar deps
npm install

# 2) Desarrollo
npm run dev

# 3) Build y producción local
npm run build
npm start
```

## Deploy en Vercel
1. Crea un repositorio (GitHub/GitLab/Bitbucket).
2. Sube estos archivos.
3. Entra a Vercel, **New Project** → importa el repo → Deploy.
4. No requiere variables de entorno para iniciar.

## Personalizar contenido
- Edita `app/page.tsx` para textos y secciones.
- Colores de marca están en `tailwind.config.ts` (`brand.*`) y clases utilitarias.
- Estilos globales en `styles/globals.css`.

## Fuentes
Incluye `Rubik` y `Roboto` vía `next/font` en `app/layout.tsx`.
