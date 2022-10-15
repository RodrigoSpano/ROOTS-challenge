import { motion } from 'framer-motion';
import React from 'react';
import { GrTwitter } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';
import { BiMailSend } from 'react-icons/bi';

const SocialTeam = () => {
  return (
    <div className='w-full flex flex-row flex-wrap items-center justify-center gap-10'>
      <motion.div whileHover={{ scale: 1.4 }}>
        <FiGithub className='text-neutral-400 cursor-pointer hover:text-neutral-100 ' />
      </motion.div>
      <motion.div whileHover={{ scale: 1.4 }}>
        <GrTwitter className='text-neutral-400 cursor-pointer hover:text-neutral-100 ' />
      </motion.div>
      <motion.div whileHover={{ scale: 1.4 }}>
        <BiMailSend className='text-neutral-400 cursor-pointer hover:text-neutral-100 ' />
      </motion.div>
    </div>
  );
};

export default SocialTeam;
