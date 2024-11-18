import React from 'react';

export default function MyLinks({ imageLink, placeHolder, link }: any) {
  return (
    <div className='relative w-8 group'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageLink} alt={placeHolder} />
      </a>
      <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded'>
        {placeHolder}
      </div>
    </div>
  );
}
