import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const More = () => {
  return (
    <button className='flex flex-row items-center gap-2 bg-neutral-700 font-bold px-8 py-3 rounded-xl text-neutral-200 hover:bg-neutral-200 hover:text-neutral-800 transition-colors ease-linear duration-300'>
      See More
      <BsArrowRightShort />
    </button>
  );
};

export default More;
