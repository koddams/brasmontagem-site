import Image from 'next/image'
import Link from 'next/link'
import { ProjectCarousel } from '@/components/project-carousel'
import { ParallaxBackground } from '@/components/parallax-background'

export default function Home() {
  return (
    <ParallaxBackground>
    <main className="min-h-screen">
      {/* Botão do WhatsApp Fixo */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="https://wa.me/5511971898699" // Substitua pelo seu número
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all flex items-center"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </Link>
      </div>
    
      {/* Seção Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/torre-hero.jpg"
              alt="Revestimentos industriais especializados"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-tanque.jpg"
              alt="Proteção anticorrosiva profissional"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Chamada para Ação */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções em Fibra de Vidro
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expertise em projetos complexos com segurança e qualidade
          </p>
          <Link
            href="https://wa.me/5511971898699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Projetos Recentes
          </h2>
          <ProjectCarousel />
          
          <div className="text-center mt-8">
            <Link
              href="/projetos"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>
      {/* Seção Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Textual */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sobre a Bras Montagem
              </h2>
              <p className="text-lg text-gray-600">
                Com mais de 15 anos de experiência no mercado, somos especialistas em soluções 
                industriais completas. Nossa expertise abrange:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Montagens industriais complexas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Instalação de estruturas metálicas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Manutenção preventiva e corretiva</span>
                </li>
              </ul>
              <Link
                href="/sobre"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>

            {/* Imagem */}
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/sobre-equipe.jpg"
                alt="Equipe técnica qualificada"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 text-white py-16"></section>

      {/* Seção de Contato */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Telefone</h3>
              <p className="text-lg">(11) 97189-8699</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-lg">contato@brasmontagem.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Endereço</h3>
              <p className="text-lg">Av. Industrial, 1234</p>
              <p className="text-lg">São Paulo - SP</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </ParallaxBackground>
  )
}