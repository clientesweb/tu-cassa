"use client"

import { Home, Clock, Award, Users } from "lucide-react"

const signals = [
  {
    icon: Home,
    number: "+6,000",
    label: "Viviendas Instaladas",
    description: "En todo el país",
  },
  {
    icon: Clock,
    number: "30 días",
    label: "Tiempo de Instalación",
    description: "Entrega garantizada",
  },
  {
    icon: Award,
    number: "+17 años",
    label: "de Experiencia",
    description: "Nos avalan",
  },
  {
    icon: Users,
    number: "100%",
    label: "Clientes Satisfechos",
    description: "Calidad garantizada",
  },
]

export function TrustSignals() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Por qué elegir <span className="text-[#f75858]">Tu Cassa</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f75858]/10 mb-4">
                  <Icon className="h-8 w-8 text-[#f75858]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#f75858] mb-2">{signal.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{signal.label}</div>
                <div className="text-sm text-gray-600">{signal.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
