// Componente Sobre
import Image from "next/image"
import { SectionTitle } from "./section-title"

export function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Sobre a Brasmontagem</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Texto sobre a empresa baseado no catálogo */}
            <p className="text-gray-600 mb-6">
              A BRASMONTAGEM tem como objetivo solucionar e viabilizar os processos de revestimentos, com o menor custo
              benefício. Nossos revestimentos em fibra de vidro são indicados para os mais diversos ataques químicos,
              proporcionando longevidade aos equipamentos.
            </p>
            <p className="text-gray-600 mb-6">
              Utilizamos as resinas ester 411-350 E470, de acordo com as recomendações do fabricante, visando barreira
              química (liner) e as altas temperaturas que variam de 80 °C a 100 °C.
            </p>
            <p className="text-gray-600">
              Nossa equipe é certificada através das Normas de Regulamentações NR 06, 12, 18, 33 e 35, garantindo a mais
              alta qualidade e segurança em todos os nossos projetos.
            </p>
          </div>
          {/* Imagem do catálogo */}
          <div className="relative h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/57d4217d-8337-4c07-9e27-702e95ee56f2.jpg-9FKh7Q6JpjPC5XFnliV0BSEiZncEBn.jpeg"
              alt="Serviços Brasmontagem"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

