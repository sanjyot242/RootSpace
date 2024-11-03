import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const CustomizableSection = ({ title, subtitle, products }) => {
  console.log(products);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  // Set the total scrollable width for the carousel based on the number of products
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [products.length]);

  return (
    <section className='flex flex-col gap-16 w-full items-start self-stretch  p-16 lg:gap-32 lg:px-120 lg:py-64   max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-wrap gap-8 items-center w-full text-text-primary max-md:max-w-full'>
        <h2 className='flex-1 shrink self-stretch headingsh5medium basis-12 max-md:max-w-full'>
          {title}
        </h2>
        {subtitle && (
          <p className='mt-2 text-xl tracking-tight leading-snug max-md:max-w-full'>
            {subtitle}
          </p>
        )}
        {/* <a
          href="#shop-now"
          className="gap-2 self-stretch px-6 py-3 my-auto text-sm leading-none bg-white rounded border-gray-300 border-solid shadow-sm border-[0.5px] max-md:px-5"
        >
          Shop now
        </a> */}
      </div>

      <div className='flex flex-col justify-center mt-8 w-full max-md:max-w-full'>
        {/* For larger screens (md and above) */}
        <div className='hidden md:flex gap-16 w-full justify-between'>
          {products.length <= 4 ? (
            products.map((product, index) => (
              <div
                key={index}
                className='flex-grow flex-shrink-0 min-w-[250px] lg:min-w-[22%]' // Ensure minimum width for cards and allow them to grow
              >
                <ProductCard {...product} />
              </div>
            ))
          ) : (
            <motion.div
              ref={carouselRef}
              className='cursor-grab overflow-hidden w-full'>
              <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                className='flex gap-16'
                style={{ paddingRight: '16px' }}>
                {products.map((product, index) => (
                  <motion.div key={index} className='min-w-[250px]'>
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* For smaller screens - always use the carousel */}
        <div className='md:hidden'>
          <motion.div ref={carouselRef} className='cursor-grab overflow-hidden'>
            <motion.div
              drag='x'
              dragConstraints={{ right: 0, left: -width }}
              className='flex gap-8'
              style={{ paddingRight: '16px' }}>
              {products.map((product, index) => (
                <motion.div key={index} className='min-w-[250px]'>
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

export default CustomizableSection;
