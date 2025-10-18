"use client";
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import skills from "./skills.json"
import MyLinks from '../Components/MyLinks'
import { useLanguage } from '../Components/LanguageContext'

function About() {
  const { t } = useLanguage();
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-20 mt-14 relative flex-col md:flex-row z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">{t('about_title')}</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>

      {/* Section WHO AM I avec design moderne */}
      <div className="w-full max-w-5xl mt-12 slide-up" style={{animationDelay: '0.2s'}}>
        <div className="card-modern hover-lift p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gradient-accent">{t('who_am_i_title')}</h3>
          </div>
          
          <div className="text-base md:text-lg leading-relaxed text-gray-300 space-y-4">
            <p className="fade-in" style={{animationDelay: '0.4s'}}>
              {t('who_am_i_p1')}
            </p>
            
            <p className="fade-in" style={{animationDelay: '0.6s'}}>
              {t('who_am_i_p2')}
            </p>
            
            <p className="fade-in" style={{animationDelay: '0.8s'}}>
              {t('who_am_i_p3')}
            </p>
            
            
          </div>
        </div>
      </div>

      {/* Titre Skills avec animation */}
      <h2 className="mt-16 mb-10 relative z-10 text-4xl md:text-6xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-accent">{t('skills_title')}</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto"></div>
      </h2>

      {/* Grid des compétences */}
      <div className="w-full max-w-5xl space-y-4">
        {skills.map(({ category, technologies }, index) => (
          <div key={category} className={`card-modern hover-lift stagger-item`} style={{animationDelay: `${0.1 * (index + 1)}s`}}>
            <div className="flex flex-col lg:flex-row items-center">
              {/* Titre de catégorie */}
              <div className="lg:w-56 w-full bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-4 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-600">
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-gradient-primary">
                    {category}
                  </h3>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="flex-1 p-4">
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                  {technologies.map((technology, techIndex) => {
                    let technology_file = technology;
                    if (technology === "C++") technology_file = "cplusplus";
                    
                    return (
                      <div
                        key={technology}
                        className="group relative w-12 h-12 flex-none hover-lift"
                        style={{animationDelay: `${0.05 * techIndex}s`}}
                      >
                        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 p-2 border border-gray-600 group-hover:border-blue-400/50 transition-all duration-300 flex items-center justify-center">
                          <img
                            src={`technologies icons/${technology_file.toLowerCase()}.svg`}
                            alt={technology}
                            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                          />
                          
                          {/* Effet de lueur au hover */}
                          <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
                        </div>
                        
                        {/* Tooltip moderne */}
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50'>
                          <div className='relative'>
                            <div className='bg-black/90 backdrop-blur-sm text-white text-sm font-medium py-2 px-3 rounded-lg border border-white/20 shadow-xl whitespace-nowrap'>
                              {technology}
                            </div>
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90'></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section Call to Action */}
      <div className="mt-20 text-center slide-up" style={{animationDelay: '1.2s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-4">
            {t('about_cta_title')}
          </h3>
          <p className="text-gray-300 mb-6">
            {t('about_cta_text')}
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block hover-lift"
          >
            {t('about_cta_button_contact')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
