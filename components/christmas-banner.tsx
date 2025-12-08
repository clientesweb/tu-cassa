"use client"

import Image from "next/image"

export function ChristmasBanner() {
  return (
    <section className="w-full px-0 py-0 overflow-hidden">
      <div className="relative w-full aspect-video sm:aspect-auto sm:h-96 md:h-[400px] lg:h-[450px]">
        <Image
          src="/banner-navidad-tucassa.webp"
          alt="Banner Navideño - Esta Navidad bajamos los precios"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  )
}
