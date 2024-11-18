import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'

function About() {
  return (
    <div className='w-full flex flex-col items-center py-8'>
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">

            <span>About</span>
        </h2>
        <div className='mt-8
          w-[70%] text-xl text-white h-1 bg-gradient-to-r  mb-16 text-center' >
          Here you will find a list of my projects
        </div>
        <Card className='md:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800'>
            <CardTitle className='p-6 flex gap-7'>
                WHO AM I?
            </CardTitle>
            <CardContent className='p-6 flex gap-7'>
              As a computer science student at Tunis El Manar University, specifically at the Higher Institute of Computer Science of Ariana, I am passionate about a variety of technology-related fields including competitive programming, Artificial Intelligence, Machine Learning, Cybersecurity, Video Editing, Graphic Design, and Web Development. My goal is to gain professional experience in these areas and to continue to develop my skills constantly. I believe that the best way to achieve this is by perseverance and hard work. I am confident that with the right opportunity, I will be able to take on new challenges and excel into them.
            </CardContent>
        </Card>
    </div>
  )
}

export default About
