import React from 'react';
import NftCarousel from './carousel/NftCarousel';
import Content from './content/Content';

const CollectionCont = () => {
  return (
    <div className='min-h-screen my-20 flex flex-col items-center justify-center gap-20 '>
      <Content />
      <NftCarousel />
    </div>
  );
};

export default CollectionCont;