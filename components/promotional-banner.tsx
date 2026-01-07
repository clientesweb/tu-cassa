import Image from "next/image"
import Link from "next/link"

export function PromotionalBanner() {
  return (
    <section className="w-full bg-white">
      <Link href="https://wa.me/5493517623951" target="_blank" rel="noopener noreferrer">
        <div className="relative w-full">
          <Image
            src="/images/banner-promocional.webp"
            alt="Tu Cassa Propia - Nuestra trayectoria nos avala - ¡Consultanos!"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </Link>
    </section>
  )
}
