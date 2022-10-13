import React from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';

export const HeaderContent = () => {
  return (
    <div className='flex gap-5 items-center'>
      <div className='text-orange-500 text-xl sm:text-3xl flex border p-2 border-orange-500 rounded-full'>
        <IoShareSocialOutline />
      </div>
      <h2 className='text-white font-bold text-[20px] sm:text-[50px] '>
        Online Community
      </h2>
    </div>
  );
};

// export default HeaderContent;
