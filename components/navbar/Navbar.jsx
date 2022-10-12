import { motion } from 'framer-motion';
import React from 'react';
import { NavbIcons } from './NavbIcons';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <div className='w-full h-14 flex flex-row px-5 md:px-20 items-center justify-between select-none'>
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className='text-[33px] font-bold font-comforter text-center pt-2 cursor-pointer text-purple-700'
      >
        RS.Studio
      </motion.h1>
      <div className='flex gap-10 items-center'>
        <NavItems />
        <NavbIcons />
      </div>
    </div>
  );
};

export default Navbar;
