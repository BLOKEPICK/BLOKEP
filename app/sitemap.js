const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://ozunaconstructionllc.vercel.app'

export default function sitemap() {
  const routes = ['', '/services/roofing', '/services/siding', '/services/framing', '/services/remodeling'].map((path) => ({
    url: `${site}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  return routes
}
