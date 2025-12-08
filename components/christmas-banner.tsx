"use client"

import Image from "next/image"

export function ChristmasBanner() {
  return (
    <section className="w-full px-0 py-0 overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/banner-navidad-tucassa.webp"
          alt="Banner Navideño - Esta Navidad bajamos los precios"
          width={1920}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
