import React from 'react';
import { Item } from './Item';
import MenuItems from './responsiveMenu/MenuItems';

const NavItems = () => {
  return (
    <>
      <div className='hidden lg:flex flex-row text-neutral-100 gap-10 font-bold font-[lato]'>
        <Item text='home' />
        <Item text='collection' />
        <Item text='community' />
        <Item text='team' />
      </div>
      <MenuItems />
    </>
  );
};

export default NavItems;
