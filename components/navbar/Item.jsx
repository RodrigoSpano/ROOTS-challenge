import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export const Item = ({ text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link href=''>
        <a className='text-lg'>{text}</a>
      </Link>
    </motion.div>
  );
};
