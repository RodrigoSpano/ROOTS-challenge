import React from 'react';
import { HeaderContent } from './HeaderContent';

const ContentData = () => {
  return (
    <div className='flex flex-col gap-5'>
      <HeaderContent />
      <p className='text-neutral-400 sm:w-[600px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolores
        corrupti velit eligendi in, reprehenderit atque suscipit accusamus earum
        perspiciatis cupiditate maxime dolor maiores provident molestiae dolorum
        non sed at.
      </p>
    </div>
  );
};

export default ContentData;
