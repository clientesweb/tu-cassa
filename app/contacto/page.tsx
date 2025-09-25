import type { Metadata } from "next"
import { ContactClientPage } from "./contact-client-page"

export const metadata: Metadata = {
  title: "Contacto - Tu Cassa Prefabricadas | Asesoramiento Personalizado",
  description:
    "Contacta con Tu Cassa Prefabricadas para recibir asesoramiento personalizado sobre casas prefabricadas. Oficina en Córdoba, Argentina. Financiación disponible y recibimos tu usado.",
  keywords: [
    "contacto tu cassa",
    "casas prefabricadas córdoba",
    "asesoramiento viviendas",
    "oficina comercial córdoba",
    "financiación casas",
    "consulta casas prefabricadas",
    "alberto conte",
    "florencia conte",
    "viviendas argentina",
    "construcción en seco",
    "casas económicas",
    "presupuesto casas",
  ],
  authors: [{ name: "Tu Cassa Prefabricadas" }],
  creator: "Tu Cassa Prefabricadas",
  publisher: "Tu Cassa Prefabricadas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tucassa.com.ar"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto - Tu Cassa Prefabricadas | Asesoramiento Personalizado",
    description:
      "Contacta con Tu Cassa Prefabricadas para recibir asesoramiento personalizado sobre casas prefabricadas. Oficina en Córdoba, Argentina. Financiación disponible.",
    url: "https://www.tucassa.com.ar/contacto",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/og-image-contacto-tu-cassa.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Tu Cassa Prefabricadas - Asesoramiento personalizado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Tu Cassa Prefabricadas | Asesoramiento Personalizado",
    description:
      "Contacta con Tu Cassa Prefabricadas para recibir asesoramiento personalizado sobre casas prefabricadas. Oficina en Córdoba, Argentina.",
    images: ["/images/og-image-contacto-tu-cassa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
