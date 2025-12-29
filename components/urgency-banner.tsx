"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UrgencyBanner() {
  return (
    <section className="py-8 sm:py-12 px-4 bg-[#f75858]">
      <div className="max-w-5xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          <AlertCircle className="h-6 w-6 animate-pulse" />
          <span className="text-sm sm:text-base font-bold uppercase tracking-wide">Oferta por Tiempo Limitado</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          ¡Ahorrá hasta $1.000.000 en modelos seleccionados!
        </h2>

        <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
          Aprovechá nuestro Especial de Año Nuevo con descuentos exclusivos + Combo de Regalo (Alacena + Mesada + Bajo
          Mesada)
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-[#f75858] hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
            asChild
          >
            <a href="/ofertas">Ver Ofertas Disponibles</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#f75858] font-bold px-8 py-6 text-lg bg-transparent"
            asChild
          >
            <a href="https://wa.me/5493517623951?text=Hola!%20Quiero%20saber%20más%20sobre%20las%20ofertas%20especiales">
              Consultar Ahora
            </a>
          </Button>
        </div>

        <p className="text-sm mt-4 opacity-90">⏰ Cupos limitados - Consultar disponibilidad</p>
      </div>
    </section>
  )
}
