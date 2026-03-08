"use client";
import React from 'react';
import projects from './projects.json'
import { useLanguage } from '../Components/LanguageContext';

function Projects() {
  const { t, lang } = useLanguage() as { t: (k: string) => string, lang: 'en' | 'fr' };
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Header */}
      <div className="md:mt-20 mt-14 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('title_projects')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
        <p className='mt-6 text-lg md:text-xl text-slate-400 fade-in' style={{animationDelay: '0.2s'}}>
          {t('projects_subtitle')}
        </p>
      </div>

      {/* Projects grid */}
      <div className="w-full max-w-6xl mt-14 space-y-6">
        {projects.map(({ title, description, description_fr, technologies, imageLink, sourceCodeLink, webSiteLink }: any, index) => (
          <div
            key={index}
            className="stagger-item"
            style={{animationDelay: `${0.15 * (index + 1)}s`}}
          >
            <div className="card-modern overflow-hidden">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="lg:w-[45%] w-full relative group overflow-hidden bg-slate-900/50 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                  <img
                    src={imageLink}
                    alt={title}
                    className='w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 p-4'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="lg:w-[55%] w-full p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
                    {title}
                  </h3>

                  <p className='text-slate-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3'>
                    {lang === 'fr' && description_fr ? description_fr : description}
                  </p>

                  {/* Technologies */}
                  <div className='mb-5'>
                    <div className='flex flex-wrap gap-2'>
                      {technologies.map((technology: string) => (
                        <span
                          key={technology}
                          className='px-2.5 py-1 bg-white/5 text-slate-300 rounded-md text-xs font-medium border border-white/10 hover:border-slate-400/30 transition-colors'
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex gap-3'>
                    {sourceCodeLink && (
                      <a
                        href={sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        {t('cta_source_code')}
                      </a>
                    )}
                    {webSiteLink && (
                      <a
                        href={webSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        {t('cta_view_site')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center slide-up" style={{animationDelay: '1s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {t('cta_more_projects')}
          </h3>
          <p className="text-slate-400 mb-6">
            {t('projects_cta_paragraph')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/Karim-Zaf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover-lift"
            >
              {t('cta_view_github')}
            </a>
            <a
              href="/contact"
              className="btn-secondary hover-lift"
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
