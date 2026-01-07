"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    desktopImage: "/images/banner-principal.webp",
    mobileImage: "/images/banner-mobile.webp",
    title: "Viviendas Prefabricadas",
    subtitle: "Calidad y confort para tu hogar",
  },
  {
    desktopImage: "/images/banner-principal-2.webp",
    mobileImage: "/images/banner-mobile-2.webp",
    title: "Diseños Modernos",
    subtitle: "Adaptados a tus necesidades",
  },
  {
    desktopImage: "/images/banner-principal-3.webp",
    mobileImage: "/images/banner-mobile-3.webp",
    title: "Construcción Rápida",
    subtitle: "Entrega en 30 días",
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
    <section className="relative h-[50vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.desktopImage || "/placeholder.svg"}
            alt="Vivienda prefabricada Tu Cassa"
            fill
            className="object-cover hidden md:block"
            priority={index === 0}
          />
          <Image
            src={slide.mobileImage || "/placeholder.svg"}
            alt="Vivienda prefabricada Tu Cassa"
            fill
            className="object-cover md:hidden"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-3 md:px-4 max-w-[90%] md:max-w-none">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl drop-shadow-md leading-snug">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/20 h-8 w-8 md:h-10 md:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/20 h-8 w-8 md:h-10 md:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
