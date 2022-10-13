import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const NftCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className='flex items-center justify-center' data-value='1'>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored1.jpeg'
      />
    </div>,
    <div className='flex items-center justify-center' data-value='2'>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored2.png'
      />
    </div>,
    <div className='flex items-center justify-center' data-value='3'>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored3.png'
      />
    </div>,
    <div className='flex items-center justify-center' data-value='4'>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored4.png'
      />
    </div>,
    <div className='flex items-center justify-center' data-value='5'>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored5.png'
      />
    </div>,
  ];

  return (
    <div className=' w-auto lg:w-[1000px]'>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy='alternate'
      />
    </div>
  );
};

export default NftCarousel;
