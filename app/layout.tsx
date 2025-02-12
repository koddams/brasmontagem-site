import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Brasmontagem - Soluções Industriais',
  description: 'Especialistas em projetos complexos com fibra de vidro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="bg-primary antialiased">
        {children}
      </body>
    </html>
  );
}