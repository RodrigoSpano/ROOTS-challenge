import React from 'react';
import { NavbIcons } from './NavbIcons';
import NavItems from './NavItems';
import MenuItems from './responsiveMenu/MenuItems';

const Navbar = () => {
  return (
    <div className='w-full h-14 flex flex-row px-20 items-center justify-between select-none'>
      <h1 className='text-[33px] font-bold font-comforter text-center pt-2 text-purple-700'>
        RS.Studio
      </h1>
      <div className='flex gap-10 items-center'>
        <NavItems />
        <NavbIcons />
      </div>
    </div>
  );
};

export default Navbar;
