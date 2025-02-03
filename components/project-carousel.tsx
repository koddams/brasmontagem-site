"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, image: '/images/tanque-rodoviario.jpg', title: 'Revestimento em Tanques' },
  { id: 2, image: '/images/dique-concreto.jpg', title: 'Proteção de Diques' },
  { id: 3, image: '/images/torre-cloro.jpg', title: 'Tubulações Industriais' },
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
            className="object-cover object-center-bottom"
            priority
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#F2A71B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#F2A71B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}