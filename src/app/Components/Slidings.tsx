"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import React from 'react';

function Slidings({paths}:any) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [paused, setPaused] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  React.useEffect(() => {
    if (!api) return;

    // Randomize starting slide slightly to avoid sync between instances
    try {
      const total = api.scrollSnapList().length || 0;
      if (total > 0) {
        const startIndex = Math.floor(Math.random() * total);
        const startDelay = 400 + Math.random() * 1200;
        window.setTimeout(() => {
          try { api.scrollTo(startIndex); } catch {}
        }, startDelay);
      }
    } catch {}
  }, [api]);

  React.useEffect(() => {
    clearTimer();
    if (!api || paused) return;

    const schedule = () => {
      const delay = 3000 + Math.random() * 2500; // 3.0s - 5.5s
      timerRef.current = window.setTimeout(() => {
        try { api.scrollNext(); } catch {}
        schedule();
      }, delay);
    };

    schedule();
    return clearTimer;
  }, [api, paused]);
  return (
    <>
        <Carousel 
          className="mx-auto p-0 mb-6 overflow-hidden rounded-3xl shadow-xl border border-white/10 md:w-[900px] md:h-[480px] w-[90vw] h-[300px] bg-black/10"
          setApi={setApi}
          opts={{ loop: true }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
            <CarouselContent className="p-0 m-0 flex items-center h-full">
            {paths.map((image_:any) => (
                <CarouselItem key={image_} className="p-0 m-0 w-full h-full">
                    <img src={image_} alt={`Slide ${image_}`} className='h-full w-full object-contain bg-black/10' />
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 glass text-white p-2 rounded-full border border-white/10 z-20" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 glass text-white p-2 rounded-full border border-white/10 z-20" />
        </Carousel>  
    </>
  );
}

export default Slidings;








/*

Previous Method 


      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}

        className="mb-8 lg:w-[900px] w-[600px] lg:h-[500px] h-[300px]"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {slides_instructor.map((i) => (
          <SwiperSlide key={i}>
            <img src={`Instructor/Instructor_${i}.png`} alt={`Slide ${i}`} className='md:w-[900px] w-[90%] md:h-[500px] h-[300px] object-cover rounded-3xl' />
          </SwiperSlide>
        ))}
      </Swiper>
*/

