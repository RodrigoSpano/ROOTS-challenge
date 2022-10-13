import React from 'react';
import { Join } from './Join';
import More from './More';

const ButtonsCom = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-5'>
      <Join />
      <More />
    </div>
  );
};

export default ButtonsCom;
