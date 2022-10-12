import { motion } from 'framer-motion';
import React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { toggleToTrue } from '../../features/slice/NavSlice';

export const Burguer = () => {
  const dispatch = useDispatch();

  const handleActive = () => {
    // setActive(!active);
    dispatch(toggleToTrue());
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.1 }}
        className={`rounded-lg px-4 py-2 text-lg cursor-pointer hover:bg-black transition-colors ease-linear duration-200 text-neutral-200 z-[-1] lg:hidden`}
        onClick={handleActive}
      >
        <CgMenuRightAlt />
      </motion.div>
    </div>
  );
};
