import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import MyLinks from '../MyLinks';

function HomePage() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center section-padding relative'>
      {/* Container principal avec animation */}
      <div className='flex justify-center items-center gap-12 flex-col fade-in relative z-20'>
        
        {/* Photo de profil avec effet amélioré */}
        <div className='relative group'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500'></div>
          <img
            src='identity_picture.jpeg'
            className='relative z-10 rounded-full w-[280px] h-[280px] object-cover border-animated hover-lift shadow-2xl transition-all duration-300'
            alt='Karim Zaafrani'
          />
          {/* Cercles décoratifs */}
          <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-ping'></div>
          <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-ping' style={{animationDelay: '1s'}}></div>
        </div>

        {/* Nom avec effet moderne */}
        <div className="relative flex flex-col justify-center items-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight slide-up">
            <span className="text-gradient-primary title-with-particles">
              Karim Zaafrani
            </span>
          </h1>
          
          {/* Ligne décorative */}
          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Typewriter avec style amélioré */}
        <div className="relative zoom-in">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            <span className="text-gradient-accent">
              <Typewriter
                words={[
                  'Computer Science Student 👨‍🎓',
                  'Competitive Programmer 🏆',
                  'Full Stack Developer 💻',
                  'Machine Learning Enthusiast 🤖',
                  'Video Editor 🎬'
                ]}
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

        {/* Bouton de téléchargement moderne */}
        <div className="relative group slide-up" style={{animationDelay: '0.3s'}}>
          <a
            href='Karim_Zaafrani_Resume.pdf'
            download
            className='btn-modern relative overflow-hidden px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover-lift group'
          >
            <span className="relative z-10 flex items-center gap-3">
              📄 Télécharger CV
            </span>
            
            {/* Effet de brillance */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </a>
        </div>

        {/* Liens sociaux avec design moderne */}
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
              className="bg-white" 
            />
          </div>
        </div>

        {/* Section statistiques rapides */}
        <div className="grid grid-cols-3 gap-8 mt-12 slide-up" style={{animationDelay: '0.7s'}}>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">Projets</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-accent group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">Années d'exp.</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-1">Certificats</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full opacity-75">
          <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Scroll</div>
      </div>
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}

export default HomePage;
