import CloseButton from '../components/Buttons/CloseButton';
import React from 'react';

import ProductSection from '../components/ProductSection/ProductSection';
import useWindowDimensions from './../../useWindowDimensions';
import ShoppingActions from '../components/ShoppingActions/ShoppingAction';

function ProductPage() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1024; // Define breakpoint for mobile
  const goBack = () => {
    console.log('Go back');
  };

  return (
    <div className='flex flex-col items-start gap-32 bg-bg-primary px-16'>
      <div className='mt-32'>
        <CloseButton onClick={goBack} />
      </div>
      <div className='w-full'>
        {isMobile ? (
          <>
            {/* Mobile View */}
            <ProductSection isMobile={true} />
            <ShoppingActions size='Mobile' showAlert={true} />
          </>
        ) : (
          <div className='flex justify-between gap-32'>
            {/* Desktop View */}
            <div className='flex-1'>
              <ProductSection isMobile={false} />
            </div>
            <div className='flex-1'>
              <ShoppingActions size='Web' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
