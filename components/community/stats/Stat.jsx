import React from 'react';

const Stat = ({ number, name }) => {
  return (
    <div className='flex flex-col items-start justify-center text-black font-bold'>
      <h3 className='text-base sm:text-xl'>{number}K +</h3>
      <p className='text-[12px] sm:text-sm'>{name}</p>
    </div>
  );
};

export default Stat;
