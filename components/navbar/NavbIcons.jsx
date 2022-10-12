import React from 'react';
import NavIcon from './NavIcon';
import { FaWallet, FaTwitter, FaRedditSquare } from 'react-icons/fa';
import { Burguer } from './Burguer';

export const NavbIcons = () => {
  return (
    <div className='flex gap-5'>
      <Burguer />
      <NavIcon icon={<FaWallet />} />
      <NavIcon icon={<FaTwitter />} />
      <NavIcon icon={<FaRedditSquare />} />
    </div>
  );
};
