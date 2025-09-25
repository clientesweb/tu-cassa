"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [viviendasOpen, setViviendasOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#f75858] shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="font-serif text-xl font-bold text-white">Tu Cassa</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="p-6 space-y-4">
          <Collapsible open={viviendasOpen} onOpenChange={setViviendasOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-medium text-white hover:text-white/80 transition-colors font-sans">
              Viviendas
              <ChevronDown className={`h-4 w-4 transition-transform ${viviendasOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2">
              <a href="/tradicional" className="block py-2 text-white/90 hover:text-white transition-colors font-sans">
                Tradicional
              </a>
              <a
                href="/viviendas-minimalistas"
                className="block py-2 text-white/90 hover:text-white transition-colors font-sans"
              >
                Minimalista
              </a>
            </CollapsibleContent>
          </Collapsible>

          <a
            href="/cabanias"
            className="block py-3 font-medium text-white hover:text-white/80 transition-colors font-sans"
          >
            Cabañas
          </a>

          <a
            href="/metodo-constructivo"
            className="block py-3 font-medium text-white hover:text-white/80 transition-colors font-sans"
          >
            Método Constructivo
          </a>

          <a
            href="/contacto"
            className="block py-3 font-medium text-white hover:text-white/80 transition-colors font-sans"
          >
            Contacto
          </a>
        </nav>
      </div>
    </>
  )
}
