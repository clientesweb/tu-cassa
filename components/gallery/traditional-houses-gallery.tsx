"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const deliveredHouses = [
  {
    id: 1,
    image: "/images/vivienda-tradicional-entregada-1.jpg",
    alt: "Vivienda Tradicional Entregada 1",
    title: "Vivienda Tradicional - Córdoba",
  },
  {
    id: 2,
    image: "/images/vivienda-tradicional-entregada-2.jpg",
    alt: "Vivienda Tradicional Entregada 2",
    title: "Vivienda Tradicional - Santa Fe",
  },
  {
    id: 3,
    image: "/images/vivienda-tradicional-entregada-3.jpg",
    alt: "Vivienda Tradicional Entregada 3",
    title: "Vivienda Tradicional - Córdoba",
  },
  {
    id: 4,
    image: "/images/vivienda-tradicional-entregada-4.jpg",
    alt: "Vivienda Tradicional Entregada 4",
    title: "Vivienda Tradicional - Mendoza",
  },
  {
    id: 5,
    image: "/images/vivienda-tradicional-entregada-5.jpg",
    alt: "Vivienda Tradicional Entregada 5",
    title: "Vivienda Tradicional - Córdoba",
  },
  {
    id: 6,
    image: "/images/vivienda-tradicional-entregada-6.jpg",
    alt: "Vivienda Tradicional Entregada 6",
    title: "Vivienda Tradicional - Rosario",
  },
]

export function TraditionalHousesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const selectedHouse = deliveredHouses.find((house) => house.id === selectedImage)

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 text-center">
            Viviendas Tradicionales Entregadas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Conocé algunas de nuestras viviendas tradicionales ya entregadas a familias de todo el país.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveredHouses.map((house) => (
              <Card key={house.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-64 group" onClick={() => openModal(house.id)}>
                    <Image
                      src={house.image || "/placeholder.svg"}
                      alt={house.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-900 hover:bg-white"
                      >
                        Ver imagen completa
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900">{house.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage && selectedHouse && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative w-full h-[70vh] bg-white rounded-lg overflow-hidden">
              <Image
                src={selectedHouse.image || "/placeholder.svg"}
                alt={selectedHouse.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-medium">{selectedHouse.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
