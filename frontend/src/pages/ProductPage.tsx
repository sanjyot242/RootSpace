import CloseButton from '../components/Buttons/CloseButton';

import ProductSection from '../components/ProductSection/ProductSection';

import { newProducts, trendingProducts } from '../../dummyData/data';
import useWindowDimensions from './../../useWindowDimensions';
import ShoppingActions from '../components/ShoppingActions/ShoppingAction';
import InformationAccordianSet from '../components/InformationAccordianSet/InformationAccordian';
import CustomizableSection from '../components/CustomizableSection';
import NewsletterSignup from '../components/NewsletterSignup';

function ProductPage() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1024; // Define breakpoint for mobile
  const goBack = () => {
    console.log('Go back');
  };

  return (
    <>
      <div className='flex flex-col items-start gap-32 bg-bg-primary px-16 lg:px-120 lg:py-64 lg:gap-64'>
        {isMobile && (
          <div className='mt-32'>
            <CloseButton onClick={goBack} />
          </div>
        )}

        {isMobile ? (
          <>
            {/* Mobile View */}
            <ProductSection isMobile={true} />
            <ShoppingActions size='Mobile' showAlert={true} />
          </>
        ) : (
          <>
            <div className='flex justify-between gap-32'>
              {/* Desktop View */}
              <div className='flex-1'>
                <ProductSection isMobile={false} />
              </div>
              <div className='flex-1'>
                <ShoppingActions size='Web' />
              </div>
            </div>
          </>
        )}
      </div>

      <InformationAccordianSet />
      <CustomizableSection
        title='You may also like'
        products={trendingProducts}
        subtitle={''}
      />
      <CustomizableSection
        title='Trending'
        products={trendingProducts}
        subtitle={''}
      />
      <NewsletterSignup />
    </>
  );
}

export default ProductPage;
