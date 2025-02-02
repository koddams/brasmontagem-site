// components/whatsapp-button.tsx
"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <a
        href="https://wa.me/5511971898699" //Numero Nely
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
        <span className="hidden sm:inline">Enviar Mensagem</span>
      </a>
    </motion.div>
  )
}