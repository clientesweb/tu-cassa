"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTAHero() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#f75858] to-[#ff3333] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">Hacé realidad tu casa propia hoy</h2>

        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Más de 6,000 familias confiaron en nosotros. Con 17 años de experiencia, te garantizamos calidad,
          transparencia y cumplimiento en cada proyecto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-[#f75858] hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl min-w-[250px]"
            asChild
          >
            <a
              href="https://wa.me/5493517623951?text=Hola!%20Quiero%20recibir%20asesoramiento%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Asesoramiento Gratis
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#f75858] font-bold px-8 py-6 text-lg min-w-[250px] bg-transparent"
            asChild
          >
            <a href="tel:+5493517623951">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
