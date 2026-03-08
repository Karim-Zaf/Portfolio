"use client";
import React from 'react'
import { useLanguage } from '../Components/LanguageContext'
import Slidings from '../Components/Slidings';

export default function VideoEditingPage() {
  const { t } = useLanguage();
  const slides_video_editing = Array.from({ length: 2 }, (_, i) => i + 1);

  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      <div className="md:mt-20 mt-14 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('videoediting_title')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
      </div>

      <div className="w-full max-w-4xl mt-12">
        <div className='card-modern overflow-hidden'>
          <div className='px-6 py-4 bg-white/[0.03] border-b border-white/5'>
            <h3 className="text-lg font-semibold text-white">{t('videoediting_story_title')}</h3>
          </div>
          <div className='p-6 text-slate-300 leading-relaxed space-y-4'>
            <p>{t('videoediting_p1')}</p>
            <p>{t('videoediting_p2')}</p>
            <p>{t('videoediting_p3')}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Slidings paths={slides_video_editing.map((i) => `Video Editing/Video Editing ${i}.png`)} />
      </div>
    </div>
  )
}
