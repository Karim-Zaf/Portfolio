import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from '../LanguageContext';
import MyLinks from '../MyLinks';

function HomePage() {
  const { t, ta } = useLanguage();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center section-padding relative'>
      <div className='flex justify-center items-center gap-10 flex-col fade-in relative z-20 max-w-3xl'>

        {/* Profile photo */}
        <div className='relative group'>
          <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-slate-400/20 to-slate-600/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700'></div>
          <img
            src='identity_picture.jpeg'
            className='relative z-10 rounded-full w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-cover shadow-2xl ring-2 ring-white/10 transition-all duration-500'
            alt='Karim Zaafrani'
          />
        </div>

        {/* Name */}
        <div className="relative flex flex-col justify-center items-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight slide-up">
            <span className="text-gradient">
              Karim Zaafrani
            </span>
          </h1>
          <div className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>

        {/* Typewriter */}
        <div className="relative zoom-in">
          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-slate-300">
            <Typewriter
              words={ta('home_words')}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 slide-up" style={{animationDelay: '0.3s'}}>
          <a
            href='Karim_Zaafrani_Resume.pdf'
            download
            className='btn-primary hover-lift text-center'
          >
            {t('cta_download_resume')}
          </a>
          <a
            href='/contact'
            className='btn-secondary hover-lift text-center'
          >
            {t('about_cta_button_contact')}
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-5 mt-4 slide-up" style={{animationDelay: '0.5s'}}>
          <MyLinks
            imageLink="SocialMedia/LinkedIn.png"
            placeHolder="LinkedIn"
            link="https://www.linkedin.com/in/karim-zaafrani-148868209/"
          />
          <MyLinks
            imageLink="SocialMedia/codeforces.webp"
            placeHolder="Codeforces"
            link="https://codeforces.com/profile/Kairm_Zaf"
          />
          <MyLinks
            imageLink="SocialMedia/github.png"
            placeHolder="Github"
            link="https://github.com/Karim-Zaf"
            className="bg-black"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-10 mt-8 slide-up" style={{animationDelay: '0.7s'}}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-sm text-slate-400 mt-1">{t('stats_projects_label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">3</div>
            <div className="text-sm text-slate-400 mt-1">{t('stats_years_exp_label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">30+</div>
            <div className="text-sm text-slate-400 mt-1">{t('stats_certificates_label')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
