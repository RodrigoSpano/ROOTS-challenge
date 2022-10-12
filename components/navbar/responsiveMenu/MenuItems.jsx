import React from 'react';
import { Item } from '../Item';

const MenuItems = () => {
  let open = false;
  return (
    <div
      className={`absolute ${
        open ? 'top-0' : 'top-[-220px]'
      } flex flex-col items-center py-5 gap-5 font-lato w-full left-0 bg-black z-1 text-neutral-200 transition-all ease-linear duration-300 lg:hidden`}
    >
      <Item text='Home' />
      <Item text='Collection' />
      <Item text='Roadmap' />
      <Item text='Team' />
    </div>
  );
};

export default MenuItems;
