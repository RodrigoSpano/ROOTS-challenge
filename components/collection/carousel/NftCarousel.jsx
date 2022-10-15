import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { motion } from 'framer-motion';

const NftCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <motion.div
      whileHover={{ scale: 0.9 }}
      className='relative shadow-xl flex items-center justify-center'
      data-value='1'
    >
      <p className='absolute top-0 left-6 text-white font-mukta'>5.34 ETH</p>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored1.jpeg'
      />
    </motion.div>,
    <motion.div
      whileHover={{ scale: 0.9 }}
      className='relative shadow-xl flex items-center justify-center'
      data-value='2'
    >
      <p className='absolute top-0 left-6 text-white font-mukta'>4.17 ETH</p>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored2.png'
      />
    </motion.div>,
    <motion.div
      whileHover={{ scale: 0.9 }}
      className='relative shadow-xl flex items-center justify-center'
      data-value='3'
    >
      <p className='absolute top-0 left-6 text-white font-mukta'>4.99 ETH</p>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored3.png'
      />
    </motion.div>,
    <motion.div
      whileHover={{ scale: 0.9 }}
      className='relative shadow-xl flex items-center justify-center'
      data-value='4'
    >
      <p className='absolute top-0 left-6 text-white font-mukta'>4.69 ETH</p>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored4.png'
      />
    </motion.div>,
    <motion.div
      whileHover={{ scale: 0.9 }}
      className='relative shadow-xl flex items-center justify-center'
      data-value='5'
    >
      <p className='absolute top-0 left-6 text-white font-mukta'>3.99 ETH</p>
      <img
        className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] object-cover rounded-lg '
        src='/assets/bored5.png'
      />
    </motion.div>,
  ];

  return (
    <div className='w-[400px] lg:w-[1000px] cursor-grab'>
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
