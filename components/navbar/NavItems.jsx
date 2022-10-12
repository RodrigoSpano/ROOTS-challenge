import React from 'react';
import { Item } from './Item';

const NavItems = () => {
  return (
    <div className='hidden lg:flex flex-row text-neutral-100 gap-10 font-bold font-[lato]'>
      <Item text='Home' />
      <Item text='Collection' />
      <Item text='Roadmap' />
      <Item text='Team' />
    </div>
  );
};

export default NavItems;
