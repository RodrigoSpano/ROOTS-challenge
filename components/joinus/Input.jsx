import React, { useState } from 'react';

const Input = () => {
  const [inputVal, setInputVal] = useState({ email: '' });

  const handleChange = (e) => {
    setInputVal({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-row space-x-[-5px]'>
      <input
        name='email'
        onChange={handleChange}
        className='w-[300px] rounded-l-md px-5 py-2'
        placeholder='Enter your email address'
      />
      <button
        type='submit'
        className='bg-orange-500 px-4 rounded-r-md text-neutral-300 hover:bg-neutral-800 ease-linear transition-all'
      >
        Submit
      </button>
    </form>
  );
};

export default Input;
