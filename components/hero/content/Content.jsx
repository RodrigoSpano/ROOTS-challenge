import { motion } from 'framer-motion';
import React from 'react';

const Content = () => {
  return (
    <div className='flex flex-col items-start justify-center text-white select-none'>
      <div className='flex flex-col text-[60px] lg:text-[80px] font-mukta font-bold capitalize space-y-[-20px]'>
        <h1>Mandalor NFT</h1>
        <h1 className='text-orange-400'>Collection</h1>
      </div>
      <div className='flex flex-col gap-8'>
        <p className=' w-[300px] lg:w-[600px] text-neutral-200'>
          lorem ipsu lorem apaskif luxidrnal lorem ipsu lorem apaskif luxidrnal
          lorem ipsu lorem apaskif luxidrnal lorem ipsu akademik sdas mandalor
          nft juntos
        </p>
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className='bg-gradient-to-br from-purple-500 to-purple-800 hover:from-neutral-600 hover:to-neutral-800  uppercase text-neutral-100 rounded-md text-[12px] sm:text-base w-[150px] sm:w-[200px] py-3'
        >
          Buy a Mandalor
        </motion.button>
      </div>
    </div>
  );
};

export default Content;
