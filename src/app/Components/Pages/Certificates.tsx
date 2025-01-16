import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import certificates from './cerficates.json'
function Certificates() {
  
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen md:mt-28 mt-20'>
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>My Certificates</span>
      </h2>
      <div className='mt-8 w-full text-xl text-white h-1 bg-gradient-to-r mb-16 text-center'>
        Here you will find a list of my certificates
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certificates.map(({ title, skills, ImageLink, WebSiteLink }) => (
          <Card key={title} className='sm:w-[420px] w-[90%] m-auto shadow-lg bg-neutral-800'>
            <CardContent className='p-6 flex flex-col justify-center items-center gap-7'>
              <img src={ImageLink} alt={title} className='w-96 h-auto mb-4 rounded' />
              <div>
                <h1 className='text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white'>
                  {title}
                </h1>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {skills.map((skill) => (
                    <span key={skill} className='bg-gray-700 text-gray-300 px-2 py-1 rounded'>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className='flex space-x-4'>
                  <Button className='bg-blue-500 hover:bg-blue-600 text-white'>
                    <a href={WebSiteLink} className='hover:underline'>
                      Website
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Certificates;

