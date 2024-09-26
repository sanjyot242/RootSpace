import React from 'react';
import  HeartIcon from '../../public/images/heart-icon.svg?react';
import  SaleIcon from '../../public/images/sale.svg?react';

const ProductCard = ({ image, status, name, salePrice, originalPrice, comparePrice }) => {
    const heartStyle = {
        zIndex:1,
        cursor:"pointer",
        position:"absolute",
        bottom: '15px',
        right: '12px'
    };
    const saleStyle = {
        zIndex:1,
        cursor:"pointer",
        position:"absolute",
        top: '20px',
        left: '12px'
    };
  return (
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 ">
      <div className="flex flex-col flex-1">
          <div className="flex relative justify-between w-full  aspect-[0.791] min-h-[364px]">
              <img loading="lazy" src={image} alt={name}
                   className="object-cover absolute inset-0 size-full rounded-md"/>
              <HeartIcon style={heartStyle}/>
              <SaleIcon style={saleStyle}/>
          </div>
          <span className="m-2 font-thin text-text-light">{status}</span>
          <span className="font-bold">{name}</span>
          <p> <span className="text-text-destructive">${salePrice}</span> <span className="line-through text=[#414E62]">${originalPrice}</span></p>
      </div>
      </div>
  );
};

export default ProductCard;