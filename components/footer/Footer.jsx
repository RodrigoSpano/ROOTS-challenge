import React from 'react';
import NewsLetter from './NewsLetter';
import Redes from './Redes';

const Footer = () => {
  return (
    <div className='w-full h-[200px] bg-zinc-900 px-20 flex flex-wrap items-center justify-between'>
      <NewsLetter />
      <Redes />
    </div>
  );
};

export default Footer;
