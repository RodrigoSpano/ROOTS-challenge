import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Nftcard = ({ src, price }) => {
  return (
    <div className='w-[200px] h-[300px] flex flex-col rounded-md'>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          width={'200px'}
          height='200px'
          src={src}
          className='rounded-md shadow-lg'
        />
      </motion.div>
      <div className='w-full flex justify-center items-center gap-5 pt-10'>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className=' text-white font-mukta outline outline-1 outline-neutral-100 hover:bg-slate-200 hover:text-neutral-700 px-2 py-1 rounded-md'
        >
          Purchase
        </motion.button>
        <p className='text-neutral-200'>{price} ETH</p>
      </div>
    </div>
  );
};

export default Nftcard;
