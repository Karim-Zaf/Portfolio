"use client";
import React from 'react';
import { useLanguage } from '../Components/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Slidings from '../Components/Slidings';

export default function CompetitionsPage() {
  const { t } = useLanguage();
  const slides_ACPC = Array.from({ length: 28 }, (_, i) => i + 1);
  const slides_TCPC = Array.from({ length: 7 }, (_, i) => i + 1);
  const slides_instructor = Array.from({ length: 6 }, (_, i) => i + 1);
  const slides_TCPC_2025 = Array.from({ length: 4 }, (_, i) => i + 1);
  const fichiers = [
    
    "1706869629285.jpeg",
    "ACPC_28.jpg",
    "1709832494079.jpeg",
    "1709832477599.jpeg",
    "1706869620538.jpeg",
    "1716364310323.jpeg",
    "1716364310891.jpeg",
    "1701548751804.jpeg",
    "1701548753264.jpeg",
    "1701548755967.jpeg",
    "1701548757186.jpeg"
  ];
  
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen'>
      {/* Hero section */}
      <section className="w-full max-w-6xl px-4 mt-24 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight title-with-particles">
          <span className="text-gradient-primary">{t('competitions_hero_title')}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t('competitions_hero_subtitle')}
        </p>
        <div className="mt-8">
          <Slidings paths={fichiers.map((_image)=>`Competitions/${_image}`)} />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-primary">1000+ </div>
            <div className="text-gray-400">{t('competitions_stats_problems_label')}</div>
          </div>
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-accent">Top 5% </div>
            <div className="text-gray-400">{t('competitions_stats_codeforces_label')}</div>
          </div>
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-primary">3 Years</div>
            <div className="text-gray-400">{t('competitions_stats_years_label')}</div>
          </div>
        </div>
      </section>

      {/* Who are DIGA DIGA */}
      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          {t('who_are_diga_title')}
        </CardTitle>
        <CardContent className='p-6 flex flex-col gap-4'>
          <p>{t('who_are_diga_p1')}</p>
          <p>{t('who_are_diga_p2')}</p>
          <p>{t('who_are_diga_p3')}</p>
        </CardContent>
      </Card>



      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium flex items-center gap-2 md:gap-8 border-b-4 pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">{t('tcpc_2025_title')}</span>
      </h2>

      <div className="mb-12">
        <Slidings paths={slides_TCPC_2025.map((i)=>{
          return `Competitions/TCPC 2025/TCPC_${i}.jpg`;
        })}></Slidings>
      </div>

      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          {t('tcpc_2025_card_title')}
        </CardTitle>
        <CardContent className='p-6 flex flex-col gap-4'>
          <p>{t('tcpc_2025_p1')}</p>
          <div className='space-y-1'>
            <p>{t('tcpc_2025_progress_1')}</p>
            <p>{t('tcpc_2025_progress_2')}</p>
            <p>{t('tcpc_2025_progress_3')}</p>
          </div>
          <p>{t('tcpc_2025_p2')}</p>
        </CardContent>
      </Card>

      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">{t('acpc_2024_title')}</span>
      </h2>
      
      <div className="mb-12">
        <Slidings paths={slides_ACPC.map((i)=>{
          return `Competitions/ACPC 2024/ACPC_${i}.jpg`;
        })}></Slidings>
      </div>
   
         
      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">{t('tcpc_2024_title')}</span>
      </h2>

      <div className="mb-12">
        <Slidings paths={slides_TCPC.map((i)=>{
          return `Competitions/TCPC 2024/TCPC_${i}.jpg`;
        })}></Slidings>
      </div>

      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">{t('highlights_title')}</span>
      </h2>
      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          {t('highlights_card1_title')}
        </CardTitle>
        <CardContent className='p-6 flex flex-col'>
          {t('highlights_card1_p1')}
          <div className='flex flex-wrap gap-2 mt-2'> {t('highlights_card1_platforms_prefix')}
            <a href="https://codeforces.com/profile/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>Codeforces</a>, 
            <a href="https://atcoder.jp/users/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>AtCoder</a>, and 
            <a href="https://www.codechef.com/users/kairm_zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>CodeChef</a>.
        </div>
          {t('highlights_card1_p2')}
          <br/>
          {t('highlights_card1_p3')}
        </CardContent>
      </Card>
      
      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          {t('highlights_card2_title')}
        </CardTitle>
        <CardContent className='p-6 flex'>
        {t('highlights_card2_p1')}
        </CardContent>
      </Card>

      <Slidings paths={slides_instructor.map((i)=>{
        return `Instructor/Instructor_${i}.png`;
      })}></Slidings>   

    </div>    
  );
}