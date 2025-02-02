// components/project-carousel.tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, image: '/projects/project-1.jpg', title: 'Revestimento em Tanques' },
  { id: 2, image: '/projects/project-2.jpg', title: 'Proteção de Diques' },
  { id: 3, image: '/projects/project-3.jpg', title: 'Tubulações Industriais' },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
            <h3 className="text-xl font-bold text-white">
              {projects[currentIndex].title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles do Carrossel */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        {/* Ícone de seta esquerda */}
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        {/* Ícone de seta direita */}
      </button>
    </div>
  )
}