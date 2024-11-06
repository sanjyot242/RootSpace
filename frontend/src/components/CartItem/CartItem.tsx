import { Button } from '../Buttons/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

interface Product {
  image: string;
  status: string;
  name: string;
  salePrice: string;
  originalPrice: string;
  comparePrice: string;
}

interface CartItemProp {
  quantity: number;
  size: string;
  products: Product;
}

const CartItem: React.FC<CartItemProp> = ({ quantity, size, products }) => {
  const handleQuantityChange = (newQuantity: number) => {
    console.log('Quantity changed to:', newQuantity);
    // Update the quantity in the cart or perform other actions
  };
  return (
    <div className='flex items-start gap-32 self-stretch'>
      <div className='flex items-start gap-8 md:gap-32 md:flex-1 md:flex-shrink-0 md:basis-0'>
        <div className='flex-shrink-0 w-[145px] h-[215px] md:flex-1 md:flex-shrink-0 md:basis-0 md:self-stretch rounded-xxs'>
          <img
            src={products.image}
            alt='This is product image'
            className='bg-cover bg-no-repeat'
          />
        </div>
        <div className='flex flex-col items-start gap-8 flex-1 flex-shrink-0 basis-0 md:gap-16'>
          <div className='flex flex-col items-start self-stretch gap-8'>
            {/* for product details */}
            <span className='text-shades-black font-ebgaramond font-medium text-mobile-headings-h6-medium md:text-desktop-headings-h6-medium'>
              {products.name}
            </span>
            <span className='text-text-tertiary font-ebgaramond font-normal text-paragraph-medium-regular md:text-paragraph-medium-regular'>
              Description
            </span>
            <span className='text-shades-black font-ebgaramond font-medium text-mobile-headings-h6-medium md:hidden w-full '>
              $99
            </span>
          </div>
          <div className='flex flex-col justify-end self-start gap-8 '>
            {/* for size and stuff */}
            <div className='flex w-96 h-20 items-center gap-8 md:h-auto'>
              <div className='flex h-32 py-8 justify-center items-center gap-8 text-text-tertiary font-ebgaramond font-normal text-paragraph-xsmall-regular md:text-paragraph-medium-regular'>
                Size
              </div>
              <Button size='x-small' theme='link' stateProp='normal'>
                Change
              </Button>
            </div>
            <span className='text-text-tertiary font-ebgaramond font-normal text-paragraph-xsmall-regular md:text-paragraph-medium-regular'>
              Quantity
            </span>
            <div className='flex items-center gap-8 self-stretch md:gap-16'>
              <QuantitySelector
                min={1}
                max={5}
                initialQuantity={quantity}
                onQuantityChange={handleQuantityChange}
              />
              <Button
                size='x-small'
                theme='destructive-link'
                stateProp='normal'>
                Delete
              </Button>
              <Button size='x-small' theme='link' stateProp='normal'>
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* this is div for text price */}
      <span className='flex-1 flex-shrink-0 basis-0 font-ebgaramond text-shades-black text-right font-medium text-desktop-headings-h6-medium hidden md:block'>
        $99
      </span>

      <div></div>
    </div>
  );
};

export default CartItem;
