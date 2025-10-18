'use client';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

function Navbara() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { lang, setLang, t } = useLanguage();
  
  const options = [
    { name: t('nav_home'), key: 'home', icon: '🏠' },
    { name: t('nav_about'), key: 'about', icon: '👤' },
    { name: t('nav_projects'), key: 'projects', icon: '💻' },
    { name: t('nav_certificates'), key: 'certificates', icon: '🏆' },
    { name: t('nav_competitions'), key: 'competitions', icon: '🎯' },
    { name: t('nav_videoediting'), key: 'videoediting', icon: '🎬' },
    { name: t('nav_contact'), key: 'contact', icon: '📧' }
  ];
  
  const router = useRouter();
  const pathname = usePathname();
  
  // Effet de scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigateTo = (option: string) => {
    const route = `/${option === "home" ? "" : option.toLowerCase().replace(/\s+/g, '')}`;
    router.push(route);
    setIsOpen(false);
  };

  const isActive = (optionKey: string) => {
    return pathname === `/${optionKey.toLowerCase().replace(/\s+/g, '')}` || 
           (pathname === '/' && optionKey === "home");
  };

  return (
    <>
      {/* Navbar principale */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'glass border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 fade-in">
              <Logo />
            </div>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {options.map((option, index) => (
                <button
                  key={option.key}
                  onClick={() => navigateTo(option.key)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group hover-lift",
                    "text-sm lg:text-base",
                    isActive(option.key)
                      ? "text-white bg-white/10 border border-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">{option.icon}</span>
                    {option.name}
                  </span>
                  
                  {/* Effet de background au hover */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl transition-all duration-300",
                    "bg-gradient-to-r from-blue-500/20 to-purple-600/20",
                    "opacity-0 group-hover:opacity-100",
                    isActive(option.key) && "opacity-100"
                  )}></div>
                  
                  
                </button>
              ))}
              {/* Language switch (segmented EN/FR) */}
              <div className="ml-3 select-none" aria-label="Language switcher">
                <div className="glass rounded-xl p-0.5 flex items-center gap-0.5 border border-white/15">
                  <button
                    onClick={() => setLang('en')}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-semibold transition',
                      lang === 'en' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('fr')}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-semibold transition',
                      lang === 'fr' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    FR
                  </button>
                </div>
              </div>
            </div>

            {/* Menu hamburger mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 group"
              >
                <div className="flex flex-col items-center justify-center w-5 h-5">
                  <span className={cn(
                    "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  )}></span>
                  <span className={cn(
                    "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}></span>
                  <span className={cn(
                    "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  )}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden",
          isOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0"
        )}>
          <div className="glass border-t border-white/10 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-1 gap-2">
                {options.map((option, index) => (
                  <button
                    key={option.key}
                    onClick={() => navigateTo(option.key)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-left group",
                      "stagger-item",
                      isActive(option.key)
                        ? "text-white bg-white/15 border border-white/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    )}
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-lg">{option.name}</span>
                    
                    {/* Flèche indicative */}
                    <div className={cn(
                      "ml-auto transition-transform duration-300",
                      "group-hover:translate-x-1"
                    )}>
                      →
                    </div>
                  </button>
                ))}
                <div className="pt-2">
                  <div className="w-full flex items-center justify-center">
                    <div className="glass rounded-xl p-0.5 flex items-center gap-0.5 border border-white/15">
                      <button
                        onClick={() => setLang('en')}
                        className={cn(
                          'px-4 py-2 rounded-lg text-sm font-semibold transition',
                          lang === 'en' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
                        )}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLang('fr')}
                        className={cn(
                          'px-4 py-2 rounded-lg text-sm font-semibold transition',
                          lang === 'fr' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
                        )}
                      >
                        FR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer réduit */}
      <div className="h-8"></div>
    </>
  );
}

export default Navbara;
