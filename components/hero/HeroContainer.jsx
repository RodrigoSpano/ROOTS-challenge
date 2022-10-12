import React from 'react';
import Content from './content/Content';
import Scene from './illustration/Scene';

const HeroContainer = () => {
  return (
    <div className='w-full flex flex-col xl:flex-row items-center justify-center min-h-[700px] pt-10 gap-20 sm:gap-10'>
      <Content />
      <Scene />
    </div>
  );
};

export default HeroContainer;
