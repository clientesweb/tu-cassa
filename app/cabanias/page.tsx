import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Cabañas Prefabricadas Tu Cassa | Diseños Únicos para Complejos Turísticos",
  description:
    "Descubre nuestras cabañas prefabricadas de alta calidad. Modelos de 2 y 3 dormitorios desde $13.400.000. Descuentos especiales para complejos turísticos a partir de 3 cabañas. Financiación disponible.",
  keywords: [
    "cabañas prefabricadas",
    "cabañas de madera",
    "complejos turísticos",
    "cabañas córdoba",
    "viviendas prefabricadas",
    "cabañas argentina",
    "construcción en seco",
    "cabañas económicas",
    "refugios de montaña",
    "turismo rural",
    "cabañas para alquilar",
    "inversión turística",
  ],
  authors: [{ name: "Tu Cassa Prefabricadas" }],
  creator: "Tu Cassa Prefabricadas",
  publisher: "Tu Cassa Prefabricadas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tu-cassa.vercel.app"),
  alternates: {
    canonical: "/cabanias",
  },
  openGraph: {
    title: "Cabañas Prefabricadas Tu Cassa | Diseños Únicos para Complejos Turísticos",
    description:
      "Descubre nuestras cabañas prefabricadas de alta calidad. Modelos de 2 y 3 dormitorios desde $13.400.000. Descuentos especiales para complejos turísticos a partir de 3 cabañas.",
    url: "/cabanias",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/og-image-cabanias.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas Tu Cassa - Financiación y recibimos tu usado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas Prefabricadas Tu Cassa | Diseños Únicos para Complejos Turísticos",
    description:
      "Descubre nuestras cabañas prefabricadas de alta calidad. Modelos de 2 y 3 dormitorios desde $13.400.000. Descuentos especiales para complejos turísticos.",
    images: ["/images/og-image-cabanias.jpg"],
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
    google: "google-site-verification-code", // Replace with actual verification code
  },
}

const cabins = [
  {
    id: 1,
    title: "CABAÑA 1",
    subtitle: "¡La más elegida!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caba%C3%B1a-1-tu-cassa-oferta.jpg-Fs7NF7dRCLeQOQLYpmCRdV8kDeAJv7.jpeg",
    offerPrice: "$13.400.000",
    originalPrice: "$14.400.000",
    savings: "$1.000.000",
    bedrooms: "2 dormitorios",
    area: "30 m² más 15 m² de galería",
    description:
      "Esta cabaña consta de 2 dormitorios, baño, cocina, porche y galería lateral que puede usarse como quincho o como cochera.",
    isPopular: true,
  },
  {
    id: 2,
    title: "CABAÑA 2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabania-2-tu-cassa.jpg-gycgvoQ87J7iFIaQ4mwpNTT7Yu5Gd2.jpeg",
    offerPrice: "$14.180.000",
    bedrooms: "2 dormitorios",
    area: "42 m² más 15 m² de galería",
    description:
      "Hermosa cabaña de dos dormitorios grandes, con una cómoda cocina comedor, baño, porche y galería lateral que puede usarse también como quincho o cochera.",
  },
  {
    id: 3,
    title: "CABAÑA 3",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabania-3-tu-cassa.jpg-TvN3GAbxzgDdrFMKiS3kKLgx8mFvGd.jpeg",
    offerPrice: "$15.850.000",
    bedrooms: "3 dormitorios",
    area: "52 m² más 18 m² de galería",
    description:
      "Cómoda cabaña de tres dormitorios, con cocina, baño, alero y galería lateral que se puede usar de cochera o quincho.",
  },
  {
    id: 4,
    title: "CABAÑA 4",
    subtitle: "¡La más elegida! Ideal complejos turísticos",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabania-4-tu-cassa.jpg-HPFGVSH2DDSJrH11zNUkGiTj9ohMLg.jpeg",
    offerPrice: "$17.160.000",
    bedrooms: "3 dormitorios",
    area: "70 m² más 25 m² de galería",
    description:
      "Amplia cabaña tres dormitorios, con cómoda cocina, baño, alero y galería lateral que se puede usar de cochera o quincho.",
    isPopular: true,
  },
]

export default function CabaniasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabania-4-tu-cassa.jpg-HPFGVSH2DDSJrH11zNUkGiTj9ohMLg.jpeg"
          alt="Cabañas Tu Cassa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Cabañas <span className="text-[#ff6b6b]">Tu Cassa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-balance">Diseños únicos para tu refugio perfecto</p>
            <div className="bg-[#ff6b6b]/90 rounded-lg px-6 py-3 inline-block">
              <p className="text-lg md:text-xl font-bold text-white">
                Descuentos especiales a partir de 3 cabañas para complejos turísticos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabins Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f75858] mb-4">Nuestros Modelos</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Elegí entre nuestros diseños más populares, cada uno pensado para brindarte comodidad y funcionalidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {cabins.map((cabin) => (
              <Card key={cabin.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={cabin.image || "/placeholder.svg"}
                      alt={cabin.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {cabin.isPopular && (
                      <Badge className="absolute top-4 left-4 bg-[#f75858] text-white px-3 py-1 text-sm font-medium">
                        ¡La más elegida!
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2">{cabin.title}</h3>
                    {cabin.subtitle && (
                      <p className="text-[#f75858] font-medium text-sm sm:text-base">{cabin.subtitle}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-[#f75858]">
                        Precio oferta {cabin.offerPrice}
                      </span>
                      {cabin.originalPrice && (
                        <span className="text-lg sm:text-xl text-gray-500 line-through">{cabin.originalPrice}</span>
                      )}
                    </div>
                    {cabin.savings && (
                      <div className="text-sm sm:text-base text-green-600 font-medium">¡Ahorrás {cabin.savings}!</div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {cabin.bedrooms}
                    </div>
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {cabin.area}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">{cabin.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-[#f75858] hover:bg-[#f75858]/90 text-white font-medium py-3 text-base"
                      asChild
                    >
                      <a href={`/cabanias/${cabin.id}`}>Ver detalles</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#f75858] text-[#f75858] hover:bg-[#f75858] hover:text-white py-3 text-base bg-transparent"
                      asChild
                    >
                      <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                        Contactar ahora
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4">
                ¿Necesitás un diseño personalizado?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Ofrecemos descuentos especiales para complejos turísticos a partir de 3 cabañas. Contactanos para una
                cotización personalizada.
              </p>
              <Button size="lg" className="bg-[#f75858] hover:bg-[#f75858]/90 text-white px-8 py-4 text-lg" asChild>
                <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                  Solicitar Cotización Personalizada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
