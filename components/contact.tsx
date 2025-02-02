// Componente de Contato com formulário e informações
// useForm do React Hook Form: https://react-hook-form.com/
"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { SectionTitle } from "./section-title"

export function Contact() {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Manipulador de mudanças nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de envio para o email nely.vendas@brasmontagem.com
    console.log("Formulário enviado:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contato" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <SectionTitle light>Entre em Contato</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          {/* Informações de contato */}
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <p>Fábrica: (11) 5058-9238</p>
                  <p>Vendas: (11) 97189-8699</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <span>nely.vendas@brasmontagem.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <p>Rua Granja Amazonas, 265 - JD Guatambu - B°</p>
                  <p>Palmeiras - Suzano/SP - CEP: 08635-710</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

