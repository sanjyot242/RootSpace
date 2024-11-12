import CloseButton from '../components/Buttons/CloseButton';

import { trendingProducts } from '../../dummyData/data';
import {  ReturnIcon,UsersIcon , StarIcon } from '../icons/Icon';

import useWindowDimensions from './../../useWindowDimensions';

import {
  Breadcrumb,
  BreadcrumbItemProps,
} from '../components/BreadCrumbs/BreadCrumb'; // Adjust the path if needed
import CartItem from '../components/CartItem/CartItem';
import { Button } from '../components/Buttons/Button';
import Card from '../components/Cards/Card';
import CustomizableSection from '../components/CustomizableSection';
import NewsletterSignup from '../components/NewsletterSignup';

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

        <div className='flex flex-col items-start gap-16 w-full '>
          {trendingProducts.map((product, index) => (
            <div className='w-full ' key={index}>
              <CartItem products={product} size='S' quantity={1} />
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className='flex  flex-col items-start gap-16 self-stretch'>
          <span className='headingsh5medium text-shades-black'>Summary</span>
          <div className='flex items-start self-stretch gap-32'>
            <span className='flex-1 flex-shrink-0 basis-0 paragraphsmallregular text-shades-black'>
              Sub Total
            </span>
            <span className='paragraphsmallregular text-shades-black'>
              $9999
            </span>
          </div>
          <div className='flex  items-center py-16 gap-8 self-stretch border-t-[1px] border-b-[1px] border-t-stroke-primary  border-b-stroke-primary'>
            <span className='flex-1 flex-shrink-0 basis-0  text-shades-black paragraphsmallmedium'>
              Bag Total
            </span>
            <span className=' text-shades-black paragraphsmallmedium'>
              $99999
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-col items-start gap-16 self-stretch'>
          <Button
            size='medium'
            theme='primary'
            stateProp='normal'
            className='w-full'>
            Proceed to checkout
          </Button>
          <Button
            size='medium'
            theme='secondary'
            stateProp='normal'
            className='w-full'>
            Shop more ?
          </Button>
        </div>

        {/* Cards  */}
        <div className='flex flex-col items-start gap-16 self-stretch md:flex-row'>
          <Card
            state='Normal'
            trigger='Radio Button'
            icon={< ReturnIcon/>}
            showButton={false}
            showDescription={true}
            header='Express Shipping'
            description='Fash Shipping for additional $20'
          />
          <Card
            state='Normal'
            trigger='Radio Button'
            icon={< StarIcon/>}
            showButton={false}
            showDescription={true}
            header='Express Shipping'
            description='Fash Shipping for additional $20'
          />
          <Card
            state='Normal'
            trigger='Radio Button'
            icon={< UsersIcon/>}
            showButton={false}
            showDescription={true}
            header='Express Shipping'
            description='Fash Shipping for additional $20'
          />
        </div>


        
      </div>
      <div>
        <CustomizableSection
        title='Your Browsing History'
        products={trendingProducts}
        subtitle={''}
      />
        </div>
        <div>
        <CustomizableSection
        title='Trending Products'
        products={trendingProducts}
        subtitle={''}
      />
        </div>
        <NewsletterSignup />

    </>
  );
}

export default ShoppingCartPage;
