import React from 'react';
import Content from './content/Content';
import NftContainer from './NFTS/NftContainer';

const CollectionCont = () => {
  return (
    <div
      id='collection'
      className='min-h-screen my-20 flex flex-col items-center justify-center gap-20 select-none '
    >
      <Content />
      <NftContainer />
    </div>
  );
};

export default CollectionCont;
