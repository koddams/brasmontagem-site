// Componente Footer
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {/* Logo e descrição da empresa */}
            <Image src="/logo-white.png" alt="Brasmontagem Logo" width={180} height={54} className="h-12 w-auto mb-4" />
            <p className="text-gray-400">Laminação em Fibra de Vidro Ltda</p>
          </div>
          <div className="text-right">
            {/* Links úteis */}
            <div className="space-y-2 mb-4">
              <Link href="http://www.brasmontagem.com.br" className="text-gray-400 hover:text-white block">
                www.brasmontagem.com.br
              </Link>
            </div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Brasmontagem</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

