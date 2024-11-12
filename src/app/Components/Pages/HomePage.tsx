
import { Image } from 'lucide-react'
import React from 'react'


function HomePage() {
  return (
    <>
      <div className='flex justify-center items-center gap-10 flex-col'>
            <img src='identity_picture.jpeg' className='z-0 rounded-[400px] w-[250px]'/>
              <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">

                  <span>Karim Zaafrani</span>
              </h2>
      </div>
    </>
  )
}

export default HomePage
