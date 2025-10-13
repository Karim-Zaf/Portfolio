import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import skills from "./skills.json"
import MyLinks from '../Components/MyLinks'

function About() {
  return (
    <div key={1} className='w-full flex flex-col items-center py-8 min-h-screen'>
      <h2 className="md:mt-32 mt-20 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>About Me</span>
      </h2>

      <div className='mt-8 w-[70%] text-xl text-white h-1 bg-gradient-to-r md:mb-16 mb-3 text-center'></div>

      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
          WHO AM I?
        </CardTitle>
        <CardContent className='p-6 flex gap-7 text-lg leading-relaxed'>
          I am a passionate and driven <strong>Computer Science engineering student</strong> currently pursuing my degree at the 
          <strong> Université de Technologie de Compiègne (UTC)</strong> 🇫🇷. 
          <br /><br />
          As an <strong>Apprentice at Cegedim</strong>, I work on <strong>DevSecOps</strong> and <strong>Cloud Security</strong> projects, where I contribute to improving automation, reliability, and security within cloud infrastructures. 
          <br /><br />
          My interests span <strong>Competitive Programming</strong>, <strong>Machine Learning</strong>, <strong>Web Development</strong>, and <strong>DevOps</strong> — areas where I love exploring how different technologies can come together to solve real-world problems.
          <br /><br />
          I believe that <strong>perseverance, curiosity, and continuous learning</strong> are the keys to excellence. My long-term goal is to <strong>build meaningful, impactful projects</strong> that combine innovation and technical depth.
        </CardContent>
      </Card>

      <h2 className="mb-6 mt-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>Skills</span>
      </h2>

      {skills.map(({ category, technologies }) => (
        <Card key={category} className='lg:w-[750px] w-[90%] mb-2 shadow-lg bg-neutral-800 text-white flex'>
          <CardTitle className='md:w-[180px] w-[120px] md:text-md text-sm flex flex-col items-center justify-center md:p-6 p-2 text-center gap-7 bg-neutral-700 rounded-l-xl'>
            {category}
          </CardTitle>
          <CardContent className='flex flex-wrap gap-3 justify-center items-center w-full p-4'>
            {technologies.map((technology) => {
              let technology_file = technology
              if (technology === "C++") technology_file = "Cplusplus"
              return (
                <div key={technology} className="m-auto w-12 h-12 relative group bg-gray-700 text-gray-300 rounded p-2">
                  <img
                    src={`technologies icons/${technology_file.toLowerCase()}.svg`}
                    alt={technology}
                    className="w-full h-full"
                  />
                  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded'>
                    {technology}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default About
