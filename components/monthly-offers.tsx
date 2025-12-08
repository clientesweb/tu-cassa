"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

const traditionallHouses = [
  {
    id: 1,
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 1",
    image: "/images/vivienda-tradicional-1.jpg",
    offerPrice: "$12.580.000",
    originalPrice: "$13.580.000",
    bedrooms: "2 dormitorios",
    area: "36 m² más 15 m² de galería",
    description: "Amplia vivienda de 2 dormitorios, con cocina comedor, baño, porche y alero.",
    isSpecialOffer: true,
  },
  {
    id: 2,
    type: "Tradicional",
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
    type: "Tradicional",
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
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 4",
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
    type: "Tradicional",
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
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 6",
    image: "/images/vivienda-tradicional-6.jpg",
    offerPrice: "$21.250.000",
    bedrooms: "4 dormitorios",
    area: "105 m² cubiertos",
    description: "Amplia vivienda de cuatro dormitorios, con dos baños, cocina, gran living comedor, alero y porche.",
  },
  {
    id: 7,
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 7",
    image: "/images/vivienda-tradicional-7.jpg",
    offerPrice: "$13.850.000",
    bedrooms: "3 dormitorios",
    area: "57 m² más 11 m² de galería",
    description: "Casa de 3 dormitorios y un baño, una amplia cocina comedor y galería.",
    isPopular: true,
  },
  {
    id: 8,
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 8",
    image: "/images/vivienda-tradicional-8.jpg",
    offerPrice: "$16.880.000",
    bedrooms: "3 dormitorios",
    area: "59 m² más 19 m² de galería",
    description: "Casa de 3 dormitorios y un baño, cocina comedor y amplia galería o cochera.",
    isSpecialOffer: true,
  },
  {
    id: 9,
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 9",
    image: "/images/vivienda-tradicional-9.jpg",
    offerPrice: "$16.780.000",
    bedrooms: "3 dormitorios",
    area: "72 m² más 20m² de galería",
    description: "Casa de 3 dormitorios y un baño, estar comedor, cocina, y amplia galería o cochera.",
    isPopular: true,
  },
]

export function MonthlyOffers() {
  const [viviendaType, setViviendaType] = useState<"minimalista" | "tradicional">("tradicional")

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/christmas-background.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f75858] mb-4">
            Nuestras Viviendas Tradicionales
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Descubrí todas nuestras opciones de viviendas prefabricadas tradicionales
          </p>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {traditionallHouses.map((house) => (
            <Card key={house.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={house.image || "/placeholder.svg"}
                  alt={house.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#f75858] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2">
                  {house.isPopular && <span>⭐</span>}
                  {house.type}
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif text-gray-900 mb-3 sm:mb-4">{house.title}</h3>

                {/* Pricing */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#f75858]">{house.offerPrice}</span>
                    {house.originalPrice && (
                      <span className="text-base sm:text-lg text-gray-500 line-through">{house.originalPrice}</span>
                    )}
                  </div>
                  {house.originalPrice && (
                    <div className="text-xs sm:text-sm text-green-600 font-medium">
                      ¡Ahorrás $
                      {(
                        Number.parseInt(house.originalPrice.replace(/[$.,]/g, "")) -
                        Number.parseInt(house.offerPrice.replace(/[$.,]/g, ""))
                      ).toLocaleString()}
                      !
                    </div>
                  )}
                </div>

                {/* Specifications */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="font-medium text-[#f75858] mr-2">•</span>
                    {house.bedrooms}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="font-medium text-[#f75858] mr-2">•</span>
                    {house.area}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{house.description}</p>

                <Button
                  asChild
                  className="w-full bg-[#f75858] hover:bg-[#f75858]/90 text-white font-medium py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Link href={`/viviendas-tradicionales/${house.id}`}>Ver Detalles</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Improved button with type selector */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="flex-1 bg-[#f75858] hover:bg-[#f75858]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
              >
                <Link href="/viviendas-tradicionales">
                  <span>Viviendas Tradicionales</span>
                </Link>
              </Button>
              <Button
                asChild
                className="flex-1 bg-[#f75858] hover:bg-[#f75858]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
              >
                <Link href="/viviendas-minimalistas">
                  <span>Viviendas Minimalistas</span>
                </Link>
              </Button>
            </div>
            <Button
              asChild
              className="w-full bg-[#f75858] hover:bg-[#f75858]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
            >
              <Link href="/viviendas-tradicionales">
                <span>Explora todas nuestras viviendas disponibles</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
