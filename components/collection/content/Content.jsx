import { motion } from 'framer-motion';
import React from 'react';

const Content = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex flex-row gap-2 font-bold font-lato text-[30px] lg:text-[50px]'>
        <h2 className='text-white'>About the </h2>
        <h2 className='text-orange-500'>collection</h2>
      </div>

      <div className='flex flex-col text-neutral-200 text-base lg:text-lg w-auto lg:w-[800px] text-center'>
        <p>
          The Mandalor Club Collection of 8623 Monster NFTs inspired by the new
          wealthy generation of crypto-currency and NFTs.
        </p>
        <p>
          Each NFT is a unique 3D artwork generated from the collection of more
          than 200+traits. The objective is to build the strongest comunity and
          project around NFTs.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 0.9 }}
        className='capitalize bg-gradient-to-br from-purple-800 to-purple-500 rounded-md font-bold text-base md:text-lg px-4 py-2 md:px-10 md:py-3 text-white mt-4
      hover:from-neutral-500 hover:to-neutral-800'
      >
        learn more
      </motion.button>
    </div>
  );
};

export default Content;
