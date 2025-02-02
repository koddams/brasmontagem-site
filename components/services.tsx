// Componente de Serviços
// Documentação Lucide Icons: https://lucide.dev/docs/lucide-react
import { Shield, Factory, Droplet, Truck, PenToolIcon as Tool, Wrench } from "lucide-react"
import { SectionTitle } from "./section-title"

export function Services() {
  // Array de serviços baseado no catálogo da empresa
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "Revestimentos Anticorrosivos",
      description:
        "Revestimentos com Resinas Ester Vinílica, reforçada com fibra de vidro em diques, canaletas, base de bombas, colunas, muretas e outros.",
    },
    {
      icon: <Factory className="w-12 h-12 text-primary mb-4" />,
      title: "Montagens de Tubulações",
      description:
        "Montagens de tubulações com isométricos, emendas, reparos e outros. Aplicações em estruturas do setor de saneamento básico.",
    },
    {
      icon: <Tool className="w-12 h-12 text-primary mb-4" />,
      title: "Revestimentos Especiais",
      description:
        "Pinturas em estruturas metálicas com tinta epóxi, fenólica, PU, ideal para ambientes altamente comprometidos com corrosão.",
    },
    {
      icon: <Truck className="w-12 h-12 text-primary mb-4" />,
      title: "Revestimentos em Tanques",
      description:
        "Serviços de reliners com reforço mecânico interno em tanques de PRFV e revestimentos em tanques rodoviários.",
    },
    {
      icon: <Droplet className="w-12 h-12 text-primary mb-4" />,
      title: "Proteção Industrial",
      description:
        "Soluções para os mais diversos ataques químicos, proporcionando longevidade aos equipamentos utilizando resinas ester 411-350 E470.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
      title: "Manutenção Industrial",
      description:
        "Serviços especializados para indústrias químicas, papel e celulose, fertilizantes, siderúrgicas e alimentícios.",
    },
  ]

  return (
    // Seção de serviços com fundo claro e padding vertical
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Nossos Serviços</SectionTitle>
        {/* Grid responsivo de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            // Card individual de serviço
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

