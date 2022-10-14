import React from 'react';
import ButtonsCom from './buttons/ButtonsCom';
import ContentData from './ContentData/ContentData';
import Model from './illustration/Model';
import Stats from './stats/Stats';

const CommunityCont = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col md:flex-row items-center justify-center px-auto overflow-hidden px-16 md:px-32 gap-10 '>
      <div className='flex flex-col  gap-10'>
        <ContentData />
        <Stats />
        <ButtonsCom />
      </div>
      <Model />
    </div>
  );
};

export default CommunityCont;
