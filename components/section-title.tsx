// Componente reutilizável para títulos de seção
interface SectionTitleProps {
  children: React.ReactNode
  light?: boolean // Opção para texto claro em fundos escuros
}

export function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <h2
      className={`
        text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block
        after:content-[''] after:block after:w-1/2 after:h-1 after:bg-secondary 
        after:absolute after:-bottom-4 after:left-1/4
        ${light ? "text-white" : "text-primary"}
      `}
    >
      {children}
    </h2>
  )
}

