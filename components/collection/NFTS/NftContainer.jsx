import React from 'react';
import Nftcard from './Nftcard';

const NftContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      <Nftcard src='/assets/bored1.jfif' price='4.57' />
      <Nftcard src='/assets/bored2.png' price='4.99' />
      <Nftcard src='/assets/bored3.png' price='4.10' />
      <Nftcard src='/assets/bored4.png' price='4.86' />
      <Nftcard src='/assets/bored5.png' price='4.33' />
      <Nftcard src='/assets/bored6.png' price='3.99' />
    </div>
  );
};

export default NftContainer;
