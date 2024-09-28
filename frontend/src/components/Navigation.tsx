import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IconButton from './IconButton';
import Logo from './LogoNav';
import SearchOverLay from './SearchOverLay';
import { slideInFromLeft } from '../animations/animations';
import Dropdown from './DropdownButton/DropDown';
import { Button } from './Buttons/Button';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle search overlay on small screens
  const toggleSearch = () => {
    console.log(showSearch);

    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const icons = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cad9060a7050f01701fc48d3550710c54b22a4390e80e57713851801fa0cead7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba',
      alt: 'Search',
      onClick: toggleSearch,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7dc228f198c57ddea855c1bf0062a682e881731f35aa24b4f7f9516f745d87d7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba',
      alt: 'User profile',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51ea00ee9aeacfd76ecb65af03c77664ef5c3a575e449576f280b06643ecd658?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba',
      alt: 'Menu',
    },
  ];

  return (
    <nav className='flex justify-between items-center px-16 lg:px-120 py-4 lg:py-0 gap-32 lg:gap-64 bg-white w-full '>
      {/* Logo aligned to the left */}
      <Logo toggleMenu={toggleMenu} />

      {/*Sliding OverLayMenu */}
      <motion.div
        initial={slideInFromLeft.initial}
        animate={isOpen ? slideInFromLeft.animate : slideInFromLeft.exit}
        transition={slideInFromLeft.transition}
        className='fixed top-[50px] overflow-y-auto left-0 h-2/4 w-full p-16 items-start gap-32 bg-bg-primary border-[0.5px] border-stroke-primary_hover rounded-xxs'>
        <div className='flex flex-col gap-16 self-stretch shrink-0 items-start'>
          {/* Close button inside the menu */}
          <button onClick={toggleMenu} className='self-start text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'>
              <path
                d='M11.8222 21.6224L4.2 14.0002M4.2 14.0002L11.8222 6.37793M4.2 14.0002L23.8 14.0002'
                stroke='#171717'
                stroke-width='1.67'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>

          <div className='w-full self-stretch text-text-primary  paragraphsmallmedium'>
            Select one
          </div>

          <div className='w-full flex flex-col self-start gap-8 shrink-0 '>
            <Dropdown label={'Women'} />
            <Dropdown label={'Men'} />
            <Dropdown label={'Unisex'} />
          </div>

          <div className='flex flex-col items-start gap-32 self-stretch'>
            <div className='flex flex-col items-start gap-16  self-stretch'>
              <div className='text-text-primary text-mobile-headings-h5-medium font-ebgaramond'>
                My Account
              </div>
              <Button
                socialMediaIcon={false}
                rightIcon={false}
                leftIcon={false}
                size='medium'
                theme='primary'
                stateProp='normal'
                className='w-full'>
                Sign In
              </Button>
              <Button
                socialMediaIcon={false}
                rightIcon={false}
                leftIcon={false}
                size='medium'
                theme='secondary'
                stateProp='normal'
                className='w-full'>
                Register
              </Button>
            </div>
            <div className='flex flex-col items-start gap-14  self-stretch'></div>
          </div>
        </div>
      </motion.div>

      {/* div for Categories - hidden on smaller screens, shown on lg */}
      <div className='hidden lg:flex   gap-32 flex-wrap'>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>
          Women
        </button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>
          Men
        </button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>
          Unisex
        </button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>
          Brands
        </button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>
          New
        </button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-destructive paragraphmediumregular'>
          Sale
        </button>
      </div>

      {/* SearchOverlay displayed only on large screens or toggled on small screens */}
      <div
        className={`hidden lg:flex ${
          showSearch ? 'flex' : 'hidden'
        } flex-1 py-16`}>
        <SearchOverLay />
      </div>

      {/* Icons aligned to the right on small screens */}
      <div className='flex gap-16 items-center'>
        {icons.map((icon, index) => (
          <IconButton
            key={index}
            src={icon.src}
            alt={icon.alt}
            onClick={icon.onClick}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
