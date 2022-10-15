import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footbar = () => {
  return (
    <div className='flex flex-col text-neutral-200 text-[18px] md:text-[20px] select-none items-center'>
      <Link to='home' smooth={true} duration={500}>
        <motion.p
          className='cursor-pointer hover:text-purple-500'
          whileHover={{ scale: 1.1 }}
        >
          Home
        </motion.p>
      </Link>
      <Link to='collection' smooth={true} duration={500}>
        <motion.p
          className='cursor-pointer hover:text-purple-500'
          whileHover={{ scale: 1.1 }}
        >
          Collection
        </motion.p>
      </Link>

      <Link to='community' smooth={true} duration={500}>
        <motion.p
          className='cursor-pointer hover:text-purple-500'
          whileHover={{ scale: 1.1 }}
        >
          Community
        </motion.p>
      </Link>

      <Link to='team' smooth={true} duration={500}>
        <motion.p
          className='cursor-pointer hover:text-purple-500'
          whileHover={{ scale: 1.1 }}
        >
          Team
        </motion.p>
      </Link>
    </div>
  );
};

export default Footbar;
