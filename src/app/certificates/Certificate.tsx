"use client";
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';

export default function Certificate({ title, skills, ImageLink, Provider, WebSiteLink }: any) {

  return (
    <div>
      <Card className='flex'>
        <CardTitle>
          <img
            src={`Certificates/Providers/${Provider.toLowerCase()}.svg`}
            alt={`${Provider} logo`}
            className='w-12 h-12'
          />
        </CardTitle>
        <CardContent className='p-6 flex gap-7'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-sm'>{skills.join(', ')}</p>
          
        </CardContent>
      </Card>
    </div>
  );
}