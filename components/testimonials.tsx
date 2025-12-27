"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María González",
    location: "Villa Carlos Paz, Córdoba",
    initials: "MG",
    text: "Excelente calidad y cumplieron con todos los tiempos prometidos. Nuestra familia está feliz con la nueva vivienda.",
    rating: 5,
    model: "Vivienda Tradicional 4",
    color: "bg-blue-500",
  },
  {
    name: "Roberto Fernández",
    location: "San Luis",
    initials: "RF",
    text: "La mejor decisión fue construir con Tu Cassa. El proceso fue transparente y el resultado superó nuestras expectativas.",
    rating: 5,
    model: "Vivienda Minimalista 1",
    color: "bg-green-500",
  },
  {
    name: "Laura y Martín Pérez",
    location: "Río Cuarto, Córdoba",
    initials: "LP",
    text: "Nos asesoraron en cada paso. Recibimos nuestra cabaña en tiempo récord y con una calidad increíble.",
    rating: 5,
    model: "Cabaña 2",
    color: "bg-purple-500",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-[#f75858]">clientes</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de familias ya confiaron en nosotros para construir su hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`${testimonial.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>

                <div className="text-sm text-[#f75858] font-medium">Modelo: {testimonial.model}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5493517623951?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20viviendas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f75858] hover:bg-[#f75858]/90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Consultá sin compromiso
          </a>
        </div>
      </div>
    </section>
  )
}
