import React from 'react';
import Content from './content/Content';

const HeroContainer = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-center min-h-[600px]'>
      <Content />
    </div>
  );
};

export default HeroContainer;
