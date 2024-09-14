import React from 'react';

const IconButton = ({ src, alt }) => {
  return (
    <button className="flex gap-[-8px] items-end justify-end" aria-label={alt}>
      <div >
        <img loading="lazy" src={src} alt={alt} className="object-contain  my-auto w-24 h-24 aspect-square" />
      </div>
    </button>
  );
};

export default IconButton;