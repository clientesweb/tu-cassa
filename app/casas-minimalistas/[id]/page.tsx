import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MinimalistHouseDetailClient } from "./minimalist-house-detail-client"

const minimalistHousesData = [
  {
    id: 1,
    title: "VIVIENDA MINIMALISTA 1",
    subtitle: "¡La más vendida!",
    image: "/images/vivienda-minimalista-1.jpg",
    floorPlan: "/images/plano-minimalista-1.jpg",
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
    floorPlan: "/images/plano-minimalista-2.jpg",
    offerPrice: "$17.880.000",
    bedrooms: "3 dormitorios",
    area: "84 m²",
    description: "Perfecta para familia amplia que busca confort y una casa hermosa para disfrutar de un hogar ideal.",
  },
  {
    id: 3,
    title: "VIVIENDA MINIMALISTA 3",
    image: "/images/vivienda-minimalista-3.jpg",
    floorPlan: "/images/plano-minimalista-3.jpg",
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
    floorPlan: "/images/plano-minimalista-4.jpg",
    offerPrice: "$25.750.000",
    bedrooms: "4 dormitorios",
    area: "105 m² cubiertos",
    description:
      "Amplia vivienda minimalista de 4 dormitorios con diseño contemporáneo, espacios generosos y acabados de primera calidad para familias que buscan elegancia y funcionalidad.",
    isPopular: true,
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const house = minimalistHousesData.find((h) => h.id === Number.parseInt(params.id))

  if (!house) {
    return {
      title: "Casa no encontrada | Tu Cassa Prefabricadas",
      description:
        "La casa que buscas no fue encontrada. Explora nuestro catálogo completo de casas minimalistas prefabricadas en Córdoba, Argentina.",
    }
  }

  const seoDescription = `${house.description} Casa minimalista prefabricada de ${house.bedrooms} y ${house.area}. Precio desde ${house.offerPrice}. Diseño moderno, líneas limpias, financiación disponible. Tu Cassa Prefabricadas - Córdoba, Argentina.`

  const keywords = [
    "casa minimalista prefabricada",
    "vivienda minimalista",
    house.bedrooms,
    "Tu Cassa",
    "Córdoba Argentina",
    "financiación",
    "diseño moderno",
    "construcción modular",
    "vivienda económica",
    "arquitectura minimalista",
  ].join(", ")

  return {
    title: `${house.title} - ${house.bedrooms} | Tu Cassa Prefabricadas Córdoba`,
    description: seoDescription,
    keywords,
    authors: [{ name: "Tu Cassa Prefabricadas" }],
    creator: "Tu Cassa Prefabricadas",
    publisher: "Tu Cassa Prefabricadas",
    openGraph: {
      title: `${house.title} - Casa Minimalista Prefabricada ${house.bedrooms} | Tu Cassa`,
      description: `${house.description} ${house.area}. Desde ${house.offerPrice}. Financiación disponible.`,
      images: [
        {
          url: house.image,
          width: 1200,
          height: 630,
          alt: `Foto de ${house.title} - Tu Cassa Prefabricadas`,
        },
      ],
      locale: "es_AR",
      type: "website",
      siteName: "Tu Cassa Prefabricadas",
    },
    twitter: {
      card: "summary_large_image",
      title: `${house.title} - Casa Minimalista Prefabricada | Tu Cassa`,
      description: `${house.description} ${house.area}. Desde ${house.offerPrice}.`,
      images: [house.image],
      creator: "@tucassa",
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
    alternates: {
      canonical: `https://tucassa.com/casas-minimalistas/${house.id}`,
    },
  }
}

export default function MinimalistHouseDetailPage({ params }: { params: { id: string } }) {
  const house = minimalistHousesData.find((h) => h.id === Number.parseInt(params.id))

  if (!house) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />
      <MinimalistHouseDetailClient house={house} />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
