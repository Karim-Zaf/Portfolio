import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import certificates from './cerficates.json'
import Certificate from './Certificate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



function Certificates() {
  let cnt = 0 ;
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen md:mt-28 mt-20'>

      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>My Certificates</span>
      </h2>
      <div className='mt-8 w-full text-xl text-white h-1 bg-gradient-to-r mb-16 text-center'>
        Here you will find a list of my certificates
      </div>
      
      <div className='flex flex-col'>
        
        <Accordion type="single" collapsible className="w-full text-white">
                
        {
            certificates.map(({ title, skills, ImageLink, Provider ,WebSiteLink }) => {
              return (
              <AccordionItem className='md:w-[700px] w-[90%] m-auto pt-0 bg-neutral-800  mb-4  rounded-xl border-neutral-400 border-2 ' value={`item-${++cnt}`}>
                <AccordionTrigger className='w-full flex  h-full rounded-t-xl p-2 pr-4' >
                  
                    <img
                      src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
                      alt={`${Provider} logo`}
                      className='w-12 h-12  bg-slate-200  rounded-full m-1 '
                    />
                    <div className='w-full m-0 p-0 text-left pl-8'>
                        <h3 className='text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white'>
                            {title}
                        </h3>
                        <p className='text-sm text-white'>{skills.join(', ')}</p>
                    </div>

                </AccordionTrigger>

                <AccordionContent className='w-full bg-neutral-700 rounded-b-xl items-center justfiy-center py-3'>
                  <img src={`Certificates/${ImageLink}`} alt={title} className='m-auto md:w-96 w-[90%] h-auto  rounded' />
                </AccordionContent>
              </AccordionItem>

              );
          })
        }

        </Accordion>
      </div>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certificates.map(({ title, skills, ImageLink, Provider,WebSiteLink }) => (
          <Card key={title} className='sm:w-[420px] w-[90%] m-auto shadow-lg bg-neutral-800'>
            <CardContent className='p-6 flex flex-col justify-center items-center gap-7'>
              <img src={`Certificates/${ImageLink}`} alt={title} className='w-96 h-auto mb-4 rounded' />
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
      </div> */}
    </div>
  );
}

export default Certificates;

