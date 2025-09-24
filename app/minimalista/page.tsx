import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Casas Minimalistas - Tu Cassa | Diseño Moderno y Funcional",
  description:
    "Descubrí nuestras casas prefabricadas minimalistas. Diseño moderno, líneas limpias y espacios funcionales. Más de 17 años construyendo hogares únicos.",
  keywords:
    "casas minimalistas, diseño moderno, casas prefabricadas minimalistas, arquitectura minimalista, Tu Cassa minimalista",
}

export default function MinimalistaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">Estilo Minimalista</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
              Diseño moderno, líneas limpias y espacios funcionales
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
            >
              Solicitar Cotización
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">
              Características del Estilo Minimalista
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Líneas Limpias</h3>
                <p className="text-gray-600">Diseño simple y elegante con formas geométricas puras</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Espacios Abiertos</h3>
                <p className="text-gray-600">Ambientes amplios y conectados que maximizan la sensación de espacio</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Iluminación Natural</h3>
                <p className="text-gray-600">Grandes ventanales que aprovechan al máximo la luz natural</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">¿Te interesa el estilo minimalista?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Consultanos sobre nuestros diseños minimalistas y descubrí cómo podemos crear tu hogar ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
              >
                Solicitar Cotización
              </Button>
              <Link href="/galeria">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 text-lg font-semibold rounded-full bg-transparent"
                >
                  Ver Galería
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
