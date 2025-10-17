import React from 'react';

interface MyLinksProps {
  imageLink: string;
  placeHolder: string;
  link: string;
  className?: string;
}

export default function MyLinks({ imageLink, placeHolder, link, className = "" }: MyLinksProps) {
  return (
    <div className='relative group'>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 hover-lift group-hover:scale-110">
          {/* Arrière-plan avec gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Bordure animée */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-300"></div>
          
          {/* Image avec padding et effet */}
          <div className={`w-full h-full p-2 flex items-center justify-center ${className}`}>
            <img 
              src={imageLink} 
              alt={placeHolder}
              className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          
          {/* Effet de brillance au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </div>
      </a>
      
      {/* Tooltip amélioré */}
      <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50'>
        <div className='relative'>
          <div className='bg-black/90 backdrop-blur-sm text-white text-sm font-medium py-2 px-3 rounded-lg border border-white/20 shadow-xl'>
            {placeHolder}
          </div>
          {/* Flèche du tooltip */}
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90'></div>
        </div>
      </div>
      
      {/* Effet de pulsation subtle */}
      <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 animate-ping"></div>
    </div>
  );
}
