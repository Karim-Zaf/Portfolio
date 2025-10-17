import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import certificates from './cerficates.json'
import Certificate from './Certificate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Certificates() {
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-32 mt-20 relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">Mes Certificats</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>
      
      {/* Sous-titre */}
      <div className='mt-8 text-xl md:text-2xl text-gray-400 mb-16 text-center max-w-3xl fade-in' style={{animationDelay: '0.2s'}}>
        Découvrez mes certifications et accomplissements académiques 🏆
      </div>
      
      {/* Section des certificats */}
      <div className='w-full max-w-4xl slide-up' style={{animationDelay: '0.4s'}}>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {certificates.map(({ title, skills, ImageLink, Provider, WebSiteLink }, index) => (
            <AccordionItem 
              key={`${title}-${index}`}
              value={`item-${index}`}
              className='card-modern border-none hover-lift stagger-item'
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <AccordionTrigger className='w-full flex items-center gap-4 p-6 hover:no-underline group'>
                {/* Logo du provider */}
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white to-gray-100 p-3 shadow-lg">
                    <img
                      src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
                      alt={`${Provider} logo`}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  {/* Badge décoratif */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                </div>

                {/* Informations du certificat */}
                <div className='flex-1 text-left'>
                  <h3 className='text-xl md:text-2xl font-bold text-gradient-primary mb-2 group-hover:text-gradient-accent transition-all duration-300'>
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span 
                        key={`${skill}-${skillIndex}`}
                        className='px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-400/50 transition-all duration-300'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icône d'expansion */}
                <div className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                  <span className="group-data-[state=open]:rotate-180 transition-transform duration-300 inline-block">
                    ⌄
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className='px-6 pb-6'>
                <div className="mt-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  {/* Image du certificat */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={`Certificates/${ImageLink}`} 
                      alt={title} 
                      className='w-full h-auto rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105' 
                    />
                    
                    {/* Overlay avec bouton */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                        <span className="text-white font-medium">Cliquer pour agrandir</span>
                      </div>
                    </div>
                  </div>

                  {/* Informations supplémentaires */}
                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-sm">🏢</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Délivré par</p>
                        <p className="font-semibold text-white">{Provider}</p>
                      </div>
                    </div>

                    {WebSiteLink && (
                      <a
                        href={WebSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-modern px-6 py-2 text-sm hover-lift bg-gradient-to-r from-blue-500 to-purple-600"
                      >
                        🌐 Voir en ligne
                      </a>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Section Call to Action */}
      <div className="mt-20 text-center slide-up" style={{animationDelay: '0.8s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-4">
            Formation continue 📚
          </h3>
          <p className="text-gray-300 mb-6">
            Je continue d'enrichir mes compétences avec de nouvelles formations et certifications régulièrement !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="btn-modern inline-block hover-lift"
            >
              Voir mes compétences 💻
            </a>
            <a
              href="/contact"
              className="btn-modern inline-block hover-lift bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Discuter formation 🎓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;

