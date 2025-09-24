import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { MonthlyOffers } from "@/components/monthly-offers"
import { NationalBanner } from "@/components/national-banner"
import { RotatingBanner } from "@/components/rotating-banner"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Script from "next/script"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tu Cassa Prefabricadas",
  description: "Especialistas en casas prefabricadas tradicionales y minimalistas con más de 17 años de experiencia",
  url: "https://www.tucassa.com.ar",
  logo: "https://www.tucassa.com.ar/images/logo.png",
  image: "https://www.tucassa.com.ar/images/og-image-inicio.jpg",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressLocality: "Argentina",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.facebook.com/tucassa", "https://www.instagram.com/tucassa"],
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Casas Prefabricadas",
      description: "Casas prefabricadas tradicionales y minimalistas",
    },
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Script
        id="sw-registration"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `,
        }}
      />

      <main className="min-h-screen">
        <AnnouncementBanner />
        <Header />
        <HeroSlider />
        <MonthlyOffers />
        <NationalBanner />
        <RotatingBanner />
        <Footer />
      </main>

      <WhatsAppFloat />
    </>
  )
}
