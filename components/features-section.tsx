import { Home, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Diseños Únicos",
    description: "Casas tradicionales y minimalistas adaptadas a tu estilo de vida",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Construcción eficiente con tiempos de entrega inmejorables",
  },
  {
    icon: Award,
    title: "+17 Años de Experiencia",
    description: "Trayectoria sólida en el mercado de casas prefabricadas",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Acompañamiento completo desde el diseño hasta la entrega",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            ¿Por qué elegir Tu Cassa?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Somos especialistas en construcción de casas prefabricadas con más de 17 años de experiencia en el mercado,
            ofreciendo calidad, rapidez y precios competitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
