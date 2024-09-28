import React from 'react';

const Logo = ({ toggleMenu }) => {
  return (
    <div className='flex flex-wrap gap-8 items-center w-auto'>
      <button onClick={toggleMenu}>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/09c98167088744c382b8507e5a204347761d0723499a77d4a8c0d5142c4fcf7a?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
          alt='Company logo icon'
          className='object-contain shrink-0 aspect-square lg:hidden'
        />
      </button>

      <div className='flex p-16 items-center w-auto'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/ba93b6b9537f321925d88d40987ab5ec7c090017a8bfb4321cb9b4124a38730e?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba'
          alt='Company logo text'
          className='object-contain aspect-[9.43] w-[113px]'
        />
      </div>
    </div>
  );
};

export default Logo;
