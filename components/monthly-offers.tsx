"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const offers = [
  {
    id: 1,
    type: "Cabaña",
    title: "CABAÑA 1",
    image: "/images/cabana-oferta.jpg",
    offerPrice: "$13.400.000",
    originalPrice: "$14.400.000",
    bedrooms: "2 dormitorios",
    area: "30 m² más 15 m² de galería",
    description:
      "Esta cabaña consta de 2 dormitorios, baño, cocina, porche y galería lateral que puede usarse como quincho o como cochera.",
  },
  {
    id: 2,
    type: "Tradicional",
    title: "VIVIENDA TRADICIONAL 1",
    image: "/images/tradicional-oferta.jpg",
    offerPrice: "$12.580.000",
    originalPrice: "$13.580.000",
    bedrooms: "2 dormitorios",
    area: "36 m² más 15 m² de galería",
    description: "Amplia vivienda de 2 dormitorios, con cocina comedor, baño, porche y alero.",
  },
  {
    id: 3,
    type: "Minimalista",
    title: "VIVIENDA MINIMALISTA 1",
    image: "/images/minimalista-oferta.jpg",
    offerPrice: "$15.880.000",
    originalPrice: "$16.880.000",
    bedrooms: "3 dormitorios",
    area: "105 mts",
    description: "Moderna vivienda con 3 dormitorios ideal para familias amplias que buscan su cassa perfecta.",
  },
]

export function MonthlyOffers() {
  const [exploreOpen, setExploreOpen] = useState(false)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f75858] mb-4">Ofertas del Mes</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Aprovechá estas increíbles ofertas en nuestras mejores tipologías de viviendas prefabricadas
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#f75858] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {offer.type}
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif text-gray-900 mb-3 sm:mb-4">{offer.title}</h3>

                {/* Pricing */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#f75858]">{offer.offerPrice}</span>
                    <span className="text-base sm:text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-green-600 font-medium">
                    ¡Ahorrás $
                    {(
                      Number.parseInt(offer.originalPrice.replace(/[$.,]/g, "")) -
                      Number.parseInt(offer.offerPrice.replace(/[$.,]/g, ""))
                    ).toLocaleString()}
                    !
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="font-medium text-[#f75858] mr-2">•</span>
                    {offer.bedrooms}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="font-medium text-[#f75858] mr-2">•</span>
                    {offer.area}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{offer.description}</p>

                <Button
                  asChild
                  className="w-full bg-[#f75858] hover:bg-[#f75858]/90 text-white font-medium py-2 sm:py-3 text-sm sm:text-base"
                >
                  <a
                    href={
                      offer.type === "Tradicional"
                        ? `/viviendas-tradicionales/1` // Always link to ID 1 for traditional houses
                        : offer.type === "Minimalista"
                          ? `/viviendas-minimalistas/1` // Always link to ID 1 for minimalist houses
                          : `/cabanias/${offer.id}`
                    }
                  >
                    Ver Detalles
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <Collapsible open={exploreOpen} onOpenChange={setExploreOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="border-[#f75858] text-[#f75858] hover:bg-[#f75858] hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent text-xs sm:text-sm md:text-base w-full min-h-[44px] transition-all duration-300 ease-in-out"
                >
                  <span className="text-center leading-tight">Explora todas nuestras viviendas disponibles</span>
                  <ChevronDown
                    className={`ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-in-out flex-shrink-0 ${exploreOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-300">
                <a
                  href="/viviendas-tradicionales"
                  className="block py-2 sm:py-3 px-3 sm:px-4 text-gray-700 hover:text-[#f75858] hover:bg-gray-50 rounded-md transition-colors duration-200 text-xs sm:text-sm md:text-base"
                >
                  Tradicionales
                </a>
                <a
                  href="/viviendas-minimalistas"
                  className="block py-2 sm:py-3 px-3 sm:px-4 text-gray-700 hover:text-[#f75858] hover:bg-gray-50 rounded-md transition-colors duration-200 text-xs sm:text-sm md:text-base"
                >
                  Minimalistas
                </a>
                <a
                  href="/cabanias"
                  className="block py-2 sm:py-3 px-3 sm:px-4 text-gray-700 hover:text-[#f75858] hover:bg-gray-50 rounded-md transition-colors duration-200 text-xs sm:text-sm md:text-base"
                >
                  Cabañas
                </a>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}
