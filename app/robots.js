export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://tu-cassa.com/sitemap.xml",
  }
}
