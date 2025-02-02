// app/page.tsx
import Image from 'next/image'
import { ProjectCarousel } from '@/components/project-carousel'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção Hero com duas imagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/hero-1.jpg" // Substitua pelo caminho da imagem
            alt="Revestimentos industriais"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/hero-2.jpg" // Substitua pelo caminho da imagem
            alt="Proteção anticorrosiva"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Carrossel de Projetos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#F2A71B] mb-6 text-center">
          Nossos Projetos
        </h2>
        <ProjectCarousel />
        <div className="text-center mt-6">
          <a
            href="/projetos"
            className="inline-block bg-[#1453A6] text-white px-6 py-3 rounded-lg hover:bg-[#1F3B73] transition-colors"
          >
            Ver Todos os Projetos
          </a>
        </div>
      </section>
    </div>
  )
}