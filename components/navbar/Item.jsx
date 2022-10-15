import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';

export const Item = ({ text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className='cursor-pointer'>
      <Link to={text} smooth={true} duration={500}>
        <p className='text-lg capitalize'>{text}</p>
      </Link>
    </motion.div>
  );
};
