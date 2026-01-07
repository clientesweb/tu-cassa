"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la construcción e instalación?",
    answer:
      "El proceso completo toma aproximadamente 30 días desde la confirmación del pedido hasta la instalación en tu terreno. Esto incluye la fabricación en nuestras instalaciones y el montaje en el lugar.",
  },
  {
    question: "¿Qué incluye el precio de la vivienda?",
    answer:
      "El precio incluye la estructura completa de la vivienda, puertas, ventanas, instalación eléctrica básica, sanitarios y el montaje en tu terreno. No incluye la platea de hormigón, que debe ser preparada por el cliente según nuestras especificaciones.",
  },
  {
    question: "¿Ofrecen opciones de financiación?",
    answer:
      "Sí, trabajamos con diferentes planes de financiación adaptados a tus necesidades. Consultá con nuestros asesores para conocer las opciones disponibles y encontrar la que mejor se ajuste a tu presupuesto.",
  },
  {
    question: "¿Hacen entregas en todo el país?",
    answer:
      "Sí, realizamos instalaciones en todas las provincias de Argentina. Ya hemos entregado más de 6,000 viviendas en todo el territorio nacional. El costo de envío varía según la distancia.",
  },
  {
    question: "¿Puedo personalizar el diseño de mi vivienda?",
    answer:
      "Absolutamente. Ofrecemos la posibilidad de realizar modificaciones en nuestros diseños base o crear un proyecto completamente personalizado según tus necesidades y preferencias. Nuestros asesores te guiarán en el proceso.",
  },
  {
    question: "¿Qué garantía tienen las viviendas?",
    answer:
      "Todas nuestras viviendas cuentan con garantía de calidad en materiales y construcción. Con más de 17 años de experiencia, respaldamos la durabilidad y solidez de cada una de nuestras construcciones.",
  },
  {
    question: "¿Reciben propiedades usadas como parte de pago?",
    answer:
      "Sí, aceptamos propiedades (terrenos, casas, autos, etc.) como parte de pago. Realizamos una tasación justa y te ayudamos con toda la documentación necesaria para la operación.",
  },
  {
    question: "¿Necesito permisos especiales para instalar una casa prefabricada?",
    answer:
      "Los requisitos varían según el municipio. Te asesoramos sobre la documentación necesaria en tu zona y te ayudamos en el proceso de permisos y habilitaciones correspondientes.",
  },
]

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Preguntas <span className="text-[#f75858]">frecuentes</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f75858] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600">Resolvemos tus dudas sobre el proceso de construcción</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA after FAQ */}
        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">¿Tenés más consultas?</h3>
          <p className="text-gray-600 mb-6">Nuestros asesores están listos para ayudarte</p>
          <a
            href="https://wa.me/5493517623951?text=Hola!%20Tengo%20algunas%20consultas%20sobre%20las%20viviendas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f75858] hover:bg-[#f75858]/90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
