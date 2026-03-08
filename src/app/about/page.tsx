"use client";
import React from 'react'
import skills from "./skills.json"
import { useLanguage } from '../Components/LanguageContext'

function About() {
  const { t } = useLanguage();
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      <div className="md:mt-20 mt-14 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('about_title')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
      </div>

      <div className="w-full max-w-4xl mt-12 slide-up" style={{animationDelay: '0.2s'}}>
        <div className="card-modern p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-5">{t('who_am_i_title')}</h3>
          <div className="text-base md:text-lg leading-relaxed text-slate-300 space-y-4">
            <p>{t('who_am_i_p1')}</p>
            <p>{t('who_am_i_p2')}</p>
            <p>{t('who_am_i_p3')}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('skills_title')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
      </div>

      <div className="w-full max-w-5xl space-y-3">
        {skills.map(({ category, technologies }, index) => (
          <div key={category} className="card-modern stagger-item" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-52 w-full bg-white/5 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-4 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                <h3 className="text-sm md:text-base font-semibold text-slate-300 text-center">
                  {category}
                </h3>
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                  {technologies.map((technology) => {
                    let technology_file = technology;
                    if (technology === "C++") technology_file = "cplusplus";
                    return (
                      <div key={technology} className="group relative w-11 h-11 flex-none">
                        <div className="relative w-full h-full rounded-lg bg-white/5 p-2 border border-white/5 group-hover:border-slate-400/30 transition-all duration-200 flex items-center justify-center">
                          <img
                            src={`technologies icons/${technology_file.toLowerCase()}.svg`}
                            alt={technology}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50'>
                          <div className='bg-slate-800 text-white text-xs font-medium py-1.5 px-2.5 rounded-md border border-white/10 whitespace-nowrap'>
                            {technology}
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

      <div className="mt-16 text-center slide-up" style={{animationDelay: '1.2s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('about_cta_title')}
          </h3>
          <p className="text-slate-400 mb-6">{t('about_cta_text')}</p>
          <a href="/contact" className="btn-primary inline-block hover-lift">
            {t('about_cta_button_contact')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
