import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ProductSection = ({ title, subtitle, products }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  // Update carousel width dynamically after it renders and when products change
  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      const extraPadding = 16; // Adjust this based on the gap between items
      setWidth(scrollWidth - offsetWidth + extraPadding);
    }
  }, [products.length]); // Recalculate when the number of products changes

  return (
    <section className="flex flex-col gap-16 p-16 w-full items-start self-stretch lg:px-120 lg:py-64 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center w-full text-text-primary max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch headingsh5medium basis-12 max-md:max-w-full">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xl tracking-tight leading-snug max-md:max-w-full">
            {subtitle}
          </p>
        )}
        <a
          href="#shop-now"
          className="gap-2 self-stretch px-6 py-3 my-auto text-sm leading-none bg-white rounded border-gray-300 border-solid shadow-sm border-[0.5px] max-md:px-5"
        >
          Shop now
        </a>
      </div>
      <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
      {/* For larger screens */}
        <div className="hidden md:flex flex-wrap gap-20 items-center w-full max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* For smaller screens - Framer Motion Carousel */}
        <div className="md:hidden">
          <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-16"
              style={{ paddingRight: '16px' }} // Add padding to the right
            >
              {products.map((product, index) => (
                <motion.div key={index} className="min-w-[250px]">
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
