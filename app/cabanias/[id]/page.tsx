import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CabinDetailClient } from "./cabin-detail-client"

const cabinsData = [
  {
    id: 1,
    title: "CABAÑA 1",
    subtitle: "¡La más elegida!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caba%C3%B1a-1-tu-cassa-oferta.jpg-Fs7NF7dRCLeQOQLYpmCRdV8kDeAJv7.jpeg",
    renderImage: "/images/cabania-3-render.jpg",
    floorPlan: "/images/plano-cabania-1.jpg",
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
    renderImage: "/images/cabania-3-render.jpg",
    floorPlan: "/images/plano-cabania-2.jpg",
    offerPrice: "$14.880.000",
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
    renderImage: "/images/cabania-3-render.jpg",
    floorPlan: "/images/plano-cabania-3.jpg",
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
    renderImage: "/images/cabania-3-render.jpg",
    floorPlan: "/images/plano-cabania-4.jpg",
    offerPrice: "$17.860.000",
    bedrooms: "3 dormitorios",
    area: "70 m² más 25 m² de galería",
    description:
      "Amplia cabaña tres dormitorios, con cómoda cocina, baño, alero y galería lateral que se puede usar de cochera o quincho.",
    isPopular: true,
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const cabin = cabinsData.find((c) => c.id === Number.parseInt(params.id))

  if (!cabin) {
    return {
      title: "Cabaña no encontrada | Tu Cassa Prefabricadas",
      description:
        "La cabaña que buscas no fue encontrada. Explora nuestro catálogo completo de cabañas prefabricadas en Córdoba, Argentina.",
    }
  }

  const seoDescription = `${cabin.description} Cabaña prefabricada de ${cabin.bedrooms} y ${cabin.area}. Precio desde ${cabin.offerPrice}. Revestimiento en madera de eucalipto, aislación térmica, financiación disponible. Tu Cassa Prefabricadas - Córdoba, Argentina.`

  const keywords = [
    "cabaña prefabricada",
    "casa prefabricada",
    cabin.bedrooms,
    "Tu Cassa",
    "Córdoba Argentina",
    "financiación",
    "madera eucalipto",
    "construcción modular",
    "vivienda económica",
    "complejo turístico",
  ].join(", ")

  return {
    title: `${cabin.title} - ${cabin.bedrooms} | Tu Cassa Prefabricadas Córdoba`,
    description: seoDescription,
    keywords,
    authors: [{ name: "Tu Cassa Prefabricadas" }],
    creator: "Tu Cassa Prefabricadas",
    publisher: "Tu Cassa Prefabricadas",
    openGraph: {
      title: `${cabin.title} - Cabaña Prefabricada ${cabin.bedrooms} | Tu Cassa`,
      description: `${cabin.description} ${cabin.area}. Desde ${cabin.offerPrice}. Financiación disponible.`,
      images: [
        {
          url: cabin.image,
          width: 1200,
          height: 630,
          alt: `Foto de ${cabin.title} - Tu Cassa Prefabricadas`,
        },
      ],
      locale: "es_AR",
      type: "website",
      siteName: "Tu Cassa Prefabricadas",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cabin.title} - Cabaña Prefabricada | Tu Cassa`,
      description: `${cabin.description} ${cabin.area}. Desde ${cabin.offerPrice}.`,
      images: [cabin.image],
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
      canonical: `https://tucassa.com/cabanias/${cabin.id}`,
    },
  }
}

export default function CabinDetailPage({ params }: { params: { id: string } }) {
  const cabin = cabinsData.find((c) => c.id === Number.parseInt(params.id))

  if (!cabin) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <Header />
      <CabinDetailClient cabin={cabin} />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
