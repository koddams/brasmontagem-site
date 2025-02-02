// Componente do botão flutuante do WhatsApp
// Documentação Lucide Icons: https://lucide.dev/docs/lucide-react
"use client"

import { Phone } from "lucide-react"

export function WhatsAppButton() {
  // Função para abrir o WhatsApp
  const handleClick = () => {
    // Número do WhatsApp da empresa
    const phoneNumber = "5511971898699"
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da Brasmontagem.")
    // Abre o WhatsApp em nova aba
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-secondary text-primary font-semibold p-4 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="w-6 h-6" />
      {/* Texto que aparece ao passar o mouse */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-200 ease-in-out whitespace-nowrap">
        Fale conosco
      </span>
    </button>
  )
}

