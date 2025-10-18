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
  const slides_instructor = Array.from({ length: 6 }, (_, i) => i + 1);
  const slides_TCPC_2025 = Array.from({ length: 4 }, (_, i) => i + 1);
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
      {/* Hero section */}
      <section className="w-full max-w-6xl px-4 mt-24 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight title-with-particles">
          <span className="text-gradient-primary">Competitive Programming Journey</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          From early contests to national titles — a steady climb powered by persistence, teamwork, and love for problem solving.
        </p>
        <div className="mt-8">
          <Slidings paths={fichiers.map((_image)=>`Competitions/${_image}`)} />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-primary">1000+ </div>
            <div className="text-gray-400">Problems solved</div>
          </div>
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-accent">Top 5% </div>
            <div className="text-gray-400">Codeforces Candidate Master</div>
          </div>
          <div className="card-modern p-6">
            <div className="text-3xl font-bold text-gradient-primary">3 Years</div>
            <div className="text-gray-400">Active competing</div>
          </div>
        </div>
      </section>

      {/* Who are DIGA DIGA */}
      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Who are DIGA DIGA?
        </CardTitle>
        <CardContent className='p-6 flex flex-col gap-4'>
          <p>
            We are <strong>DIGA DIGA</strong>, a competitive programming team from the Higher Institute of Computer Science (ISI), part of Tunis El Manar University. Composed of Karim Zaafrani, Firas Briki, and Adem Ksouri, we thrive on solving challenging algorithmic problems and pushing our limits through competitions.
          </p>
          <p>
            Driven by a love for coding and teamwork, we actively compete in prestigious events such as the Tunisian Collegiate Programming Contest (TCPC 2025), where we became <strong>Tunisian Champions</strong> and qualified for the Africa and Arab Collegiate Programming Championship (ACPC).
          </p>
          <p>
            The name <strong>DIGA DIGA</strong> — meaning “slowly, slowly” in Tunisian dialect — reflects our philosophy: continuous, steady progress and the commitment to becoming a better version of ourselves with every challenge. Believe in yourself and in your dreams.
          </p>
        </CardContent>
      </Card>



      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium flex items-center gap-2 md:gap-8 border-b-4 pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">TCPC 2025</span>
      </h2>

      <div className="mb-12">
        <Slidings paths={slides_TCPC_2025.map((i)=>{
          return `Competitions/TCPC 2025/TCPC_${i}.jpg`;
        })}></Slidings>
      </div>

      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Tunisian Champion — TCPC 2025 🏆
        </CardTitle>
        <CardContent className='p-6 flex flex-col gap-4'>
          <p>
            A dream comes true! Our team <strong>DIGA DIGA</strong> secured first place in the Tunisian Collegiate Programming Contest (TCPC 2025) and will represent Tunisia and the Higher Institute of Computer Science (ISI) at the ACPC — Africa and Arab Collegiate Programming Championship in Luxor, Egypt.
          </p>
          <div className='space-y-1'>
            <p>1st year — we didn’t qualify for ACPC</p>
            <p>2nd year — we qualified as the last team</p>
            <p>3rd year — Tunisian Champions</p>
          </div>
          <p>
            The name <strong>DIGA DIGA</strong>, meaning “slowly slowly” in Tunisian dialect, reflects our philosophy: continuous, steady progress and the commitment to becoming a better version of ourselves with every challenge. Believe in yourself and in your dreams.
          </p>
        </CardContent>
      </Card>

      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">ACPC 2024</span>
      </h2>
      
      <div className="mb-12">
        <Slidings paths={slides_ACPC.map((i)=>{
          return `Competitions/ACPC 2024/ACPC_${i}.jpg`;
        })}></Slidings>
      </div>
   
         
      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">TCPC 2024</span>
      </h2>

      <div className="mb-12">
        <Slidings paths={slides_TCPC.map((i)=>{
          return `Competitions/TCPC 2024/TCPC_${i}.jpg`;
        })}></Slidings>
      </div>

      <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-4xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold title-with-particles pb-2 mt-12 mb-8">
        <span className="text-gradient-primary">Competitive Programming Highlights</span>
      </h2>
      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Problem Solving & Weekly Contests
        </CardTitle>
        <CardContent className='p-6 flex flex-col'>
          I regularly take part in weekly contests to sharpen my skills and learn new techniques.
          <div className='flex flex-wrap gap-2 mt-2'> Platforms:
            <a href="https://codeforces.com/profile/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>Codeforces</a>, 
            <a href="https://atcoder.jp/users/Kairm_Zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>AtCoder</a>, and 
            <a href="https://www.codechef.com/users/kairm_zaf" target="_blank" rel="noopener noreferrer" className=' underline text-purple-400'>CodeChef</a>.
        </div>
          Recently, I became a Candidate Master on Codeforces (top 5%). This milestone reflects consistent progress, stronger algorithmic knowledge, and faster implementation.
          <br/>
          Problem solving resonates deeply with my CS studies: it boosts my ability to write clean, efficient code and to optimize programs across projects.
        </CardContent>
      </Card>
      
      <Card className='lg:w-[1000px] w-[90%] mb-12 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          Sharing Knowledge & Inspiring Others
        </CardTitle>
        <CardContent className='p-6 flex'>
        I also share knowledge with younger students through workshops (with Freeways Club) on problem-solving and algorithms, and I publish recordings of contests on my YouTube channel to demystify strategies and motivate others to embrace competitive programming.
        </CardContent>
      </Card>

      <Slidings paths={slides_instructor.map((i)=>{
        return `Instructor/Instructor_${i}.png`;
      })}></Slidings>   

    </div>    
  );
}