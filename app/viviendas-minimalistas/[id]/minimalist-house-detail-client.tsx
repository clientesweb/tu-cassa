"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MinimalistHousesGallery } from "@/components/gallery/minimalist-houses-gallery"

interface MinimalistHouse {
  id: number
  title: string
  subtitle?: string
  image: string
  floorPlan: string
  offerPrice: string
  originalPrice?: string
  savings?: string
  bedrooms: string
  area: string
  description: string
  isPopular?: boolean
}

interface MinimalistHouseDetailClientProps {
  house: MinimalistHouse
}

export function MinimalistHouseDetailClient({ house }: MinimalistHouseDetailClientProps) {
  const whatsappMessage = `Hola! Me interesa la ${house.title} (${house.bedrooms}, ${house.area}) con precio de ${house.offerPrice}. Me gustaría recibir más información.`
  const whatsappUrl = `https://wa.me/5493513081798?text=${encodeURIComponent(whatsappMessage)}`

  const handleShare = async () => {
    const shareData = {
      title: `${house.title} - Tu Cassa Prefabricadas`,
      text: `${house.description} ${house.bedrooms}, ${house.area}. Precio desde ${house.offerPrice}.`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      alert("Enlace copiado al portapapeles")
    }
  }

  return (
    <>
      {/* Hero Section with House Image */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4 bg-transparent">
              <a href="/viviendas-minimalistas">← Volver a Viviendas Minimalistas</a>
            </Button>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">{house.title}</h1>
                {house.isPopular && (
                  <Badge className="bg-[#f75858] text-white px-3 py-1 text-sm font-medium">
                    {house.id === 1 ? "¡La más vendida!" : "¡La más elegida!"}
                  </Badge>
                )}
              </div>
              <Button
                variant="outline"
                onClick={handleShare}
                className="bg-white border-[#f75858] text-[#f75858] hover:bg-[#f75858] hover:text-white self-start sm:self-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                Compartir
              </Button>
            </div>
            {house.subtitle && <p className="text-[#f75858] font-medium text-lg">{house.subtitle}</p>}
          </div>

          {/* House Image */}
          <div className="relative h-64 sm:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={house.image || "/placeholder.svg"}
              alt={`Foto de ${house.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Price and Basic Info */}
          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#f75858]">
                      Precio oferta {house.offerPrice}
                    </span>
                    {house.originalPrice && (
                      <span className="text-lg sm:text-xl text-gray-500 line-through">{house.originalPrice}</span>
                    )}
                  </div>
                  {house.savings && (
                    <div className="text-base text-green-600 font-medium mb-4">¡Ahorrás {house.savings}!</div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700 text-lg">
                    <span className="font-medium text-[#f75858] mr-3">•</span>
                    {house.bedrooms}
                  </div>
                  <div className="flex items-center text-gray-700 text-lg">
                    <span className="font-medium text-[#f75858] mr-3">•</span>
                    {house.area}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-base mt-6 leading-relaxed">{house.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-6 text-center">Plano de la Vivienda</h2>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src={house.floorPlan || "/placeholder.svg"}
              alt={`Plano de ${house.title}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Characteristics and Bonuses */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 text-center">
            Características y Bonificaciones
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Características */}
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-serif text-[#f75858] mb-4">Características:</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Revestimiento exterior en placas de fibrocemento.</p>
                  <p>
                    • En el interior, revestimiento en placas de yeso en habitaciones y Durlock en la cocina y el baño.
                  </p>
                  <p>• Aislación interna de paredes y aislante especial de techo.</p>
                  <p>
                    • Ventanas de aluminio con rejas, puerta balcón, puertas placa internas de madera cedrillo con
                    marcos de madera de paraíso.
                  </p>
                  <p>• Puerta de frente de chapa doble</p>
                  <p>• La chapa del techo es aluminizada calibre 25 (antigranizo).</p>
                  <p>• Trapezoidal o sinusoidal con tapas de fibrocemento estilo minimalista (techo plano).</p>
                </div>
              </CardContent>
            </Card>

            {/* Bonificaciones */}
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-serif text-[#f75858] mb-4">De regalo con tu casa, 100% bonificado:</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Juego de baño marca Ferrum o Capea</p>
                  <p>• Rejas en todas las ventanas</p>
                  <p>• Instalación de agua fría - caliente en el baño y cocina</p>
                  <p>• Colocación de caños de luz</p>
                  <p>• Cerraduras, llaves y picaportes de todas las puertas</p>
                  <p>• Grifería para los sanitarios</p>
                  <p>• Pintura látex para el interior (20 litros)</p>
                  <p>• Barniz para las puertas placas (4 litros)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-4 text-gray-700">
                <p className="font-medium text-[#f75858]">
                  ¡Consultá precio por cambio de chapa de aluminizada a chapa epoxi color!
                </p>
                <p className="font-medium">
                  NUESTRAS CASAS MINIMALISTAS ESTÁN DISEÑADAS CON LOS MÁS ALTOS ESTÁNDARES DE CALIDAD.
                </p>
                <p>
                  Al valor de la vivienda tenés que sumar el costo del flete y armado, que varía dependiendo de la
                  ciudad o localidad en la que se instale tu casa. ¡Consultanos!
                </p>
                <p className="text-sm italic">Imágenes a modo ilustrativo.</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4">¿Te interesa esta casa?</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8">
                Contactanos ahora para recibir más información, cotización personalizada y opciones de financiación.
              </p>
              <Button
                size="lg"
                className="bg-[#f75858] hover:bg-[#f75858]/90 text-white px-8 py-4 text-lg w-full sm:w-auto"
                asChild
              >
                <a
                  href={`https://wa.me/5493513081798?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar ahora por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Houses Gallery Component */}
      <MinimalistHousesGallery />
    </>
  )
}
