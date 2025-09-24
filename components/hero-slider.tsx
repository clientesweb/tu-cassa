"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-1-tu-cassa.jpg-B3rMyrYJ7XGUdaCwphjdnYVOsP6S8s.jpeg",
    title: "Precios inmejorables!",
    subtitle: "Entrega al instante",
    description: "Obtén tu casa prefabricada con la mejor relación calidad-precio del mercado",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-2-tu-cassa.jpg-O9IW4onaiG4iPNKaVN1JbW7XHV2zaP.jpeg",
    title: "Elegí tu estilo",
    subtitle: "Recibimos tu usado",
    description: "Diseños tradicionales y minimalistas adaptados a tus necesidades",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-3-tu-cassa.jpg-z3n7qg988o399OwgfTeUo4DWDa0Dgs.jpeg",
    title: "+17 años de trayectoria",
    subtitle: "Nuestra Experiencia nos Avala",
    description: "Más de una década construyendo hogares de calidad y confianza",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">{slide.title}</h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-balance">{slide.subtitle}</p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#f75858] hover:bg-[#f75858]/90 text-white" asChild>
                  <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                    Contactar
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-[#f75858] hover:text-white hover:border-[#f75858]"
                  asChild
                >
                  <a href="/cabanias">Cabañas</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
