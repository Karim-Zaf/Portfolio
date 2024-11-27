import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import MyLinks from '../MyLinks';

function HomePage() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center '>
      <div className='flex justify-center items-center gap-10 flex-col top-6'>
        
       
        <img
          src='identity_picture.jpeg'
          className='z-0 rounded-full w-[250px] border-animated'
        />
        <div className="relative flex flex-col justifys-center items-center md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white  gap-2 md:gap-8">
            <span>Karim Zaafrani</span>
            
        </div>
      </div>
      <div className="h-10 text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          <Typewriter
          words={[
            'Computer Science Student',
            'Competitive Programmer',
            'Full Stack Developer'
          ]}
          loop
        /></div>
      <a
        href='Karim_Zaafrani_Resume.pdf'
        download
        className='mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300'
      >
        Download Resume
      </a>

      <div className='w-32 flex justify-between mt-4'>
          <MyLinks imageLink="SocialMedia/LinkedIn.png" placeHolder="Linkedin" link="https://www.linkedin.com/in/karim-zaafrani-148868209/" />
          <MyLinks imageLink="SocialMedia/codeforces.webp" placeHolder="Codeforces" link="https://codeforces.com/profile/Kairm_Zaf" />
          <MyLinks imageLink="SocialMedia/github.png" placeHolder="Github" link="https://github.com/Karim-Zaf" className="bg-white" />

      </div>
    </div>
  );
}

export default HomePage;
