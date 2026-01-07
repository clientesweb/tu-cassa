import Script from "next/script"

interface StructuredDataProps {
  type?: "organization" | "product" | "service" | "website"
  data?: any
}

export function StructuredData({ type = "organization", data }: StructuredDataProps) {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tu Cassa Prefabricadas",
    description:
      "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia en Argentina.",
    url: "https://www.tucassa.com.ar",
    logo: "https://www.tucassa.com.ar/images/logo-tu-cassa.png",
    image: "https://www.tucassa.com.ar/images/og-image-inicio.jpg",
    telephone: "+54-351-308-1798",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    sameAs: ["https://www.facebook.com/tucassaprefabricadas", "https://www.instagram.com/tucassaprefabricadas"],
    foundingDate: "2007",
    numberOfEmployees: "10-50",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceArea: {
      "@type": "Country",
      name: "Argentina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Casas Prefabricadas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Casas Tradicionales Prefabricadas",
            description: "Viviendas prefabricadas tradicionales de 2 a 4 dormitorios",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Casas Minimalistas Prefabricadas",
            description: "Viviendas prefabricadas con diseño minimalista moderno",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Cabañas Prefabricadas",
            description: "Cabañas prefabricadas ideales para complejos turísticos",
          },
        },
      ],
    },
  })

  const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tu Cassa Prefabricadas",
    url: "https://www.tucassa.com.ar",
    description: "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia.",
    publisher: {
      "@type": "Organization",
      name: "Tu Cassa Prefabricadas",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.tucassa.com.ar/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  })

  const getProductSchema = (productData: any) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.name,
    description: productData.description,
    image: productData.image,
    brand: {
      "@type": "Brand",
      name: "Tu Cassa",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Tu Cassa Prefabricadas",
    },
    offers: {
      "@type": "Offer",
      price: productData.price,
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Tu Cassa Prefabricadas",
      },
    },
    category: "Prefabricated Houses",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Bedrooms",
        value: productData.bedrooms,
      },
      {
        "@type": "PropertyValue",
        name: "Area",
        value: productData.area,
      },
    ],
  })

  const getServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construcción de Casas Prefabricadas",
    description: "Servicio de construcción e instalación de casas prefabricadas tradicionales, minimalistas y cabañas.",
    provider: {
      "@type": "Organization",
      name: "Tu Cassa Prefabricadas",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Construcción",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construcción de Casas Tradicionales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construcción de Casas Minimalistas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construcción de Cabañas",
          },
        },
      ],
    },
  })

  const getSchema = () => {
    switch (type) {
      case "product":
        return getProductSchema(data)
      case "service":
        return getServiceSchema()
      case "website":
        return getWebsiteSchema()
      default:
        return getOrganizationSchema()
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
}
