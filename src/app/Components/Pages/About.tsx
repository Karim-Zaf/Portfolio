import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'

function About() {
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen '>
        <h2 className="mt-32 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">

            <span>About Me</span>
        </h2>
        <div className='mt-8
          w-[70%] text-xl text-white h-1 bg-gradient-to-r  mb-16 text-center' >
          
        </div>

        <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
            <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
                WHO AM I?
            </CardTitle>
            <CardContent className='p-6 flex gap-7'>
              I am a dedicated computer science student currently pursuing a dual degree at Tunis El Manar University’s Higher Institute of Computer Science of Ariana and IUT Villetaneuse par of Sorbonne Paris Nord University. With a strong passion for technology, I specialize in competitive programming, Machine Learning, Web Development, Devops and Video Editing. I am constantly seeking opportunities to expand my knowledge and hone my skills, believing that perseverance and hard work are key to achieving excellence. I am driven by problem-solving and eager to contribute to innovative projects. I am excited to apply my abilities during a 14 to 16-week internship starting March 10, 2025, where I look forward to taking on new challenges, learning from experienced professionals, and making meaningful contributions to the field.
            </CardContent>
        </Card>
    </div>
  )
}

export default About
