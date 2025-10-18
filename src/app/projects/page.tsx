"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import projects from './projects.json'
import { useLanguage } from '../Components/LanguageContext';

function Projects() {
  const { t, lang } = useLanguage() as { t: (k: string) => string, lang: 'en' | 'fr' };
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-20 mt-14 relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">{t('title_projects')}</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>
      
      {/* Sous-titre */}
      <div className='mt-6 text-xl md:text-2xl text-gray-400 mb-14 text-center max-w-3xl fade-in' style={{animationDelay: '0.2s'}}>
        {t('projects_subtitle')}
      </div>

      {/* Grid des projets (wide but low height) */}
      <div className="w-full max-w-7xl space-y-8">
        {projects.map(({ title, description, description_fr, technologies, imageLink, sourceCodeLink, webSiteLink }: any, index) => (
          <div 
            key={index} 
            className={`stagger-item ${index % 2 === 0 ? 'fade-in' : 'slide-up'}`}
            style={{animationDelay: `${0.2 * (index + 1)}s`}}
          >
            <div className={`card-modern hover-lift overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex flex-col lg:flex-row w-full lg:items-stretch">
                {/* Image du projet */}
                <div className="lg:w-1/2 w-full relative group overflow-hidden flex items-center justify-center bg-black/10 rounded-xl h-full min-h-[220px] lg:min-h-[320px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={imageLink} 
                    alt={title} 
                    className='w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 cursor-zoom-in p-2' 
                  />
                  {/* Overlay avec icône */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl">👁️</span>
                    </div>
                  </div>
                </div>

                {/* Contenu du projet (compact) */}
                <div className="lg:w-1/2 w-full p-5 lg:p-6 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-gradient-primary'>
                        {title}
                      </h3>
                    </div>
                    
                    <p className='text-gray-300 text-base md:text-lg leading-relaxed mb-3 line-clamp-3'>
                      {lang === 'fr' && description_fr ? description_fr : description}
                    </p>
                    
                    {/* Technologies */}
                    <div className='mb-6'>
                      <h4 className="text-xs md:text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">{t('technologies_label')}</h4>
                      <div className='flex flex-wrap gap-2'>
                        {technologies.map((technology: string, techIndex: number) => (
                          <span 
                            key={technology} 
                            className='px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-xs md:text-sm font-medium border border-gray-600 hover:border-blue-400/50 transition-all duration-300 hover-lift'
                            style={{animationDelay: `${0.05 * techIndex}s`}}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className='btn-primary flex items-center justify-center gap-2 min-w-[130px]'>
                        <span>💻</span>
                        {t('cta_source_code')}
                      </div>
                    </a>
                    
                    <a
                      href={webSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className='btn-primary flex items-center justify-center gap-2 min-w-[130px]'>
                        <span>🌐</span>
                        {t('cta_view_site')}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Call to Action (compact + localized) */}
      <div className="mt-14 text-center slide-up" style={{animationDelay: '1s'}}>
        <div className="card-modern p-6 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-3">
            {t('cta_more_projects')}
          </h3>
          <p className="text-gray-300 mb-5 text-base md:text-lg">
            {t('projects_cta_paragraph')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Karim-Zaf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block hover-lift"
            >
              {t('cta_view_github')}
            </a>
            <a
              href="/contact"
              className="btn-primary inline-block hover-lift"
            >
              {t('cta_collaborate')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
