import React from 'react';
import Stat from './Stat';

const Stats = () => {
  return (
    <div className='flex flex-row items-center justify-between px-4 bg-purple-500 w-[200px] sm:w-[300px] h-[60px] sm:h-[80px] rounded-2xl'>
      <Stat number='27' name='artwork' />
      <Stat number='22' name='auction' />
      <Stat number='12' name='artist' />
    </div>
  );
};

export default Stats;
