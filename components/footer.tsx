import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - 2007 // 17 años atrás desde 2024

  return (
    <footer className="bg-[#f75858] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Oficinas Comerciales */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4">Oficinas Comerciales</h3>
            <div className="text-sm sm:text-base leading-relaxed">
              <p>Av. Monseñor P. Cabrera 3068</p>
              <p>(B° Alto San Martín)</p>
              <p>Córdoba – Argentina</p>
            </div>
          </div>

          {/* Asesores de Ventas */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4">Asesores de Ventas</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Alberto Conte</p>
                <a
                  href="https://wa.me/5493513081798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white/80 transition-colors underline"
                >
                  (0351) 15 3081798
                </a>
              </div>
              <div>
                <p className="font-medium">Florencia Conte</p>
                <a
                  href="https://wa.me/5493517567337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white/80 transition-colors underline"
                >
                  (0351) 15 7567337
                </a>
              </div>
            </div>
          </div>

          {/* Navegación Rápida */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4">Navegación Rápida</h3>
            <nav className="space-y-2">
              <a href="/tradicional" className="block text-sm sm:text-base hover:text-white/80 transition-colors">
                Viviendas Tradicionales
              </a>
              <a href="/minimalista" className="block text-sm sm:text-base hover:text-white/80 transition-colors">
                Viviendas Minimalistas
              </a>
              <a href="/cabanias" className="block text-sm sm:text-base hover:text-white/80 transition-colors">
                Cabañas
              </a>
              <a href="#metodo" className="block text-sm sm:text-base hover:text-white/80 transition-colors">
                Método Constructivo
              </a>
              <a href="/contacto" className="block text-sm sm:text-base hover:text-white/80 transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4">Síguenos</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/tucassaprefabricadas/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/tucassaprefabricadas?ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm sm:text-base">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base">
                © {currentYear} Tu Cassa Prefabricadas. {yearsInBusiness} años de experiencia nos avalan.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-white/80">
                Desarrollado por{" "}
                <a
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  Duality Domain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
