import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from '../LanguageContext';
import MyLinks from '../MyLinks';

function HomePage() {
  const { t, ta } = useLanguage();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center section-padding relative'>
      {/* Container principal avec animation */}
      <div className='flex justify-center items-center gap-12 flex-col fade-in relative z-20'>
        
        {/* Profile photo - sober effect */}
        <div className='relative group'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-lg transition-opacity duration-500'></div>
          <img
            src='identity_picture.jpeg'
            className='relative z-10 rounded-full w-[240px] h-[240px] md:w-[260px] md:h-[260px] object-cover shadow-xl transition-all duration-300'
            alt='Karim Zaafrani'
          />
        </div>

        {/* Nom avec effet moderne */}
        <div className="relative flex flex-col justify-center items-center z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight slide-up">
            <span className="text-gradient-primary">
              Karim Zaafrani
            </span>
          </h1>
          
          {/* Ligne décorative */}
          <div className="mt-4 w-28 h-[2px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full"></div>
        </div>

        {/* Typewriter avec style amélioré */}
        <div className="relative zoom-in">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            <span className="text-gradient-accent">
              <Typewriter
                words={ta('home_words')}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          
          {/* Effet de particules sous le texte */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        </div>

        {/* CV button modernized (silver theme) */}
        <div className="relative group slide-up" style={{animationDelay: '0.3s'}}>
          <a
            href='Karim_Zaafrani_Resume.pdf'
            download
            className='inline-flex items-center gap-3 btn-primary hover-lift'
          >
            <span>📄</span>
            <span>{t('cta_download_resume')}</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-6 mt-6 slide-up" style={{animationDelay: '0.5s'}}>
          <div className="group relative">
            <MyLinks 
              imageLink="SocialMedia/LinkedIn.png" 
              placeHolder="LinkedIn" 
              link="https://www.linkedin.com/in/karim-zaafrani-148868209/" 
            />
          </div>
          
          <div className="group relative">
            <MyLinks 
              imageLink="SocialMedia/codeforces.webp" 
              placeHolder="Codeforces" 
              link="https://codeforces.com/profile/Kairm_Zaf" 
            />
          </div>
          
          <div className="group relative">
            <MyLinks 
              imageLink="SocialMedia/github.png" 
              placeHolder="Github" 
              link="https://github.com/Karim-Zaf" 
              className="bg-black" 
            />
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 slide-up" style={{animationDelay: '0.7s'}}>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">{t('stats_projects_label')}</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-accent group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">{t('stats_years_exp_label')}</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">{t('stats_certificates_label')}</div>
          </div>
        </div>
      </div>

      {/* Decorative elements removed for a professional look */}
    </div>
  );
}

export default HomePage;
