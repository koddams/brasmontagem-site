// app/layout.tsx
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { NavHeader } from '@/components/nav-header'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brasmontagem - Especialistas em Revestimentos Anticorrosivos',
  description: 'Soluções em revestimentos com resinas ester vinílica reforçada com fibra de vidro para proteção anticorrosiva em diversos segmentos industriais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-[#1F3B73] text-white font-serif antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NavHeader />
          
          <main className="pt-20"> {/* Espaço para o header fixo */}
            {children}
          </main>

          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}