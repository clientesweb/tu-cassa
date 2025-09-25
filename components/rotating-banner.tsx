"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const rotatingTexts = ["Elegí tu estilo", "Descubrí el estilo minimalista", "Ofertas disponibles"]

export function RotatingBanner() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-96 overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-descubri-el-estilo-minimalista-Q6PgvJ8IR2addN6ExL3uddZNnRVaVQ.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 transition-all duration-500 ease-in-out">
            {rotatingTexts[currentTextIndex]}
          </h2>

          <Link href="/casas-minimalistas">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Ver más
            </Button>
          </Link>
        </div>
      </div>

      {/* Text Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {rotatingTexts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTextIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTextIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Mostrar texto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
