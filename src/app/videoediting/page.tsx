"use client";
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useLanguage } from '../Components/LanguageContext'
import Slidings from '../Components/Slidings';

export default function page() {
  const { t } = useLanguage();
  const slides_video_editing = Array.from({ length: 2 }, (_, i) => i + 1);
 
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen '>
      <h2 className="md:mt-24 mt-16 md:mb-12 mb-6 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>{t('videoediting_title')}</span>
      </h2>

      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
            {t('videoediting_story_title')}
        </CardTitle>
        <CardContent className='p-6 flex gap-7'>
        {t('videoediting_p1')}
<br/>
        {t('videoediting_p2')}
<br/>
        {t('videoediting_p3')}
    </CardContent>
      </Card>
      
      <Slidings paths={slides_video_editing.map((i)=>{
        return `Video Editing/Video Editing ${i}.png`;
      })}></Slidings> 
    </div>
  )
}
