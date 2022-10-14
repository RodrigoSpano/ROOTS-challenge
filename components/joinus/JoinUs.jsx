import React from 'react';
import { ContentJoin } from './ContentJoin';
import Input from './Input';

const JoinUs = () => {
  return (
    <div className='w-full min-h-auto pb-20 flex flex-col items-center justify-center gap-10 select-none'>
      <ContentJoin />
      <Input />
    </div>
  );
};

export default JoinUs;
