import React from 'react';
import { Item } from '../Item';
import { RiCloseFill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToFalse } from '../../../features/slice/NavSlice';

const MenuItems = () => {
  const active = useSelector((state) => state.nav.active);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleToFalse());
  };

  return (
    <div
      className={`absolute ${
        active ? 'top-0' : 'top-[-220px]'
      } flex flex-col items-center py-5 gap-5 font-lato w-full left-0 bg-black z-1 text-neutral-200 transition-all ease-linear duration-300 lg:hidden`}
    >
      <Item text='Home' />
      <Item text='Collection' />
      <Item text='Roadmap' />
      <Item text='Team' />
      <RiCloseFill
        className='cursor-pointer absolute top-5 right-10 rounded-full z-99 text-3xl'
        onClick={handleClose}
      />
    </div>
  );
};

export default MenuItems;
