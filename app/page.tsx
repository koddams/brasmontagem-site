'use client';
import { motion } from 'framer-motion';
import Header from '@/components/nav-header';
import { services } from '@/components/services';

export default function Home() {
  return (
    <>
      <Header />

      {/* Seção Hero */}
      <section className="pt-32 pb-48 bg-industrial-pattern bg-cover">
        <div className="container mx-auto px-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50,}}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-title font-bold text-white mb-6"
            
          >
            <span className="block text-accent mb-4">Brasmontagem</span>
            Laminação em fibra de vidro Ltda
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Especialistas em soluções complexas desde 2008
          </motion.p>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="py-20 bg-white/0">
        <div className="container mx-auto px-2 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-center text-white mb-16">
            Nossos Serviços Técnicos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" }}}
                
                className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm w-full"
                style={{
                  willChange: 'transform',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="mb-6 text-accent">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Especializações */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-96 bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -100}}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }}}
            >
            <div className="absolute inset-0 z-[999] bg-[url('/images/torre-hero.jpg')] bg-cover mix-blend-overlay"/>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }}}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-title font-bold text-white">
                Nossa Expertise
                <span className="text-accent block mt-2">Áreas de Atuação</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Tubulações de Alta Pressão',
                  'Sistemas de Contenção Química',
                  'Estruturas Anticorrosivas',
                  'Proteção Térmica'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}