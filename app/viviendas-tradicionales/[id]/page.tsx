import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TraditionalHouseDetailClient } from "./traditional-house-detail-client"

const traditionalHousesData = [
  {
    id: 1,
    title: "VIVIENDA TRADICIONAL 1",
    subtitle: "Oferta especial",
    image: "/images/vivienda-tradicional-1.jpg",
    floorPlan: "/images/plano-vivienda-tradiciona-1.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-2.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-3.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-4.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-5.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-6.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-7.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-8.jpg",
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
    floorPlan: "/images/plano-vivienda-tradiciona-9.jpg",
    offerPrice: "$16.780.000",
    bedrooms: "3 dormitorios",
    area: "72 m² más 20m² de galería",
    description: "Casa de 3 dormitorios y un baño, estar comedor, cocina, y amplia galería o cochera.",
    isPopular: true,
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const house = traditionalHousesData.find((h) => h.id === Number.parseInt(params.id))

  if (!house) {
    return {
      title: "Casa no encontrada | Tu Cassa Prefabricadas",
      description:
        "La casa que buscas no fue encontrada. Explora nuestro catálogo completo de casas tradicionales prefabricadas en Córdoba, Argentina.",
    }
  }

  const seoDescription = `${house.description} Casa tradicional prefabricada de ${house.bedrooms} y ${house.area}. Precio desde ${house.offerPrice}. Diseño clásico, espacios amplios, financiación disponible. Tu Cassa Prefabricadas - Córdoba, Argentina.`

  const keywords = [
    "casa tradicional prefabricada",
    "vivienda tradicional",
    house.bedrooms,
    "Tu Cassa",
    "Córdoba Argentina",
    "financiación",
    "diseño clásico",
    "construcción modular",
    "vivienda económica",
    "arquitectura tradicional",
  ].join(", ")

  return {
    title: `${house.title} - ${house.bedrooms} | Tu Cassa Prefabricadas Córdoba`,
    description: seoDescription,
    keywords,
    authors: [{ name: "Tu Cassa Prefabricadas" }],
    creator: "Tu Cassa Prefabricadas",
    publisher: "Tu Cassa Prefabricadas",
    openGraph: {
      title: `${house.title} - Casa Tradicional Prefabricada ${house.bedrooms} | Tu Cassa`,
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
      title: `${house.title} - Casa Tradicional Prefabricada | Tu Cassa`,
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
      canonical: `https://tucassa.com/viviendas-tradicionales/${house.id}`,
    },
  }
}

export default function TraditionalHouseDetailPage({ params }: { params: { id: string } }) {
  const house = traditionalHousesData.find((h) => h.id === Number.parseInt(params.id))

  if (!house) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />
      <TraditionalHouseDetailClient house={house} />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
