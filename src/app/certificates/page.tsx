"use client";
import React from 'react';
import { useLanguage } from '../Components/LanguageContext';
import certificates from './cerficates.json'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Certificates() {
  const { t } = useLanguage();
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      <div className="md:mt-20 mt-14 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('title_certificates')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
        <p className='mt-6 text-lg md:text-xl text-slate-400 fade-in' style={{animationDelay: '0.2s'}}>
          {t('certificates_subtitle')}
        </p>
      </div>

      <div className='w-full max-w-3xl mt-12 slide-up' style={{animationDelay: '0.4s'}}>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {certificates.map(({ title, skills, ImageLink, Provider, WebSiteLink }, index) => (
            <AccordionItem
              key={`${title}-${index}`}
              value={`item-${index}`}
              className='card-modern border-none stagger-item'
              style={{animationDelay: `${0.08 * index}s`}}
            >
              <AccordionTrigger className='w-full flex items-center gap-4 p-4 hover:no-underline group'>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-white p-2">
                    <img
                      src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
                      alt={`${Provider} logo`}
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>
                <div className='flex-1 text-left'>
                  <h3 className='text-base md:text-lg font-semibold text-white mb-1'>
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={`${skill}-${skillIndex}`}
                        className='px-2 py-0.5 bg-white/5 text-slate-400 rounded text-xs border border-white/5'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className='px-4 pb-4'>
                <div className="mt-2 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={`Certificates/${ImageLink}`}
                      alt={title}
                      className='w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]'
                    />
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white p-1.5">
                        <img
                          src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
                          alt={Provider}
                          className='w-full h-full object-contain'
                        />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{t('issued_by')}</p>
                        <p className="text-sm font-medium text-white">{Provider}</p>
                      </div>
                    </div>
                    {WebSiteLink && (
                      <a
                        href={WebSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        {t('cta_view_online')}
                      </a>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 text-center slide-up" style={{animationDelay: '0.8s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('certificates_cta_title')}
          </h3>
          <p className="text-slate-400 mb-6">{t('certificates_cta_text')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/about" className="btn-primary hover-lift">{t('certificates_cta_skills')}</a>
            <a href="/contact" className="btn-secondary hover-lift">{t('certificates_cta_training')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
