import React from 'react';
import TeamCard from './TeamCard';

const CardsContainer = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 items-center justify-center px-5 py-5'>
      <TeamCard
        img='/assets/team/kent.jfif'
        name='Kent Maguire'
        job='UX/UI Design'
      />
      <TeamCard
        img='/assets/team/dan.jpg'
        name='Dan Abramov'
        job='NFTs Design'
      />
      <TeamCard
        img='/assets/team/baba.jpeg'
        name='Baba Prosper'
        job='Software Engineer'
      />
    </div>
  );
};

export default CardsContainer;
