import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import skills from "./skills.json"
import MyLinks from '../Components/MyLinks'

function About() {

  
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen '>
        <h2 className="md:mt-32 mt-20 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">

            <span>About Me</span>
        </h2>
        <div className='mt-8
          w-[70%] text-xl text-white h-1 bg-gradient-to-r  md:mb-16 mb-3 text-center' >
          
        </div>

        <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
            <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
                WHO AM I?
            </CardTitle>
            <CardContent className='p-6 flex gap-7'>
              I am a dedicated computer science student currently pursuing a dual degree at Tunis El Manar University’s Higher Institute of Computer Science of Ariana and IUT Villetaneuse par of Sorbonne Paris Nord University. With a strong passion for technology, I specialize in competitive programming, Machine Learning, Web Development, Devops and Video Editing. I am constantly seeking opportunities to expand my knowledge and hone my skills, believing that perseverance and hard work are key to achieving excellence. I am driven by problem-solving and eager to contribute to innovative projects. I am excited to apply my abilities during a 14 to 16-week internship starting March 10, 2025, where I look forward to taking on new challenges, learning from experienced professionals, and making meaningful contributions to the field.
            </CardContent>
        </Card>

        {/* <Card className="lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white">
        <CardTitle className="p-6 flex gap-7 bg-neutral-700 rounded-t-xl">
          Skills
        </CardTitle>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
              <p>JavaScript, Python, C++, Java</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p>React, Next.js, Tailwind CSS, HTML, CSS</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Tools & Platforms</h3>
              <p>Git, Docker, Linux, Figma</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Databases</h3>
              <p>MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Other Skills</h3>
              <p>Problem-solving, Debugging, API Development</p>
            </div>
          </div>
        </CardContent>
      </Card> */}

        <h2 className="mb-6 mt-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
            <span>Skills</span>
        </h2>
      {
        skills.map(({ category, technologies }) => {
          return <>
          <Card className='lg:w-[750px] w-[90%] mb-2 shadow-lg bg-neutral-800 text-white flex'>
            <CardTitle className='md:w-[180px] w-[120px] md:text-md text-sm flex flex-col items-center justify-center md:p-6 p-2 text-center  gap-7 bg-neutral-700 rounded-l-xl'>
                {category}
            </CardTitle>
            <CardContent className='flex flex-wrap gap-3 justify-center items-center p-auto w-full p-4'>
            {
              technologies.map((technology) => {
                let technology_file = technology
                if (technology=== "C++") technology_file = "Cplusplus";
                return (
                  <div key={technology} className="m-auto w-12 h-12 relative group bg-gray-700 text-gray-300 rounded p-2">
                    {/* <img
                      src={`https://cdn.simpleicons.org/${current_technology.toLowerCase()}`}
                      hata lien hedha behiiiiiii: https://www.svgrepo.com/svg/452141/adobe-after-effects
                      alt={technology}
                      className="w-6 h-6"
                    /> */}
                    <img
                      src={`technologies icons/${technology_file.toLowerCase()}.svg`}
                      alt={technology}
                      className="w-full h-full"
                    />
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded'>
                      {technology}
                    </div>
                  </div>
                );
              })
            }

            </CardContent>
        </Card>
          </>
        })
        
      }
    </div>
  )
}

export default About
