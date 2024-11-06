import CloseButton from '../components/Buttons/CloseButton';

import { trendingProducts } from '../../dummyData/data';
import useWindowDimensions from './../../useWindowDimensions';

import {
  Breadcrumb,
  BreadcrumbItemProps,
} from '../components/BreadCrumbs/BreadCrumb'; // Adjust the path if needed
import CartItem from '../components/CartItem/CartItem';

function ShoppingCartPage() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1024; // Define breakpoint for mobile
  const goBack = () => {
    console.log('Go back');
  };

  const breadcrumbItems: BreadcrumbItemProps[] = [
    { label: 'Home', state: 'Previous' },
    { label: 'Projects', state: 'Previous' },
    { label: 'Dashboard', state: 'Active' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} variant='Web' />
      <div className='flex flex-col items-start gap-32 bg-bg-primary px-16 lg:px-120 lg:py-64 lg:gap-64'>
        {isMobile && (
          <div className='mt-32'>
            <CloseButton onClick={goBack} />
          </div>
        )}

        <div className='flex flex-col items-start gap-16 '>
          {trendingProducts.map((product, index) => (
            <div key={index}>
              <CartItem products={product} size='S' quantity={1} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShoppingCartPage;
