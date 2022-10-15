import { motion } from 'framer-motion';
import React, { useState } from 'react';

const NewsLetter = () => {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email: ${value}`);
    setValue('');
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className='flex flex-col'>
      <h3 className='text-white font-mukta text-[24px]'>Join us, Newsletter</h3>
      <form onSubmit={handleSubmit} className='flex flex-row rounded-md'>
        <input
          type='email'
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder='Enter your Email address'
          className='rounded-l-md w-[150px] sm:w-[300px] py-2 md:py-3 px-2 focus:outline-none'
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type='submit'
          className={`${
            sent
              ? 'bg-gradient-to-br from-green-400 to-green-800'
              : 'bg-gradient-to-br from-purple-400 to-purple-800'
          } px-4 rounded-r-md text-neutral-200 font-mukta  `}
        >
          Send
        </motion.button>
      </form>
      {sent ? (
        <p className='text-green-600 font-mukta'>Sent Successfully!</p>
      ) : null}
    </div>
  );
};

export default NewsLetter;
