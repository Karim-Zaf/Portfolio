import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import Slidings from '../Components/Slidings';

export default function page() {
  const slides_video_editing = Array.from({ length: 2 }, (_, i) => i + 1);
 
  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen '>
      <h2 className="md:mt-24 mt-16 md:mb-12 mb-6 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>Video Editing</span>
      </h2>

      <Card className='lg:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800 text-white'>
        <CardTitle className='p-6 flex gap-7 bg-neutral-700 rounded-t-xl'>
            My story with Video Editing
        </CardTitle>
        <CardContent className='p-6 flex gap-7'>
        I’ve been passionate about video editing since I was about 10 years old, using a heavy laptop that barely ran Premiere Pro. I started with Windows Movie Maker, creating fun presentations for school projects in middle school. As I got better, I moved on to Sony Vegas Pro and then switched to Adobe tools like Premiere Pro and After Effects.
<br/>
        In high school, I edited videos for events organized by school clubs, capturing special moments and telling stories through my edits. My love for cinema and storytelling kept growing, and I eventually started freelancing on Upwork, helping clients create exciting and engaging videos.
<br/>
        Video editing has always been my way of turning ideas into visual stories that people can connect with.
    </CardContent>
      </Card>
      
      <Slidings paths={slides_video_editing.map((i)=>{
        return `Video Editing/Video Editing ${i}.png`;
      })}></Slidings> 
    </div>
  )
}
