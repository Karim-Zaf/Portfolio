import React from 'react';

function Logo() {
  return (
    <div className='flex gap-1'>
      <h1 className='text-2xl text-orange-500'>&lt;</h1>
      <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white'>
        Zaafrani
      </h1>
      <h1 className='text-2xl text-orange-500'>/&gt;</h1>
    </div>
  );
}

export default Logo;
