import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CompetitionsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3000ms (3 seconds)
  };

  const competitionImages = [
    "Competitions/1701548751804.jpeg",
    "Competitions/1701548753264.jpeg",
    "Competitions/1701548755967.jpeg",
    "Competitions/1701548757186.jpeg",
    "Competitions/1706869620538.jpeg",
    "Competitions/1706869629285.jpeg",
    "Competitions/1709832477599.jpeg",
    "Competitions/1709832494079.jpeg",
    "Competitions/1716364310323.jpeg",
    "Competitions/1716364310891.jpeg",
    "Competitions/TCPC_group_picture.gif"
  ];

  return (
    
    <div className=' w-full flex flex-col items-center py-8 min-h-screen '>
      <h2 className="mt-24 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2 mb-8">
        <span>Diga Diga</span>
      </h2>
      
      <Slider {...settings} className="  mb-8 md:w-[900px] w-[90%]  md:h-[500px] h-[300px]">
        {competitionImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className=' md:w-[900px] w-[90%]  md:h-[500px] h-[300px] object-cover rounded-3xl' />
          </div>
        ))}
      </Slider>

     

      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
            <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
                WHO Are Diga Diga?
            </CardTitle>
            <CardContent className='p-6 flex gap-7'>
            We are DIGA DIGA, a competitive programming team from The Higher Institute of Computer Science, part of Tunis El Manar University. Comprising Karim Zaafrani, Firas Briki, and Adem Ksouri, we are passionate about solving challenging algorithmic problems and pushing our intellectual boundaries through competitive programming.
            <br/>
            Motivated by a love for coding and teamwork, we actively participate in prestigious competitions like the Tunisian Collegiate Programming Contest - TCPC 2024, where we recently ranked 6th in Tunisia and qualified for the African and Arabic finals. Beyond just competing, we aim to hone our problem-solving skills, represent Tunisia on the global stage, and inspire others in our institute and beyond to explore the exciting world of competitive programming.
            <br/>
            Through hard work, collaboration, and a drive for continuous learning, we strive to achieve excellence and make an impact in the tech community.
            </CardContent>
        </Card>
    </div>

    

  );
}
