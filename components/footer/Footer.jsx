import React from 'react';
import Copy from './Copy';
import Footbar from './Footbar';
import NewsLetter from './NewsLetter';
import Redes from './Redes';

const Footer = () => {
  return (
    <div className='w-full min-h-[200px] rounded-t-xl shadow-purple-500 shadow-2xl gap-10 px-20 py-5 flex flex-wrap items-center justify-between'>
      <NewsLetter />
      <Footbar />
      <div className='flex flex-col gap-5'>
        <Redes />
        <Copy />
      </div>
    </div>
  );
};

export default Footer;
