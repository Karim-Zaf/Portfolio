"use client";
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';
import { useState } from 'react';

export default function Certificate({ title, skills, ImageLink, Provider, WebSiteLink }: any) {
  let [isImage,setIsImage] = useState(0)


  return (
    <button  className='z-0' onClick={()=>{
      setIsImage(isImage^1);
    }}>
      <Card className='md:w-[700px] w-[90%] m-auto flex items-center bg-neutral-800 pl-6 mb-4 py-3'>
        <CardTitle className=''>
          <img
            src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
            alt={`${Provider} logo`}
            className='w-12 h-12 bg-slate-200  rounded-full m-1 '
          />
        </CardTitle>
        <CardContent className='w-full m-0 p-0 ml-5 mr-3 flex flex-col justify-center'>
            <h3 className='text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white'>
                {title}
            </h3>
            <p className='text-sm text-white'>{skills.join(', ')}</p>
            {
              isImage && <div>
              <img src={`Certificates/${ImageLink}`} alt={title} className='m-auto md:w-96 w-[90%] h-auto mb-4 rounded' />
            </div>
          }  

        </CardContent>

      
      </Card>
    </button>
  );
}