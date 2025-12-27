import type React from "react"
import { Bree_Serif, Montserrat } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bree-serif",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "Tu Cassa - Casas Prefabricadas | Más de 17 años construyendo hogares ideales",
  description:
    "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia. Construcción rápida, calidad garantizada y precios competitivos. ¡Consultanos!",
  keywords:
    "casas prefabricadas, construcción modular, viviendas prefabricadas, casas tradicionales, casas minimalistas, construcción rápida, Tu Cassa, prefabricadas Argentina, casas económicas, construcción sustentable",
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
    canonical: "/",
    languages: {
      "es-AR": "/es-AR",
      es: "/es",
    },
  },
  openGraph: {
    title: "Tu Cassa - Casas Prefabricadas | Más de 17 años construyendo hogares ideales",
    description:
      "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia. Construcción rápida, calidad garantizada y precios competitivos.",
    url: "https://www.tucassa.com.ar",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/og-image-inicio.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Cassa - Casas Prefabricadas - Nuestra trayectoria nos avala",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Cassa - Casas Prefabricadas | Más de 17 años construyendo hogares ideales",
    description: "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia.",
    images: ["/images/og-image-inicio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-site-verification-code-here",
  },
  category: "construction",
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ef4444",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${breeSerif.variable} ${montserrat.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
