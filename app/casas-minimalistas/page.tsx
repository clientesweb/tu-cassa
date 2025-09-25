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
  title: "Casas Minimalistas Prefabricadas Tu Cassa | Diseños Modernos y Elegantes",
  description:
    "Descubre nuestras casas minimalistas prefabricadas de alta calidad. Modelos de 3 y 4 dormitorios desde $15.080.000. Diseños modernos con líneas limpias y espacios funcionales. Financiación disponible.",
  keywords: [
    "casas minimalistas",
    "viviendas minimalistas",
    "casas prefabricadas modernas",
    "casas córdoba",
    "viviendas prefabricadas",
    "casas argentina",
    "construcción en seco",
    "casas económicas",
    "viviendas modernas",
    "casas minimalistas argentina",
    "diseño minimalista",
    "arquitectura moderna",
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
    canonical: "/casas-minimalistas",
  },
  openGraph: {
    title: "Casas Minimalistas Prefabricadas Tu Cassa | Diseños Modernos y Elegantes",
    description:
      "Descubre nuestras casas minimalistas prefabricadas de alta calidad. Modelos de 3 y 4 dormitorios desde $15.080.000. Diseños modernos con líneas limpias y espacios funcionales.",
    url: "/casas-minimalistas",
    siteName: "Tu Cassa Prefabricadas",
    images: [
      {
        url: "/images/vivienda-minimalista-4.jpg",
        width: 1200,
        height: 630,
        alt: "Casas Minimalistas Tu Cassa - Financiación y recibimos tu usado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casas Minimalistas Prefabricadas Tu Cassa | Diseños Modernos y Elegantes",
    description:
      "Descubre nuestras casas minimalistas prefabricadas de alta calidad. Modelos de 3 y 4 dormitorios desde $15.080.000. Diseños modernos con líneas limpias.",
    images: ["/images/vivienda-minimalista-4.jpg"],
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

const minimalistas = [
  {
    id: 1,
    title: "VIVIENDA MINIMALISTA 1",
    subtitle: "¡La más vendida!",
    image: "/images/vivienda-minimalista-1.jpg",
    offerPrice: "$15.880.000",
    originalPrice: "$16.880.000",
    savings: "$1.000.000",
    bedrooms: "3 dormitorios",
    area: "105 mts",
    description: "Moderna vivienda con 3 dormitorios ideal para familias amplias que buscan su casa perfecta.",
    isPopular: true,
  },
  {
    id: 2,
    title: "VIVIENDA MINIMALISTA 2",
    image: "/images/vivienda-minimalista-2.jpg",
    offerPrice: "$17.880.000",
    bedrooms: "3 dormitorios",
    area: "84 m²",
    description: "Perfecta para familia amplia que busca confort y una casa hermosa para disfrutar de un hogar ideal.",
  },
  {
    id: 3,
    title: "VIVIENDA MINIMALISTA 3",
    image: "/images/vivienda-minimalista-3.jpg",
    offerPrice: "$15.080.000",
    bedrooms: "3 dormitorios",
    area: "84 m²",
    description:
      "Diseño minimalista elegante con espacios funcionales y líneas limpias, perfecta para familias modernas que valoran la simplicidad y el confort.",
  },
  {
    id: 4,
    title: "VIVIENDA MINIMALISTA 4",
    subtitle: "¡La más elegida!",
    image: "/images/vivienda-minimalista-4.jpg",
    offerPrice: "$25.750.000",
    bedrooms: "4 dormitorios",
    area: "105 m² cubiertos",
    description:
      "Amplia vivienda minimalista de 4 dormitorios con diseño contemporáneo, espacios generosos y acabados de primera calidad para familias que buscan elegancia y funcionalidad.",
    isPopular: true,
  },
]

export default function CasasMinimalistasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/vivienda-minimalista-4.jpg"
          alt="Casas Minimalistas Tu Cassa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Casas <span className="text-[#ff6b6b]">Minimalistas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-balance">Diseños modernos con líneas limpias y elegantes</p>
            <div className="bg-[#ff6b6b]/90 rounded-lg px-6 py-3 inline-block">
              <p className="text-lg md:text-xl font-bold text-white">
                Espacios funcionales y arquitectura contemporánea
              </p>
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
              Elegí entre nuestros diseños minimalistas, cada uno pensado para brindarte modernidad y funcionalidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {minimalistas.map((casa) => (
              <Card key={casa.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={casa.image || "/placeholder.svg"}
                      alt={casa.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {casa.isPopular && (
                      <Badge className="absolute top-4 left-4 bg-[#f75858] text-white px-3 py-1 text-sm font-medium">
                        {casa.id === 1 ? "¡La más vendida!" : "¡La más elegida!"}
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2">{casa.title}</h3>
                    {casa.subtitle && (
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
                      <a href={`/casas-minimalistas/${casa.id}`}>Ver detalles</a>
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
                Creamos diseños minimalistas únicos adaptados a tus necesidades. Contactanos para una cotización
                personalizada.
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
