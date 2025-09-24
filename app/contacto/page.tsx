"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Create WhatsApp message
    const whatsappMessage = `Hola! Me contacto desde la página web de Tu Cassa Prefabricadas.

*Datos de contacto:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

*Consulta:*
Asunto: ${formData.subject}
Mensaje: ${formData.message}

Espero su respuesta. ¡Gracias!`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/5493517623951?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f75858] to-[#ff6b6b] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Contacta con <span className="text-white">Tu Cassa</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a hacer realidad tu proyecto de vivienda prefabricada. Contáctanos y recibe
            asesoramiento personalizado.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">Envíanos tu consulta</h2>
              <p className="text-muted-foreground leading-relaxed">
                Completa el formulario y nos pondremos en contacto contigo a través de WhatsApp para brindarte toda la
                información que necesitas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="Tu número de teléfono"
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto *</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={errors.subject ? "border-red-500" : ""}
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Cuéntanos sobre tu proyecto, presupuesto, ubicación, o cualquier consulta que tengas..."
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f75858] hover:bg-[#e54545] text-white py-3 text-lg font-medium"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta por WhatsApp"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                Información de contacto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                También puedes contactarnos directamente a través de nuestros canales oficiales.
              </p>
            </div>

            {/* Commercial Office */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Oficina Comercial</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Av. Monseñor P. Cabrera 3068</p>
                <p>(B° Alto San Martín)</p>
                <p>Córdoba – Argentina</p>
              </div>
            </div>

            {/* Sales Advisors */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Asesores de Ventas</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Alberto Conte</p>
                  <a
                    href="https://wa.me/5493513081798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#f75858] hover:text-[#e54545] transition-colors font-medium"
                  >
                    (0351) 15 3081798
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Florencia Conte</p>
                  <a
                    href="https://wa.me/5493517567337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#f75858] hover:text-[#e54545] transition-colors font-medium"
                  >
                    (0351) 15 7567337
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Horarios de atención</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes a Viernes: 8:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}
