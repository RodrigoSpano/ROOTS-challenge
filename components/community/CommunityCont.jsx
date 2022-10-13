import React from 'react';
import ButtonsCom from './buttons/ButtonsCom';
import ContentData from './ContentData/ContentData';
import Stats from './stats/Stats';

const CommunityCont = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col items-start px-auto px-16 md:px-32 gap-10'>
      <ContentData />
      <Stats />
      <ButtonsCom />
    </div>
  );
};

export default CommunityCont;
