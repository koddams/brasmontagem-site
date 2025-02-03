"use client"

import { ReactNode, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ParallaxBackgroundProps {
  children: ReactNode
}

export function ParallaxBackground({ children }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const scrollY = window.scrollY
      const progress = Math.min(1, (scrollY - containerTop) / containerHeight)

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Imagem de fundo com parallax */}
      <div 
        className="fixed inset-0 -z-10 transition-transform duration-300"
        style={{ 
          transform: `translateY(${scrollProgress * 50}vh)`,
          clipPath: 'inset(0 0 100vh 0)'
        }}
      >
        <Image
          src="/images/fundo-site.jpg"
          alt="Background industrial"
          fill
          className="object-cover"
          quality={80}
          priority
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm">
        {children} 
      </div>
    </div>
  )
}