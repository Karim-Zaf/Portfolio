"use client";
import React from 'react';
import { useLanguage } from '../Components/LanguageContext';
import Slidings from '../Components/Slidings';

export default function CompetitionsPage() {
  const { t } = useLanguage();
  const slides_ACPC = Array.from({ length: 28 }, (_, i) => i + 1);
  const slides_TCPC = Array.from({ length: 7 }, (_, i) => i + 1);
  const slides_instructor = Array.from({ length: 6 }, (_, i) => i + 1);
  const slides_TCPC_2025 = Array.from({ length: 4 }, (_, i) => i + 1);
  const slides_TCPC_2026 = Array.from({ length: 7 }, (_, i) => i + 1);
  const slides_ACPC_2025 = Array.from({ length: 13 }, (_, i) => i + 1);
  const fichiers = [
    "1706869629285.jpeg","ACPC_28.jpg","1709832494079.jpeg","1709832477599.jpeg",
    "1706869620538.jpeg","1716364310323.jpeg","1716364310891.jpeg",
    "1701548751804.jpeg","1701548753264.jpeg","1701548755967.jpeg","1701548757186.jpeg"
  ];

  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      <section className="w-full max-w-5xl mt-14 md:mt-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('competitions_hero_title')}</span>
        </h1>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto fade-in">
          {t('competitions_hero_subtitle')}
        </p>
        <div className="mt-10">
          <Slidings paths={fichiers.map((_image) => `Competitions/${_image}`)} />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card-modern p-5 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
            <div className="text-sm text-slate-400 mt-1">{t('competitions_stats_problems_label')}</div>
          </div>
          <div className="card-modern p-5 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">Top 5%</div>
            <div className="text-sm text-slate-400 mt-1">{t('competitions_stats_codeforces_label')}</div>
          </div>
          <div className="card-modern p-5 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">3 Years</div>
            <div className="text-sm text-slate-400 mt-1">{t('competitions_stats_years_label')}</div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mt-16">
        <div className='card-modern overflow-hidden'>
          <div className='px-6 py-4 bg-white/[0.03] border-b border-white/5'>
            <h3 className="text-lg font-semibold text-white">{t('who_are_diga_title')}</h3>
          </div>
          <div className='p-6 text-slate-300 leading-relaxed space-y-3'>
            <p>{t('who_are_diga_p1')}</p>
            <p>{t('who_are_diga_p2')}</p>
            <p>{t('who_are_diga_p3')}</p>
          </div>
        </div>
      </section>

      {/* TCPC 2026 — Featured */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('tcpc_2026_title')}</span>
        </h2>
        <div className="mb-8">
          <Slidings paths={slides_TCPC_2026.map((i) => `Competitions/TCPC 2026/TCPC_${i}.jpg`)} />
        </div>
        <div className='card-modern overflow-hidden'>
          <div className='px-6 py-4 bg-white/[0.03] border-b border-white/5'>
            <h3 className="text-lg font-semibold text-white">{t('tcpc_2026_card_title')}</h3>
          </div>
          <div className='p-6 text-slate-300 leading-relaxed space-y-3'>
            <p>{t('tcpc_2026_p1')}</p>
            <div className='space-y-1 pl-4 border-l-2 border-slate-600'>
              <p>{t('tcpc_2026_progress_1')}</p>
              <p>{t('tcpc_2026_progress_2')}</p>
              <p>{t('tcpc_2026_progress_3')}</p>
              <p className="text-white font-medium">{t('tcpc_2026_progress_4')}</p>
            </div>
            <p>{t('tcpc_2026_p2')}</p>
          </div>
        </div>
      </section>

      {/* TCPC 2025 */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('tcpc_2025_title')}</span>
        </h2>
        <Slidings paths={slides_TCPC_2025.map((i) => `Competitions/TCPC 2025/TCPC_${i}.jpg`)} />
      </section>
      {/* YouTube Content */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">{t('yt_section_title')}</span>
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          {t('yt_section_subtitle')}
        </p>

        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            {t('yt_acpc_vlog_title')}
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            {t('yt_acpc_vlog_desc')}
          </p>
          <div className="card-modern overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/BGPiTFrOQRM"
                title="ACPC 2025 Vlog"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            {t('yt_tcpc_corrections_title')}
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            {t('yt_tcpc_corrections_desc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'wjTfO1jJ8xA', title: 'TCPC 2025 Correction 1' },
              { id: 'ijixpIzi1HE', title: 'TCPC 2025 Correction 2' },
              { id: 'FVnEiGaWRiQ', title: 'TCPC 2025 Correction 3' },
            ].map((video) => (
              <div key={video.id} className="card-modern overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@karimzaf/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover-lift inline-block"
          >
            {t('yt_cta_channel')}
          </a>
        </div>
      </section>

      {/* ACPC 2025 */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('acpc_2025_title')}</span>
        </h2>
        <Slidings paths={slides_ACPC_2025.map((i) => `Competitions/ACPC 2025/ACPC_${i}.jpg`)} />
      </section>

      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('acpc_2024_title')}</span>
        </h2>
        <Slidings paths={slides_ACPC.map((i) => `Competitions/ACPC 2024/ACPC_${i}.jpg`)} />
      </section>

      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('tcpc_2024_title')}</span>
        </h2>
        <Slidings paths={slides_TCPC.map((i) => `Competitions/TCPC 2024/TCPC_${i}.jpg`)} />
      </section>

      <section className="w-full max-w-4xl mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gradient">{t('highlights_title')}</span>
        </h2>
        <div className="space-y-4">
          <div className='card-modern overflow-hidden'>
            <div className='px-6 py-4 bg-white/[0.03] border-b border-white/5'>
              <h3 className="text-lg font-semibold text-white">{t('highlights_card1_title')}</h3>
            </div>
            <div className='p-6 text-slate-300 leading-relaxed space-y-3'>
              <p>{t('highlights_card1_p1')}</p>
              <div className='flex flex-wrap gap-2 items-center'>
                <span>{t('highlights_card1_platforms_prefix')}</span>
                <a href="https://codeforces.com/profile/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className='underline text-slate-200 hover:text-white transition-colors'>Codeforces</a>,
                <a href="https://atcoder.jp/users/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className='underline text-slate-200 hover:text-white transition-colors'>AtCoder</a>, and
                <a href="https://www.codechef.com/users/kairm_zaf" target="_blank" rel="noopener noreferrer" className='underline text-slate-200 hover:text-white transition-colors'>CodeChef</a>.
              </div>
              <p>{t('highlights_card1_p2')}</p>
              <p>{t('highlights_card1_p3')}</p>
            </div>
          </div>
          <div className='card-modern overflow-hidden'>
            <div className='px-6 py-4 bg-white/[0.03] border-b border-white/5'>
              <h3 className="text-lg font-semibold text-white">{t('highlights_card2_title')}</h3>
            </div>
            <div className='p-6 text-slate-300 leading-relaxed'>
              <p>{t('highlights_card2_p1')}</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Slidings paths={slides_instructor.map((i) => `Instructor/Instructor_${i}.png`)} />
        </div>
      </section>
    </div>
  );
}
