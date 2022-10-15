import Link from 'next/link';
import React from 'react';
import { VscTwitter, VscGithubAlt } from 'react-icons/vsc';
import { BsMailbox2 } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';

const Redes = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      <Link href='https://github.com/RodrigoSpano?tab=repositories'>
        <VscGithubAlt className='cursor-pointer text-neutral-200 text-[20px]' />
      </Link>
      <Link href=''>
        <VscTwitter className='cursor-pointer text-neutral-200 text-[20px]' />
      </Link>
      <Link href=''>
        <BsMailbox2 className='cursor-pointer text-neutral-200 text-[20px]' />
      </Link>
      <Link href='https://www.linkedin.com/in/RodrigoSpano/'>
        <FiLinkedin className='cursor-pointer text-neutral-200 text-[20px]' />
      </Link>
    </div>
  );
};

export default Redes;
