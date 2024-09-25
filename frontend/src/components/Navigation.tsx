import React, { useState } from 'react';
import IconButton from './IconButton';
import Logo from './LogoNav';
import SearchOverLay from './SearchOverLay';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Toggle search overlay on small screens
  const toggleSearch = () => {
    console.log(showSearch)

    setShowSearch(!showSearch);
  };

  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cad9060a7050f01701fc48d3550710c54b22a4390e80e57713851801fa0cead7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Search", onClick:toggleSearch },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dc228f198c57ddea855c1bf0062a682e881731f35aa24b4f7f9516f745d87d7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "User profile" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/51ea00ee9aeacfd76ecb65af03c77664ef5c3a575e449576f280b06643ecd658?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Menu" }
  ];

  return (
    <nav className="flex justify-between items-center px-16 lg:px-120 py-4 lg:py-0 gap-32 lg:gap-64 bg-white w-full ">
      {/* Logo aligned to the left */}
      <Logo />

      {/* div for Categories - hidden on smaller screens, shown on lg */}
      <div className='hidden lg:flex   gap-32 flex-wrap'>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>Women</button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>Men</button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>Unisex</button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>Brands</button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-primary paragraphmediumregular'>New</button>
        <button className='flex p-none justify-center items-center gap-8 rounded-xxs text-text-destructive paragraphmediumregular'>Sale</button>
      </div>

      {/* SearchOverlay displayed only on large screens or toggled on small screens */}
      <div className={`hidden lg:flex ${showSearch ? 'flex' : 'hidden'} flex-1 py-16`}>
        <SearchOverLay />
      </div>


      {/* Icons aligned to the right on small screens */}
      <div className="flex gap-16 items-center">
        {icons.map((icon, index) => (
          <IconButton key={index} src={icon.src} alt={icon.alt} onClick={icon.onClick} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
