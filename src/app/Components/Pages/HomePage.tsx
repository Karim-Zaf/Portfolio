import React from 'react';
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <>
      <div className='flex justify-center items-center gap-10 flex-col top-6'>
        
       
        <img
          src='identity_picture.jpeg'
          className='z-0 rounded-full w-[250px] border-animated'
        />
        <div className="relative flex flex-col justifys-center items-center md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white  gap-2 md:gap-8">
            <span>Karim Zaafrani</span>
            
        </div>
      </div>
      <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          <Typewriter
          words={[
            'Full Stack Developer',
            'Software Engineer',
            'Competitive Programmer',
          ]}
          loop
          
        /></div>
          
    </>
  );
}

export default HomePage;
