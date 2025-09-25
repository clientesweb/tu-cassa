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
  title: "Casas Tradicionales Prefabricadas Tu Cassa | Diseños Clásicos y Funcionales",
  description:
    "Descubre nuestras casas tradicionales prefabricadas de alta calidad. Modelos de 2, 3 y 4 dormitorios desde $12.580.000. Diseños clásicos con espacios amplios y funcionales. Financiación disponible.",
  keywords: [
    "casas tradicionales",
    "viviendas tradicionales",
    "casas prefabricadas clásicas",
    "casas córdoba",
    "viviendas prefabricadas",
    "casas argentina",
    "construcción en seco",
    "casas económicas",
    "viviendas familiares",
    "casas tradicionales argentina",
    "diseño clásico",
    "arquitectura tradicional",
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
    canonical: "/viviendas-tradicionales",
  },
  openGraph: {
    title: "Casas Tradicionales Prefabricadas Tu Cassa | Diseños Clásicos y Funcionales",
    description:
      "Descubre nuestras casas tradicionales prefabricadas de alta calidad. Modelos de 2, 3 y 4 dormitorios desde $12.580.000. Diseños clásicos con espacios amplios y funcionales.",
    url: "https://www.tucassa.com.ar/viviendas-tradicionales",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/vivienda-tradicional-4.jpg",
        width: 1200,
        height: 630,
        alt: "Casas Tradicionales Tu Cassa - Financiación y recibimos tu usado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casas Tradicionales Prefabricadas Tu Cassa | Diseños Clásicos y Funcionales",
    description:
      "Descubre nuestras casas tradicionales prefabricadas de alta calidad. Modelos de 2, 3 y 4 dormitorios desde $12.580.000. Diseños clásicos.",
    images: ["/images/vivienda-tradicional-4.jpg"],
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

const tradicionales = [
  {
    id: 1,
    title: "VIVIENDA TRADICIONAL 1",
    subtitle: "Oferta especial",
    image: "/images/vivienda-tradicional-1.jpg",
    offerPrice: "$12.580.000",
    originalPrice: "$13.580.000",
    savings: "$1.000.000",
    bedrooms: "2 dormitorios",
    area: "36 m² más 15 m² de galería",
    description: "Amplia vivienda de 2 dormitorios, con cocina comedor, baño, porche y alero.",
    isSpecialOffer: true,
  },
  {
    id: 2,
    title: "VIVIENDA TRADICIONAL 2",
    image: "/images/vivienda-tradicional-2.jpg",
    offerPrice: "$13.380.000",
    bedrooms: "2 dormitorios",
    area: "42 m² más 15 m² de galería",
    description:
      "Amplia vivienda de 2 dormitorios, con cocina comedor, baño, porche y galería que puede ser usada como cochera o quincho.",
  },
  {
    id: 3,
    title: "VIVIENDA TRADICIONAL 3",
    image: "/images/vivienda-tradicional-3.jpg",
    offerPrice: "$14.580.000",
    bedrooms: "3 dormitorios",
    area: "52 m² más 18 m² de galería",
    description:
      "Vivienda grande de tres dormitorios con cocina cómoda, baño, alero y galería lateral que se puede usar también como cochera o quincho.",
  },
  {
    id: 4,
    title: "VIVIENDA TRADICIONAL 4",
    subtitle: "¡la más vendida!",
    image: "/images/vivienda-tradicional-4.jpg",
    offerPrice: "$16.790.000",
    bedrooms: "3 dormitorios",
    area: "70 m² más 25 m² de galería",
    description:
      "Hermosa casa, muy cómoda, de tres dormitorios con amplia cocina comedor, baño y lavadero con salida a la galería.",
    isPopular: true,
  },
  {
    id: 5,
    title: "VIVIENDA TRADICIONAL 5",
    image: "/images/vivienda-tradicional-5.jpg",
    offerPrice: "$21.150.000",
    bedrooms: "4 dormitorios",
    area: "84 m² más 35 m² de galería",
    description:
      "Hermosa casa de cuatro dormitorios, con dos baños, una amplia cocina comedor, lavadero con salida al patio y alero frontal con puerta doble.",
  },
  {
    id: 6,
    title: "VIVIENDA TRADICIONAL 6",
    image: "/images/vivienda-tradicional-6.jpg",
    offerPrice: "$21.250.000",
    bedrooms: "4 dormitorios",
    area: "105 m² cubiertos",
    description: "Amplia vivienda de cuatro dormitorios, con dos baños, cocina, gran living comedor, alero y porche.",
  },
  {
    id: 7,
    title: "VIVIENDA TRADICIONAL 7",
    subtitle: "¡la más vendida!",
    image: "/images/vivienda-tradicional-7.jpg",
    offerPrice: "$13.850.000",
    bedrooms: "3 dormitorios",
    area: "57 m² más 11 m² de galería",
    description: "Casa de 3 dormitorios y un baño, una amplia cocina comedor y galería.",
    isPopular: true,
  },
  {
    id: 8,
    title: "VIVIENDA TRADICIONAL 8",
    subtitle: "¡OFERTA ESPECIAL!",
    image: "/images/vivienda-tradicional-8.jpg",
    offerPrice: "$16.880.000",
    bedrooms: "3 dormitorios",
    area: "59 m² más 19 m² de galería",
    description: "Casa de 3 dormitorios y un baño, cocina comedor y amplia galería o cochera.",
    isSpecialOffer: true,
  },
  {
    id: 9,
    title: "VIVIENDA TRADICIONAL 9",
    subtitle: "¡LA MAS ELEGIDA!",
    image: "/images/vivienda-tradicional-9.jpg",
    offerPrice: "$16.780.000",
    bedrooms: "3 dormitorios",
    area: "72 m² más 20m² de galería",
    description: "Casa de 3 dormitorios y un baño, estar comedor, cocina, y amplia galería o cochera.",
    isPopular: true,
  },
]

export default function CasasTradicionalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/vivienda-tradicional-4.jpg"
          alt="Casas Tradicionales Tu Cassa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Casas <span className="text-[#ff6b6b]">Tradicionales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-balance">Diseños clásicos con espacios amplios y funcionales</p>
            <div className="bg-[#ff6b6b]/90 rounded-lg px-6 py-3 inline-block">
              <p className="text-lg md:text-xl font-bold text-white">Comodidad familiar y arquitectura atemporal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Houses Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f75858] mb-4">Nuestros Modelos</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Elegí entre nuestros diseños tradicionales, cada uno pensado para brindarte comodidad y funcionalidad
              familiar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {tradicionales.map((casa) => (
              <Card key={casa.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={casa.image || "/placeholder.svg"}
                      alt={casa.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {(casa.isPopular || casa.isSpecialOffer) && (
                      <Badge className="absolute top-4 left-4 bg-[#f75858] text-white px-3 py-1 text-sm font-medium">
                        {casa.subtitle}
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2">{casa.title}</h3>
                    {casa.subtitle && !casa.isPopular && !casa.isSpecialOffer && (
                      <p className="text-[#f75858] font-medium text-sm sm:text-base">{casa.subtitle}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-[#f75858]">
                        Precio oferta {casa.offerPrice}
                      </span>
                      {casa.originalPrice && (
                        <span className="text-lg sm:text-xl text-gray-500 line-through">{casa.originalPrice}</span>
                      )}
                    </div>
                    {casa.savings && (
                      <div className="text-sm sm:text-base text-green-600 font-medium">¡Ahorrás {casa.savings}!</div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {casa.bedrooms}
                    </div>
                    <div className="flex items-center text-gray-700 text-base sm:text-lg">
                      <span className="font-medium text-[#f75858] mr-3">•</span>
                      {casa.area}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">{casa.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-[#f75858] hover:bg-[#f75858]/90 text-white font-medium py-3 text-base"
                      asChild
                    >
                      <a href={`/viviendas-tradicionales/${casa.id}`}>Ver detalles</a>
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
                Creamos diseños tradicionales únicos adaptados a tus necesidades. Contactanos para una cotización
                personalizada.
              </p>
              <Button
                size="lg"
                className="bg-[#f75858] hover:bg-[#f75858]/90 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                asChild
              >
                <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                  <span className="block sm:hidden">Cotización Personalizada</span>
                  <span className="hidden sm:block">Solicitar Cotización Personalizada</span>
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
