'use client';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-primary/95 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-title font-bold text-accent">BRAS</span>
          <span className="text-2xl font-title font-bold text-white">MONTAGEM</span>
        </motion.div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          {['Serviços', 'Projetos', 'Contato'].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ color: '#F59E0B' }}
              className="text-gray-300 hover:text-accent transition-colors cursor-pointer"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Overlay Mobile */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col items-end">
              <button 
                className="mb-8 text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              <div className="w-full space-y-6 text-right">
                {['Serviços', 'Projetos', 'Contato'].map((item, index) => (
                  <a
                    key={index}
                    className="block text-2xl text-white hover:text-accent"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}