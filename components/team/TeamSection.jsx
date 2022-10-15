import React from 'react';
import CardsContainer from './CardsContainer';

const TeamSection = () => {
  return (
    <div
      id='team'
      className='flex flex-col items-center justify-center w-full min-h-[600px] select-none'
    >
      <h1 className='text-white font-mukta font-bold text-center text-[30px] sm:text-[60px]'>
        Our amazing team
      </h1>
      <CardsContainer />
    </div>
  );
};

export default TeamSection;
