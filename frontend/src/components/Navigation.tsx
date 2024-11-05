import { useState } from 'react';
import { motion } from 'framer-motion';
import IconButton from './IconButton';
import Logo from './LogoNav';
import SearchOverLay from './SearchOverLay';
import { slideInFromLeft, slideInFromRight } from '../animations/animations';

import { Button } from './Buttons/Button';
import { Link } from 'react-router-dom';
import Selection from './Selection/Selection';
import CloseButton from './Buttons/CloseButton';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // New state for submenu
  const [selectedMenu, setSelectedMenu] = useState('');

  // Toggle search overlay on small screens
  const toggleSearch = () => {
    console.log(showSearch);

    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSubmenu = (label: string) => {
    setSelectedMenu(label);
    setSubmenuOpen(true); // Open the submenu
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
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

  const menuItems = ['Brands', 'Womenswear', 'Menswear', 'Unisex', 'Kidswear'];
  const submenuItems = [
    'Topwear',
    'Bottomwear',
    'Accessories',
    'Loungewear',
    'Hats',
    'Bags',
    'Sale',
  ];

  const categories = ['Women', 'Men', 'Unisex', 'Brands', 'New', 'Sale'];

  return (
    <nav className='flex justify-between items-center px-16 lg:px-120 py-4 lg:py-0 gap-32 lg:gap-64 bg-white w-full '>
      {/* Logo aligned to the left */}
      <Logo toggleMenu={toggleMenu} />

      {/*Sliding OverLayMenu */}
      <motion.div
        initial={slideInFromLeft.initial}
        animate={isOpen ? slideInFromLeft.animate : slideInFromLeft.exit}
        transition={slideInFromLeft.transition}
        className='fixed top-[50px] left-0 h-full w-full p-16 items-start gap-32 bg-bg-primary border-[0.5px] border-stroke-primary_hover rounded-xxs'>
        <div className='flex flex-col gap-16 self-stretch shrink-0 items-start'>
          {/* Close button inside the menu */}
          <CloseButton onClick={toggleMenu} />

          <div className='w-full self-stretch text-text-primary  paragraphsmallmedium'>
            Select one
          </div>

          <div className='w-full flex flex-col self-start gap-8 shrink-0 '>
            {menuItems.map((item) => (
              <Selection
                key={item}
                label={item}
                showBadge={false}
                showSwitch={false}
                showRadioButton={false}
                showIcon={true}
                onClick={() => openSubmenu(item)}
              />
            ))}
          </div>

          {/* Div for My account Buttons */}
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
          </div>
        </div>
      </motion.div>

      {/* Submenu sliding in from the right */}
      <motion.div
        initial={slideInFromRight.initial}
        animate={submenuOpen ? slideInFromRight.animate : slideInFromRight.exit}
        transition={slideInFromRight.transition}
        className='fixed top-[50px] right-0 h-full w-full p-16 items-start gap-32 bg-bg-primary border-[0.5px] border-stroke-primary_hover rounded-xxs'>
        <div className='flex flex-col gap-16 self-stretch shrink-0 items-start'>
          {/* Close button inside the menu */}
          <CloseButton onClick={closeSubmenu} />

          <div className='w-full self-stretch text-text-primary  paragraphsmallmedium'>
            Whats New in {selectedMenu} ?
          </div>

          <div className='w-full flex flex-col self-start gap-8 shrink-0 '>
            {submenuItems.map((item) => (
              <Selection
                key={item}
                label={item}
                showBadge={false}
                showSwitch={false}
                showRadioButton={false}
                showIcon={true}
              />
            ))}
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
        <Link
          className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-destructive paragraphmediumregular'
          to='/sale'>
          Sale
        </Link>
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
