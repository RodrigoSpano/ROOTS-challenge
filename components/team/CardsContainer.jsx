import React from 'react';
import TeamCard from './TeamCard';

const CardsContainer = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 items-center justify-center px-5 py-5'>
      <TeamCard
        img='https://bit.ly/kent-c-dodds'
        name='Kent Maguire'
        job='UX/UI Design'
      />
      <TeamCard
        img='https://bit.ly/dan-abramov'
        name='Dan Abramov'
        job='NFTs Design'
      />
      <TeamCard
        img='https://bit.ly/prosper-baba'
        name='Baba Prosper'
        job='Software Engineer'
      />
    </div>
  );
};

export default CardsContainer;
