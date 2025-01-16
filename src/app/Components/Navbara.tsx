'use client';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

function Navbara() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['home', 'about', 'projects', 'certificates', 'contact'];
  const router = useRouter();
  const pathname = usePathname(); // Récupère le chemin actuel (ex: "/contact")

  const navigateTo = (option: string) => {
    const route = `/${option==="home"? "":option}`;
    router.push(route); // Redirige vers la route
    setIsOpen(false); // Ferme le menu mobile (si ouvert)
  };

  return (
    <div className="h-16 fixed right-0 top-0 w-screen shadow-md flex justify-between items-center px-8 border-b-2 border-b-slate-300 z-50 mb-24 bg-stone-950">
      <div className="text-2xl font-bold">
        <Logo />
      </div>
      <div className="hidden md:flex space-x-8">
        {options.map((option) => (
          <Button
            onClick={() => navigateTo(option)}
            key={option}
            className={cn(
              "font-bold hover:text-indigo-400 transition duration-300 capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white",
             ( pathname === `/${option}` || pathname ==='/' && option === "home") &&
                "border-b-2 border-b-indigo-800 bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 via-indigo-200 to-white"
            )}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-stone-950 shadow-md flex flex-col items-center space-y-4 py-4">
          {options.map((option) => (
            <Button
              onClick={() => navigateTo(option)}
              key={option}
              className={cn(
                "font-bold hover:text-indigo-400 transition duration-300 capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white",
                ( pathname === `/${option}` || pathname ==='/' && option === "home") &&
                  "border-b-2 border-b-indigo-800 bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 via-indigo-200 to-white"
              )}
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbara;
