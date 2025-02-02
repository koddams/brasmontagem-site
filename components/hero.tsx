// Componente Hero - Seção principal da página
// Documentação Next.js Image: https://nextjs.org/docs/api-reference/next/image
import Image from "next/image"

export function Hero() {
  return (
    // relative + h-screen cria uma seção que ocupa toda a altura da tela
    // https://tailwindcss.com/docs/height
    <section className="relative h-screen flex items-center justify-center">
      {/* Container da imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          // Usando a imagem do catálogo como background
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/de600cd7-862a-4c94-b4a1-2e698d2cb5b0.jpg-PYe01VeAgPhpDoAGeNMmbP6jTXxlnX.jpeg"
          alt="Brasmontagem industrial background"
          fill
          className="object-cover"
          priority // Carrega a imagem com prioridade por ser above the fold
        />
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo central do hero */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">BRASMONTAGEM</h1>
        {/* Missão da empresa conforme catálogo */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          RESPEITO, INTEGRIDADE, TRABALHO EM EQUIPE. VISANDO MELHOR QUALIDADE, PONTUALIDADE E COMPROMETIMENTO COM OS
          SEUS CLIENTES.
        </p>
        <a
          href="#contato"
          className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  )
}

