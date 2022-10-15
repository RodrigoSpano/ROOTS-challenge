import { motion } from 'framer-motion';
import React from 'react';
import SocialTeam from './SocialTeam';

const TeamCard = ({ img, name, job }) => {
  return (
    <div className=' h-[300px] bg-neutral-700 rounded-md shadow-md flex flex-col items-center gap-2 select-none'>
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={img}
        className='object-contain h-[200px] rounded-md '
      />
      <div className='w-full space-y-[-1px]'>
        <h3 className='text-neutral-100 font-lato text-start w-full px-2 '>
          {name}
        </h3>
        <p className='w-full text-start text-neutral-300 px-2 text-[12px]'>
          {job}
        </p>
      </div>
      <SocialTeam />
    </div>
  );
};

export default TeamCard;
