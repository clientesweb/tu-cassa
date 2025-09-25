"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function NationalBanner() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola! Me interesa conocer más sobre sus viviendas prefabricadas. ¿Podrían brindarme información?",
    )
    window.open(`https://wa.me/5493513081798?text=${message}`, "_blank")
  }

  return (
    <section className="bg-[#f75858] py-4 sm:py-6 lg:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2 sm:mb-3 font-bold">
          ¡TRABAJAMOS EN TODO EL PAÍS!
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed">
          Instalamos tu vivienda en solo 30 días y +6.000 viviendas instaladas a lo largo y ancho del país
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <p className="text-base sm:text-lg md:text-xl font-bold text-white">SOMOS FABRICANTES</p>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="bg-white text-[#f75858] hover:bg-gray-100 font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            ¡Consultanos!
          </Button>
        </div>
      </div>
    </section>
  )
}
