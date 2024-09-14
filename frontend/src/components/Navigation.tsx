import React from 'react';
import IconButton from './IconButton';
import Logo from './LogoNav';

const Navigation = () => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cad9060a7050f01701fc48d3550710c54b22a4390e80e57713851801fa0cead7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Search" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dc228f198c57ddea855c1bf0062a682e881731f35aa24b4f7f9516f745d87d7?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "User profile" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/51ea00ee9aeacfd76ecb65af03c77664ef5c3a575e449576f280b06643ecd658?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Menu" }
  ];

  return (
    <nav className="flex gap-8 justify-center items-center px-16 py-4 bg-white w-full">
      <Logo />
      <div className="flex gap-16 items-center ">
        {icons.map((icon, index) => (
          <IconButton key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;