"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    open: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { 
      x: '100%',
      transition: { duration: 0.2 }
    }
  }

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Brasmontagem Logo" 
              width={200} 
              height={60} 
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {['servicos', 'sobre', 'projetos', 'contato'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X size={24} className="stroke-current" />
            ) : (
              <Menu size={24} className="stroke-current" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <div className="flex flex-col gap-2 p-4">
                  {['servicos', 'sobre', 'projetos', 'contato'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item}`}
                      className="py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}