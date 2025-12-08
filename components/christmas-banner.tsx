"use client"

import Image from "next/image"

export function ChristmasBanner() {
  return (
    <section className="w-full px-0 py-0 overflow-hidden">
      <div className="relative w-full h-auto min-h-[200px] sm:h-96 md:h-[400px] lg:h-[450px]">
        <Image
          src="/banner-navidad-tucassa.webp"
          alt="Banner Navideño - Esta Navidad bajamos los precios"
          width={1920}
          height={600}
          className="w-full h-auto object-contain sm:object-cover sm:h-96 md:h-[400px] lg:h-[450px]"
          priority
        />
      </div>
    </section>
  )
}
