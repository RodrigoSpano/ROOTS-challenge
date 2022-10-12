import { motion } from 'framer-motion';
import React from 'react';

const NavIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`rounded-lg px-4 py-2 md:text-lg cursor-pointer hover:bg-black transition-colors ease-linear duration-200 text-neutral-200 bg-purple-700`}
    >
      {icon}
    </motion.div>
  );
};

export default NavIcon;
