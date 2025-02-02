// Importação dos componentes necessários
// Next.js Image: https://nextjs.org/docs/api-reference/next/image
// Componentes customizados do projeto
import Image from "next/image"
import { NavHeader } from "@/components/nav-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Componente principal da página
// Layout básico com min-h-screen para garantir que o conteúdo ocupe toda a altura da tela
// https://tailwindcss.com/docs/min-height
export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

