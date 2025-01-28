"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Slidings from '../Components/Slidings';

export default function CompetitionsPage() {
  const slides_ACPC = Array.from({ length: 28 }, (_, i) => i + 1);
  const slides_TCPC = Array.from({ length: 7 }, (_, i) => i + 1);
  const slides_instructor = Array.from({ length: 4 }, (_, i) => i + 1);
  const fichiers = [
    
    "1706869629285.jpeg",
    "ACPC_28.jpg",
    "1709832494079.jpeg",
    "1709832477599.jpeg",
    "1706869620538.jpeg",
    "1716364310323.jpeg",
    "1716364310891.jpeg",
    "1701548751804.jpeg",
    "1701548753264.jpeg",
    "1701548755967.jpeg",
    "1701548757186.jpeg"
  ];
  
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen'>
      
    
      <h2 className="mt-24 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2 mb-8">
        <span>Diga Diga</span>
      </h2>

    <Slidings paths={fichiers.map((_image)=>{
        return `Competitions/${_image}`;
    })}></Slidings>
    

      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          WHO Are Diga Diga?
        </CardTitle>
        <CardContent className='p-6 flex gap-7'>
          We are DIGA DIGA, a competitive programming team from The Higher Institute of Computer Science, part of Tunis El Manar University. Comprising Karim Zaafrani, Firas Briki, and Adem Ksouri, we are passionate about solving challenging algorithmic problems and pushing our intellectual boundaries through competitive programming.
          <br/>
          Motivated by a love for coding and teamwork, we actively participate in prestigious competitions like the Tunisian Collegiate Programming Contest - TCPC 2024, where we recently ranked 6th in Tunisia and qualified for the African and Arabic finals. Beyond just competing, we aim to hone our problem-solving skills, represent Tunisia on the global stage, and inspire others in our institute and beyond to explore the exciting world of competitive programming.
        </CardContent>
      </Card>



      <h2 className=" relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2 mb-8">
        <span>ACPC 2024</span>
      </h2>
      
      <Slidings paths={slides_ACPC.map((i)=>{
        return `Competitions/ACPC 2024/ACPC_${i}.jpg`;
      })}></Slidings>
    
          
      <h2 className=" relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2 mb-8">
        <span>TCPC 2024</span>
      </h2>

      <Slidings paths={slides_TCPC.map((i)=>{
        return `Competitions/TCPC 2024/TCPC_${i}.jpg`;
      })}></Slidings>

      <h2 className=" relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2 mb-8">
        <span>My passion for Competitive Programming</span>
      </h2>
      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Problem Solving and Competitive Programming
        </CardTitle>
        <CardContent className='p-6 flex flex-col'>
          I have been passionate about problem solving and competitive programming for almost three years now. I enjoy learning new things through contests and improving my skills every week.
          <div className='flex flex-wrap gap-2'> I participate in weekly contests on popular platforms like 
            <a href="https://codeforces.com/profile/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-600'>Codeforces</a>, 
            <a href="https://atcoder.jp/users/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-600'>AtCoder</a>, and 
            <a href="https://www.codechef.com/users/kairm_zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-600'>CodeChef</a>.
        </div>
          Recently, I became a Candidate Master on Codeforces, which places me in the top 5% of competitive programmers worldwide. This achievement means a lot to me because I have learned many advanced algorithms and improved my thinking and coding speed.
          <br/>
          Problem solving matches my passion for computer science and my studies. It has helped me become faster and better at writing code and optimizing programs in all my projects.
        </CardContent>
      </Card>
      
      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Sharing Knowledge and Inspiring Others
        </CardTitle>
        <CardContent className='p-6 flex'>
        As part of my commitment to sharing knowledge with the next generation, I have taken on the role of an instructor in collaboration with the Freeways Club at my university. I conducted several sessions where I taught problem-solving techniques and algorithms. These sessions were recorded to make them accessible to a wider audience and to help students improve their skills.
        <br/>
        In addition, I run a personal YouTube channel where I share recordings of the contests I participate in. My goal is to inspire and motivate others by showing the strategies and approaches I use during competitions. I hope to encourage brilliant minds to dive into problem-solving and competitive programming.
        </CardContent>
      </Card>

      <Slidings paths={slides_instructor.map((i)=>{
        return `Instructor/Instructor_${i}.png`;
      })}></Slidings>   

    </div>    
  );
}