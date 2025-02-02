// components/whatsapp-button.tsx
"use client"

import { motion } from 'framer-motion'

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <a
        href="https://wa.me/5511971898699" //Número principal da Nely
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition-colors"
      >
        {/* Ícone do WhatsApp */}
        <span className="hidden sm:inline">Enviar Mensagem</span>
      </a>
    </motion.div>
  )
}