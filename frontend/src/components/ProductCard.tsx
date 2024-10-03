import React from "react";
import HeartIcon from "../../public/images/heart-icon.svg?react";
import SaleIcon from "../../public/images/sale.svg?react";
import { div } from "framer-motion/client";

const ProductCard = ({
  image,
  status,
  name,
  salePrice,
  originalPrice,
  comparePrice,
}) => {
  const heartStyle = {
    zIndex: 1,
    cursor: "pointer",
    position: "absolute",
    bottom: "15px",
    right: "12px",
  };
  
  return (
    <div className="flex flex-col items-start gap-8 ">
      {/* Frame for image */}
    <div className="flex flex-col p-8 h-[240px] lg:h-[364px] lg:p-16 justify-between items-start self-stretch rounded-xxs   " style={{background:`url(${image}) lightgray 50% / cover no-repeat` }}>
    {/* <HeartIcon style={heartStyle} /> */}
    </div>
    {/* frame for detials */}
      <div className="flex flex-col items-start gap-2 self-stretch">
      <span className="flex-1 flex-shrink-0 basis-0  text-text-light font-ebgaramond  font-normal text-paragraph-xsmall-regular lg:h-[23px] lg:self-stretch lg:text-paragraph-medium-regular ">{status}</span>
      <span className="self-stretch text-text-primary font-ebgaramond font-medium text-mobile-headings-h6-medium lg:text-paragraph-large-semi-bold lg:font-semibold ">{name}</span>
      <p>
          {" "}
          <span className="text-text-destructive font-ebgaramond text-paragraph-small-regular font-normal lg:text-paragraph-medium-regular">${salePrice}</span>{" "}
          <span className="line-through text-text-paragraph font-ebgaramond text-paragraph-small-regular font-normal lg:text-paragraph-medium-regular">${originalPrice}</span>
        </p>
       
      </div>
    
    </div>
  );
};

export default ProductCard;
