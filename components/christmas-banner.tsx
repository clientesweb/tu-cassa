"use client"

import Image from "next/image"

export function ChristmasBanner() {
  return (
    <section className="w-full px-0 py-0 overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/banner-2026.webp"
          alt="Especial Año Nuevo - Te regalamos Combo Alacena + Mesada + Bajo Mesada"
          width={1920}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
