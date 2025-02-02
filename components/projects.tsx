import Image from "next/image"

export function Projects() {
  const projects = [
    { image: "/project1.jpg", title: "Revestimento de Tanque Industrial" },
    { image: "/project2.jpg", title: "Proteção Anticorrosiva em Planta Química" },
    { image: "/project3.jpg", title: "Laminação em Fibra de Vidro para Indústria Petroquímica" },
  ]

  return (
    <section id="projetos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Projetos Realizados</h2>{" "}
        {/* Updated text color */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-[300px] group overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-full flex items-center justify-center">
                  <p className="text-white text-lg font-semibold text-center px-4">{project.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

