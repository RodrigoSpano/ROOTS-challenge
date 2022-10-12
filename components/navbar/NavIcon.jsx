import { motion } from 'framer-motion';
import React from 'react';

const NavIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`rounded-lg px-4 py-2 md:text-lg cursor-pointer bg-gradient-to-br from-purple-500 to-purple-800 hover:from-neutral-600 hover:to-neutral-800 transition-colors ease-linear duration-200 text-neutral-200 `}
    >
      {icon}
    </motion.div>
  );
};

export default NavIcon;
