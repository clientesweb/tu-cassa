import type { Metadata } from "next"
import Image from "next/image"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Método Constructivo - Tu Cassa Prefabricadas",
  description:
    "Conocé en detalle nuestro método constructivo para casas prefabricadas. Paneles portantes, aislación térmica, terminaciones de calidad y más de 17 años de experiencia en Argentina.",
  keywords: [
    "método constructivo",
    "casas prefabricadas",
    "paneles portantes",
    "aislación térmica",
    "construcción en seco",
    "viviendas prefabricadas Argentina",
    "Tu Cassa",
    "fibrocemento",
    "durlock",
    "construcción modular",
  ],
  openGraph: {
    title: "Método Constructivo - Tu Cassa Prefabricadas",
    description:
      "Conocé en detalle nuestro método constructivo para casas prefabricadas con más de 17 años de experiencia.",
    images: [
      {
        url: "/images/og-image-metodo-constructivo.jpg",
        width: 1200,
        height: 630,
        alt: "Método Constructivo Tu Cassa Prefabricadas",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Constructivo - Tu Cassa Prefabricadas",
    description:
      "Conocé en detalle nuestro método constructivo para casas prefabricadas con más de 17 años de experiencia.",
    images: ["/images/og-image-metodo-constructivo.jpg"],
  },
}

const constructionSteps = [
  {
    title: "Base de la vivienda",
    description:
      "Nuestras viviendas o cabañas van montadas sobre una plataforma de hormigón de 8 a 10 cm de espesor, a ésta la deberá realizar el cliente con el plano y las indicaciones técnicas que nosotros le proveemos.",
  },
  {
    title: "Paneles preensamblados",
    description:
      "Los paneles son del tipo portante y los fabricamos con tirantería de madera de 25 mm x 50 mm, (esto para viviendas de planta baja solamente), con una separación de 40 cm entre sí. Su parte exterior se reviste con placas cementicias (Fibrocemento) de 6 mm. Paredes internas de Durlock de 9 mm en cocina comedor y baño; en los dormitorios se revestirá con placas de yeso marca Durlock.",
  },
  {
    title: "Puertas",
    description:
      "La exterior al frente de chapa de hierro doble inyectadas en poliuretano con cerradura de seguridad. La puerta de acceso a la parte trasera de la casa (si corresponde que la lleve) es de chapa también. Las puertas interiores son de tipo placas forradas en madera de cedrillo con marcos de madera de paraíso.",
  },
  {
    title: "Ventanas",
    description:
      "Las mismas son de aluminio de cómo estándar llevan de 1,10 x 1,20. En baño se colocará ventiluz tipo balancín de aluminio de 0,26 x 0,40 mts.",
  },
  {
    title: "Baño",
    description:
      "Se fabrica igual que las otras dependencias, solo que aquí se forrarán las paredes interiores en el mismo Fibrocemento, especial para lugares con humedad o traslado de aguas.",
  },
  {
    title: "Instalaciones",
    description:
      "Agua: las instalaciones para agua fría y caliente serán embutidas y se realizarán con caños de termofusión de primera calidad, todo en ½. Luz: se entregan todas las cañerías instaladas y con las bocas en pared y techo, sin cableado ni artefactos.",
  },
  {
    title: "Terminaciones",
    description:
      "Se entrega con todos los contramarcos en aberturas y con terminación en ángulo en esquinas de techo, la casa se entrega totalmente cerrada con vidrios colocados, todo le queda listo para pintar.",
  },
  {
    title: "Aislación",
    description:
      "Todos los paneles llevan un aislamiento termoacústico realizado con polyespuma en planchas y en el cielorraso polyespuma; como opcional se pondrá doble aislación en lugares de alta temperatura.",
  },
  {
    title: "Cielorraso",
    description:
      'Construido con estructura interna en madera dura de 1" x 2" y forrados con madera machihembrada de ½ x 4" todos en madera de pino de 1º calidad.',
  },
  {
    title: "Cabreadas de techo",
    description:
      "Las fabricamos con tirantes de madera de 1 x 2 pulgadas. Las exteriores son forradas con placas cementicias Fibrocemento de 6 mm de espesor. Las cabreadas interiores se instalan a 1,20 m de distancia entre sí y son la sustentación para el cielorraso y techo.",
  },
  {
    title: "Techos",
    description:
      'Su estructura es de madera de 1″ x 2 ½" pulgadas en paneles desarmables, a dos aguas, la cubierta es de chapa de hierro aluminizado, la misma es de calibre 25 (antigranizo) las mismas van clavadas con clavos espiralados, chapa trapezoidal o acanalada aluminizada.',
  },
  {
    title: "Altura",
    description: "La altura que tendrá vivienda entre el nivel del piso terminado y el cielorraso será de 2,40 mts.",
  },
]

const bonifications = [
  "Juego de baño completo con su grifería",
  "Pintura látex para todo el interior de la vivienda",
  "Barniz para cielorraso y puertas placas",
]

const clientResponsibilities = [
  "Instalar los caños de cloacas, de baño y cocina",
  "Realizar el contrapiso",
  "Colocar cerámicos e instalar el juego de baño",
  "Colocar mesada de la cocina",
  "Instalar el cableado de luz y las llaves térmicas",
  "Instalar llaves de luz y tomacorrientes",
  "Pintar el interior y el exterior",
]

export default function MetodoConstructivoPage() {
  return (
    <>
      <main className="min-h-screen">
        <AnnouncementBanner />
        <Header />

        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/banner-metodo-constructivo-inicio.jpg"
            alt="Método Constructivo Tu Cassa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-balance">NUESTRO MÉTODO CONSTRUCTIVO</h1>
            <div className="bg-black px-6 py-3 inline-block">
              <p className="text-lg md:text-xl font-medium">¡CONOCÉ A DETALLE CADA VIVIENDA!</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[#f75858] mb-6">Más de 17 años de experiencia</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La fabricación de nuestras casas prefabricadas se realiza según las siguientes características técnicas,
              garantizando calidad, durabilidad y confort en cada vivienda que construimos.
            </p>
            <div className="bg-[#f75858] text-white p-6 rounded-lg">
              <p className="text-lg font-medium">
                NUESTRAS CABAÑAS ESTÁN REVESTIDAS EN MADERA SALIDA DE EUCALIPTUS DE EXCELENTE CALIDAD
              </p>
            </div>
          </div>
        </section>

        {/* Construction Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#f75858] text-center mb-12">Proceso Constructivo</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {constructionSteps.map((step, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-[#f75858] mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interior Images Gallery */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#f75858] text-center mb-12">
              Terminaciones Interiores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/metodo-constructivo-1.jpg"
                  alt="Interior con terminaciones en Durlock"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/metodo-constructivo-2.jpg"
                  alt="Living comedor con pared de ladrillo"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/metodo-constructivo-3.jpg"
                  alt="Baño con terminaciones cerámicas"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bonifications */}
        <section className="py-16 px-4 bg-[#f75858] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">100% Bonificado con tu vivienda</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {bonifications.map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-6 rounded-lg mb-8">
              <p className="text-lg font-medium mb-2">
                ¡CONSULTÁ PRECIO POR CAMBIO DE CHAPA DE ALUMINIZADA A CHAPA EPOXI COLOR!
              </p>
            </div>
          </div>
        </section>

        {/* Client Responsibilities */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#f75858] text-center mb-12">
              Una vez instalada la vivienda
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">El cliente deberá realizarle lo siguiente:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clientResponsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#f75858] font-bold mr-3 mt-1">•</span>
                    <p className="text-gray-700">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-lg text-gray-800">
                <strong>Importante:</strong> Al valor de la vivienda tenés que sumar el costo del flete y armado, que
                varía dependiendo de la ciudad o localidad en la que se instale tu casa. ¡Consultanos!
              </p>
            </div>

            <p className="text-gray-600 mb-8">Imágenes a modo ilustrativo.</p>

            <Button asChild size="lg" className="bg-[#f75858] hover:bg-[#f75858]/90 text-white px-8 py-4 text-lg">
              <a href="https://wa.me/5493513081798" target="_blank" rel="noopener noreferrer">
                Consultá tu proyecto
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </main>

      <WhatsAppFloat />
    </>
  )
}
