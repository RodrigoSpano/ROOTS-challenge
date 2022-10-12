import React from 'react';
import NavIcon from './NavIcon';
import { FaWallet, FaTwitter, FaRedditSquare } from 'react-icons/fa';
import { CgMenuRightAlt } from 'react-icons/cg';

export const NavbIcons = () => {
  return (
    <div className='flex gap-5'>
      <NavIcon burguer={true} icon={<CgMenuRightAlt />} />
      <NavIcon icon={<FaWallet />} />
      <NavIcon icon={<FaTwitter />} />
      <NavIcon icon={<FaRedditSquare />} />
    </div>
  );
};
