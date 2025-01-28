import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

function Slidings({paths}:any) {
  return (
    <>
        <Carousel className="mx-auto  p-0 mb-6">
            <CarouselContent className="p-0 m-0   flex items-center md:w-[700px] md:h-[400px] w-[90vw] h-[300px] ">
            {paths.map((image_:any) => {
                console.log(image_)
                return <CarouselItem key={image_} className="p-0 m-0 w-full h-full">
                    <img src={image_} alt={`Slide ${image_}`} className='rounded-3xl h-full w-full object-cover ' />
                </CarouselItem>
            })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
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

