export default function robots() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://ozunaconstructionllc.vercel.app'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  }
}
