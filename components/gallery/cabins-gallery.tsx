"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const deliveredCabins = [
  {
    id: 1,
    image: "/images/cabania-entregada-1.jpg",
    alt: "Cabaña Entregada 1",
    title: "Cabaña - Córdoba",
  },
  {
    id: 2,
    image: "/images/cabania-entregada-2.jpg",
    alt: "Cabaña Entregada 2",
    title: "Cabaña - Santa Fe",
  },
  {
    id: 3,
    image: "/images/cabania-entregada-3.jpg",
    alt: "Cabaña Entregada 3",
    title: "Cabaña - Córdoba",
  },
  {
    id: 4,
    image: "/images/cabania-entregada-4.jpg",
    alt: "Cabaña Entregada 4",
    title: "Cabaña - Mendoza",
  },
  {
    id: 5,
    image: "/images/cabania-entregada-5.jpg",
    alt: "Cabaña Entregada 5",
    title: "Cabaña - Tucumán",
  },
  {
    id: 6,
    image: "/images/cabania-entregada-6.jpg",
    alt: "Cabaña Entregada 6",
    title: "Cabaña - Córdoba",
  },
]

export function CabinsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const selectedCabin = deliveredCabins.find((cabin) => cabin.id === selectedImage)

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 text-center">Cabañas Entregadas</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Conocé algunas de nuestras cabañas ya entregadas a familias de todo el país.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveredCabins.map((cabin) => (
              <Card key={cabin.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-64 group" onClick={() => openModal(cabin.id)}>
                    <Image
                      src={cabin.image || "/placeholder.svg"}
                      alt={cabin.alt}
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
                    <h3 className="font-medium text-gray-900">{cabin.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage && selectedCabin && (
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
                src={selectedCabin.image || "/placeholder.svg"}
                alt={selectedCabin.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-medium">{selectedCabin.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
