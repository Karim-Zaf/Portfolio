"use client";
import React from 'react';
import { useLanguage } from '../Components/LanguageContext';

function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      <div className="md:mt-20 mt-14 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-up">
          <span className="text-gradient">{t('contact_title')}</span>
        </h2>
        <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
        <p className='mt-6 text-lg md:text-xl text-slate-400 fade-in' style={{animationDelay: '0.2s'}}>
          {t('contact_subtitle')}
        </p>
      </div>

      <div className="w-full max-w-5xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="slide-up" style={{animationDelay: '0.4s'}}>
          <div className="card-modern p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{t('contact_keep_in_touch')}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">{t('contact_intro_text')}</p>

            <div className="space-y-4">
              <a href="mailto:kzaafrani@gmail.com" className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-slate-400/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <img src="/mail.svg" alt="Email" className="w-5 h-5 opacity-70" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t('contact_email_label_short')}</p>
                  <p className="text-sm text-white">kzaafrani@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/karim-zaafrani-148868209/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-slate-400/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <img src="/SocialMedia/LinkedIn.png" alt="LinkedIn" className="w-5 h-5 object-contain opacity-70" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t('contact_linkedin_label_short')}</p>
                  <p className="text-sm text-white">Karim Zaafrani</p>
                </div>
              </a>

              <a href="https://github.com/Karim-Zaf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-slate-400/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <img src="/SocialMedia/github.png" alt="GitHub" className="w-5 h-5 object-contain opacity-70" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t('contact_github_label_short')}</p>
                  <p className="text-sm text-white">@Karim-Zaf</p>
                </div>
              </a>

              <a href="https://www.youtube.com/@karimzaf/videos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-slate-400/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <img src="/SocialMedia/youtube.svg" alt="YouTube" className="w-5 h-5 object-contain opacity-70" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t('contact_youtube_label_short')}</p>
                  <p className="text-sm text-white">@karimzaf</p>
                </div>
              </a>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <div>
                  <p className="text-xs text-slate-500">{t('contact_response_time_title')}</p>
                  <p className="text-sm text-slate-300">{t('contact_response_time_value')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-up" style={{animationDelay: '0.6s'}}>
          <div className='card-modern p-6 lg:p-8'>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{t('contact_send_message')}</h3>
            <form action="https://api.web3forms.com/submit" method="POST" className='space-y-5'>
              <input type="hidden" name="access_key" value="0ae40cc4-6c26-41c6-ba33-a186a9a17886"/>
              <div>
                <label htmlFor='name' className='block text-slate-400 mb-2 text-sm font-medium'>{t('contact_full_name_label')}</label>
                <input type='text' id='name' name='name' required className='w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all text-sm' placeholder={t('contact_full_name_placeholder')} />
              </div>
              <div>
                <label htmlFor='email' className='block text-slate-400 mb-2 text-sm font-medium'>{t('contact_email_label')}</label>
                <input type='email' id='email' name='email' required className='w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all text-sm' placeholder={t('contact_email_placeholder')} />
              </div>
              <div>
                <label htmlFor='subject' className='block text-slate-400 mb-2 text-sm font-medium'>{t('contact_subject_label')}</label>
                <input type='text' id='subject' name='subject' className='w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all text-sm' placeholder={t('contact_subject_placeholder')} />
              </div>
              <div>
                <label htmlFor='message' className='block text-slate-400 mb-2 text-sm font-medium'>{t('contact_message_label')}</label>
                <textarea id='message' rows={5} name='message' required className='w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all text-sm resize-none' placeholder={t('contact_message_placeholder')}></textarea>
              </div>
              <button type='submit' className='w-full btn-primary py-3 font-semibold hover-lift'>
                {t('contact_send_message')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center slide-up" style={{animationDelay: '0.8s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{t('contact_follow_me_title')}</h3>
          <p className="text-slate-400 mb-6 text-sm">{t('contact_follow_me_subtitle')}</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/karim-zaafrani-148868209/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-slate-400/30 hover:bg-white/10 transition-all">
              <img src="/SocialMedia/LinkedIn.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://github.com/Karim-Zaf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-slate-400/30 hover:bg-white/10 transition-all">
              <img src="/SocialMedia/github.png" alt="GitHub" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://codeforces.com/profile/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-slate-400/30 hover:bg-white/10 transition-all">
              <img src="/SocialMedia/codeforces.webp" alt="Codeforces" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://www.youtube.com/@karimzaf/videos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-slate-400/30 hover:bg-white/10 transition-all">
              <img src="/SocialMedia/youtube.svg" alt="YouTube" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
