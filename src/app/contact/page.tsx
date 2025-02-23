import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ContactPage() {
  return (
    <div className='w-screen flex flex-col items-center py-8 min-h-screen h-full '>
      <h2 className="mt-24 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>Contact Me</span>
      </h2>
      <div className='mt-8 w-full text-xl text-white h-1 bg-gradient-to-r mb-16 text-center'>
        Feel free to reach out to me!
      </div>
      <Card className='md:w-[600px] w-[90%] mb-8 shadow-lg bg-neutral-800 z-50'>
        <CardContent className='p-6'>
          <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-4'>
            <input type="hidden" name="access_key" value="0ae40cc4-6c26-41c6-ba33-a186a9a17886"/>
            <div>
              <label htmlFor='name' className='block text-gray-300 mb-2'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-300 mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
              <textarea
                id='message'
                rows={4}
                name='message'
                className='w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></textarea>
            </div>
            <button
              type='submit'
              className='px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300'
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactPage;