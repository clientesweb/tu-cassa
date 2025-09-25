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
  title: "Ofertas Especiales - Tu Cassa Prefabricadas | Descuentos y Promociones",
  description:
    "Aprovechá nuestras ofertas especiales en casas prefabricadas. Descuentos de hasta $1.000.000, financiación disponible y recibimos tu usado. Promociones limitadas en viviendas tradicionales, minimalistas y cabañas.",
  keywords: [
    "ofertas casas prefabricadas",
    "descuentos viviendas",
    "promociones tu cassa",
    "casas en oferta",
    "descuentos construcción",
    "ofertas especiales córdoba",
    "promociones viviendas argentina",
    "casas económicas",
    "descuentos cabañas",
    "ofertas limitadas",
    "financiación casas",
    "recibimos usado",
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
    canonical: "/ofertas",
  },
  openGraph: {
    title: "Ofertas Especiales - Tu Cassa Prefabricadas | Descuentos y Promociones",
    description:
      "Aprovechá nuestras ofertas especiales en casas prefabricadas. Descuentos de hasta $1.000.000, financiación disponible y recibimos tu usado.",
    url: "https://www.tucassa.com.ar/ofertas",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/cabania-entregada-3.jpg",
        width: 1200,
        height: 630,
        alt: "Ofertas Especiales Tu Cassa - Descuentos y promociones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofertas Especiales - Tu Cassa Prefabricadas | Descuentos y Promociones",
    description:
      "Aprovechá nuestras ofertas especiales en casas prefabricadas. Descuentos de hasta $1.000.000, financiación disponible.",
    images: ["/images/cabania-entregada-3.jpg"],
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

const specialOffers = [
  {
    id: 1,
    category: "Vivienda Tradicional",
    title: "VIVIENDA TRADICIONAL 1",
    subtitle: "¡OFERTA ESPECIAL!",
    image: "/images/vivienda-tradicional-1.jpg",
    offerPrice: "$12.580.000",
    originalPrice: "$13.580.000",
    savings: "$1.000.000",
    bedrooms: "2 dormitorios",
    area: "36 m² más 15 m² de galería",
    description: "Amplia vivienda de 2 dormitorios, con cocina comedor, baño, porche y alero.",
    link: "/viviendas-tradicionales/1",
    isSpecialOffer: true,
  },
  {
    id: 2,
    category: "Cabaña",
    title: "CABAÑA 1",
    subtitle: "¡LA MÁS ELEGIDA!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caba%C3%B1a-1-tu-cassa-oferta.jpg-Fs7NF7dRCLeQOQLYpmCRdV8kDeAJv7.jpeg",
    offerPrice: "$13.400.000",
    originalPrice: "$14.400.000",
    savings: "$1.000.000",
    bedrooms: "2 dormitorios",
    area: "30 m² más 15 m² de galería",
    description:
      "Esta cabaña consta de 2 dormitorios, baño, cocina, porche y galería lateral que puede usarse como quincho o como cochera.",
    link: "/cabanias/1",
    isPopular: true,
  },
  {
    id: 3,
    category: "Vivienda Minimalista",
    title: "VIVIENDA MINIMALISTA 1",
    subtitle: "¡LA MÁS VENDIDA!",
    image: "/images/vivienda-minimalista-1.jpg",
    offerPrice: "$15.880.000",
    originalPrice: "$16.880.000",
    savings: "$1.000.000",
    bedrooms: "3 dormitorios",
    area: "105 mts",
    description: "Moderna vivienda con 3 dormitorios ideal para familias amplias que buscan su casa perfecta.",
    link: "/viviendas-minimalistas/1",
    isPopular: true,
  },
]

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/cabania-entregada-3.jpg"
          alt="Ofertas Especiales Tu Cassa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Ofertas <span className="text-[#ff6b6b]">Especiales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-balance">
              Descuentos de hasta $1.000.000 en viviendas seleccionadas
            </p>
            <div className="bg-[#ff6b6b]/90 rounded-lg px-6 py-3 inline-block">
              <p className="text-lg md:text-xl font-bold text-white">¡Promociones por tiempo limitado!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f75858] mb-4">Ofertas Destacadas</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Aprovechá estas ofertas especiales con descuentos significativos en nuestros modelos más populares
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                      {offer.category}
                    </Badge>
                    {(offer.isPopular || offer.isSpecialOffer) && (
                      <Badge className="absolute top-4 right-4 bg-[#f75858] text-white px-3 py-1 text-sm font-medium">
                        {offer.subtitle}
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2">{offer.title}</h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-[#f75858]">{offer.offerPrice}</span>
                      {offer.originalPrice && (
                        <span className="text-lg sm:text-xl text-gray-500 line-through">{offer.originalPrice}</span>
                      )}
                    </div>
                    {offer.savings && (
                      <div className="text-sm sm:text-base text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full inline-block">
                        ¡Ahorrás {offer.savings}!
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {offer.bedrooms}
                    </div>
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {offer.area}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">{offer.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-[#f75858] hover:bg-[#f75858]/90 text-white font-medium py-3 text-base"
                      asChild
                    >
                      <a href={offer.link}>Ver detalles</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#f75858] text-[#f75858] hover:bg-[#f75858] hover:text-white py-3 text-base bg-transparent"
                      asChild
                    >
                      <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                        Consultar oferta
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-6 text-center">Beneficios Adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-[#f75858] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">💰</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Financiación Disponible</h4>
                  <p className="text-gray-600">Consultá nuestras opciones de financiación</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#f75858] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">🏠</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Recibimos tu Usado</h4>
                  <p className="text-gray-600">Aceptamos tu propiedad como parte de pago</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#f75858] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">⚡</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Entrega Rápida</h4>
                  <p className="text-gray-600">Construcción e instalación en tiempo récord</p>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-[#f75858] hover:bg-[#f75858]/90 text-white px-8 py-4 text-lg" asChild>
                  <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                    Consultá todas nuestras ofertas
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
