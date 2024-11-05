import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Buttons/Button';
import Alert from '../Alert/Alert';

const ShoppingActions = ({
  size = 'Web',
  showRatings = false,
  showAlert = true,
  normalPrice = true,
  buttonSetActive = true,
  salePrice = true,
  sizeSelection = true,
  oneSizeText = true,
  slashedPrice = true,
}) => {
  const itemSpacing = size === 'Web' ? 'gap-64' : 'gap-32';

  return (
    <div className={`flex flex-col ${itemSpacing}`}>
      <div className='flex flex-col gap-8 items-start self-stretch'>
        <h2 className='headingsh4medium text-text-primary'>Product Name</h2>
        <p className='paragraphsmallregular text-text-tertiary'>
          Product Description
        </p>

        {showRatings && (
          <p className='text-sm text-yellow-500'>⭐ Ratings: 4.5/5</p>
        )}

        <div className='flex items-center gap-16'>
          {normalPrice && (
            <p
              className={`${
                slashedPrice ? 'line-through' : ''
              } text-text-primary font-inter paragraphlargemedium`}>
              $24
            </p>
          )}
          {salePrice && (
            <p className='text-text-destructive font-inter paragraphlargemedium'>
              $24
            </p>
          )}
        </div>

        <p
          className={` ${
            size == 'Web' ? 'paragraphmediumregular' : 'paragraphsmallregular'
          } text-text-tertiary`}>
          All taxes included
        </p>
      </div>

      {sizeSelection && (
        <div className='flex flex-col gap-8'>
          <p
            className={` ${
              size == 'Web' ? 'paragraphmediumregular' : 'paragraphsmallregular'
            } text-text-tertiary`}>
            Select a size
          </p>

          <div className='flex gap-32 items-center self-stretch justify-between'>
            <div className='flex gap-8 '>
              <Button
                size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='normal'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                XS
              </Button>
              <Button
                size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='normal'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                S
              </Button>
              <Button
                size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='normal'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                M
              </Button>
              <Button
                size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='normal'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                L
              </Button>
              <Button
               size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='normal'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                XL
              </Button>
              <Button
                size={size == "Web" ? "small" : 'x-small' }
                theme='secondary'
                stateProp='disabled'
                socialMediaIcon={false}
                leftIcon={false}
                rightIcon={false}
                className={size == "Web" ? "w-[49px]" : 'w-[39px]' }>
                XL
              </Button>
            </div>

            <p className='paragraphsmallunderline underline text-text-tertiary'>
              Size Guide
            </p>
          </div>
          {oneSizeText && (
            <p className='paragraphsmallunderline underline text-text-tertiary'>
              One Size Available
            </p>
          )}
        </div>
      )}

      <div className='flex items-center gap-16 self-stretch'>
        <Button
          size='large'
          stateProp={buttonSetActive ? 'normal' : 'disabled'}
          theme='primary'
          leftIcon={false}
          rightIcon={true}
          socialMediaIcon={false}
          className='w-1/2'>
          Add to Bag
        </Button>
        <Button
          size='large'
          stateProp={buttonSetActive ? 'normal' : 'disabled'}
          theme='secondary'
          leftIcon={false}
          rightIcon={false}
          socialMediaIcon={false}
          className='w-1/2'>
          Add to Wishlist
        </Button>
      </div>

      {showAlert && (
        <Alert
          style='Fill'
          color='Information'
          title='Information Alert'
          description='This is an information alert.'
          onClose={() => console.log('Alert closed')}
        />
      )}
    </div>
  );
};

ShoppingActions.propTypes = {
  size: PropTypes.oneOf(['Web', 'Mobile']),
  showRatings: PropTypes.bool,
  showAlert: PropTypes.bool,
  buttonSetDisabled: PropTypes.bool,
  normalPrice: PropTypes.bool,
  buttonSetActive: PropTypes.bool,
  salePrice: PropTypes.bool,
  sizeSelection: PropTypes.bool,
  oneSizeText: PropTypes.bool,
  slashedPrice: PropTypes.bool,
};

export default ShoppingActions;
