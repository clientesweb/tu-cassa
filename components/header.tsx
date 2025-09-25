"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "./mobile-menu"
import { Instagram, Facebook } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Viviendas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[200px] bg-white">
                      <a
                        href="/viviendas-tradicionales"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Tradicional</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Diseños clásicos y acogedores
                        </p>
                      </a>
                      <a
                        href="/viviendas-minimalistas"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Minimalista</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Líneas limpias y modernas
                        </p>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="/cabanias" className="font-medium hover:text-primary transition-colors">
              Cabañas
            </a>
          </div>

          {/* Mobile Layout - Social Icons + Logo */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/tucassaprefabricadas/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f75858] hover:text-[#f75858]/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/tucassaprefabricadas?ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f75858] hover:text-[#f75858]/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tucassa-1-euOGF3by0CDQbPjGXvPngc5GUxzsMy.png"
                  alt="Tu Cassa Logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>

          {/* Logo Center - Desktop */}
          <div className="hidden md:block flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <a href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tucassa-1-euOGF3by0CDQbPjGXvPngc5GUxzsMy.png"
                alt="Tu Cassa Logo"
                width={180}
                height={90}
                className="h-18 w-auto"
              />
            </a>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/metodo-constructivo" className="font-medium hover:text-primary transition-colors">
              Método Constructivo
            </a>

            <Button variant="outline" asChild>
              <a href="/contacto">Contacto</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
