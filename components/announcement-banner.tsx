"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

const announcements = ["Oferta $9.600.000 33m² sin galería", "¡TU CASSA, ES HOY!"]

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#f75858] text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
          <div className="animate-slide-down flex-1">
            <p className="text-xs md:text-sm font-medium">{announcements[currentIndex]}</p>
          </div>
          <a
            href="https://wa.me/5493513081798"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#f75858] px-2 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <MessageCircle className="h-3 w-3" />
            Consultar
          </a>
        </div>
      </div>
    </div>
  )
}
