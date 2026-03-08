'use client';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

function Navbara() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { lang, setLang, t } = useLanguage();

  const options = [
    { name: t('nav_home'), key: 'home' },
    { name: t('nav_about'), key: 'about' },
    { name: t('nav_projects'), key: 'projects' },
    { name: t('nav_certificates'), key: 'certificates' },
    { name: t('nav_competitions'), key: 'competitions' },
    { name: t('nav_videoediting'), key: 'videoediting' },
    { name: t('nav_contact'), key: 'contact' }
  ];

  const router = useRouter();
  const pathname = usePathname();

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
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollY > 50
          ? 'glass shadow-lg'
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {options.map((option) => (
                <button
                  key={option.key}
                  onClick={() => navigateTo(option.key)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(option.key)
                      ? "text-white bg-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {option.name}
                </button>
              ))}

              <div className="ml-4 flex items-center rounded-lg bg-white/5 p-0.5 border border-white/10">
                <button
                  onClick={() => setLang('en')}
                  className={cn(
                    'px-2.5 py-1 rounded-md text-xs font-medium transition-all',
                    lang === 'en' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('fr')}
                  className={cn(
                    'px-2.5 py-1 rounded-md text-xs font-medium transition-all',
                    lang === 'fr' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                  )}
                >
                  FR
                </button>
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
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

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="glass border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {options.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => navigateTo(option.key)}
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left",
                      isActive(option.key)
                        ? "text-white bg-white/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {option.name}
                  </button>
                ))}
                <div className="pt-2 flex justify-center">
                  <div className="flex items-center rounded-lg bg-white/5 p-0.5 border border-white/10">
                    <button
                      onClick={() => setLang('en')}
                      className={cn(
                        'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
                        lang === 'en' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                      )}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang('fr')}
                      className={cn(
                        'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
                        lang === 'fr' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
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
      </nav>

      <div className="h-16"></div>
    </>
  );
}

export default Navbara;
