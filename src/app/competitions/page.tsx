"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function CompetitionsPage() {
  const slides = Array.from({ length: 28 }, (_, i) => i + 1);
  const fichiers = [
    "ACPC_28.jpg",
    "1706869629285.jpeg",
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

      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="mb-8 md:w-[900px] w-[90%] md:h-[500px] h-[300px]"
      >
        {fichiers.map((image_) => (
          <SwiperSlide key={image_}>
            <img src={`Competitions/${image_}`} alt={`Slide ${image_}`} className='md:w-[900px] w-[90%] md:h-[500px] h-[300px] object-cover rounded-3xl' />
          </SwiperSlide>
        ))}
      </Swiper>

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
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mb-8 md:w-[900px] w-[90%] md:h-[500px] h-[300px]"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {slides.map((i) => (
          <SwiperSlide key={i}>
            <img src={`Competitions/ACPC 2024/ACPC_${i}.jpg`} alt={`Slide ${i}`} className='md:w-[900px] w-[90%] md:h-[500px] h-[300px] object-cover rounded-3xl' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    
  );
}