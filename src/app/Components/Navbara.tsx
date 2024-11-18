import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Navbara({ currentPage, setPage }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['home', 'about', 'projects', 'contact', 'certificates','Competitions'];

  return (
    <div className="h-16 fixed right-0 top-0 w-screen shadow-md flex justify-between items-center px-8 border-b-2 border-b-slate-300  z-50">
      <div className="text-2xl font-bold">
        <Logo />
      </div>
      <div className="hidden md:flex space-x-8">
        {options.map((option) => (
          <Button
            onClick={() => setPage(option)}
            key={option}
            className={cn(
              "font-bold hover:text-indigo-400 transition duration-300 capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white",
              option === currentPage && "border-b-2 border-b-indigo-800 bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 via-indigo-200 to-white"
            )}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-950 shadow-md flex flex-col items-center space-y-4 py-4">
          {options.map((option) => (
            <Button
              onClick={() => {
                setPage(option);
                setIsOpen(false);
              }}
              key={option}
              className={cn(
                "font-bold hover:text-indigo-400 transition duration-300 capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white",
                option === currentPage && "border-b-2 border-b-indigo-800 bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 via-indigo-200 to-white"
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
