"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Brasmontagem Logo" width={200} height={60} className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="#servicos" className="text-blue-500 hover:text-blue-700 transition-colors">
              Serviços
            </Link>
            <Link href="#sobre" className="text-blue-500 hover:text-blue-700 transition-colors">
              Sobre
            </Link>
            <Link href="#projetos" className="text-blue-500 hover:text-blue-700 transition-colors">
              Projetos
            </Link>
            <Link href="#contato" className="text-blue-500 hover:text-blue-700 transition-colors">
              Contato
            </Link>
          </div>

          <button
            className="md:hidden text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-2">
              <Link
                href="#servicos"
                className="text-blue-500 hover:text-blue-700 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-blue-500 hover:text-blue-700 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#projetos"
                className="text-blue-500 hover:text-blue-700 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="#contato"
                className="text-blue-500 hover:text-blue-700 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

