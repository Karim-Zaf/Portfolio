import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Navbara({ currentPage , setPage}: any) {
  let options =['home','about','projects','contact','certificates'];
  return (
    <div className="h-16 fixed right-0 top-0 w-screen shadow-md flex justify-center items-center px-8 border-b-2 border-b-slate-300">
      <div className="text-2xl font-bold absolute left-44"><Logo /></div>
      <div className="flex space-x-8">
        {options.map((option) => (
          <Button
            onClick={() => setPage(option)}
            key={option}
            className={cn(
              "font-bold hover:text-indigo-400 transition duration-300 capitalize bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white",option == currentPage && "border-b-2 border-b-indigo-800 bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 via-indigo-200 to-white"
            )}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Navbara;
