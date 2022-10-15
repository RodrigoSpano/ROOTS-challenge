import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';

export const Item = ({ text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to={text} smooth={true} duration={500}>
        <text className='text-lg capitalize'>{text}</text>
      </Link>
    </motion.div>
  );
};
