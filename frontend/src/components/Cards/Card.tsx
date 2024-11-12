import React from 'react';

interface CardProps {
  state?: 'Normal' | 'Hover' | 'Selected' | 'Disabled';
  trigger?: 'Checkbox' | 'Radio Button' | 'Switch';
  showDescription?: boolean;
  showButton?: boolean;
  paymentIcon?: React.ReactNode;
  icon?: React.ReactNode;
  header:string;
  description:string;
}

const Card: React.FC<CardProps> = ({
  state = 'Normal',
  trigger = 'Radio Button',
  showDescription = true,
  showButton = true,
  paymentIcon ,
  header='Express Shipping',
  description='Fast shipping for additional $20',
  icon,
}) => {
  const cardClasses = [
    'w-full p-16 flex items-center gap-16 border rounded-xxs',
  ];

  if (state === 'Normal') {
    cardClasses.push('bg-white border-stroke-secondary');
  } else if (state === 'Hover') {
    cardClasses.push('bg-bg-primary_hover border-stroke-secondary');
  } else if (state === 'Selected') {
    cardClasses.push('bg-bg-information border-stroke-secondary');
  } else if (state === 'Disabled') {
    cardClasses.push('bg-bg-secondary   border-stroke-secondary ');
  }

  const buttonClasses = ['py-2 px-4 border rounded-md'];
  if (state !== 'Disabled') {
    buttonClasses.push('bg-bg-information text-white');
  } else {
    buttonClasses.push('bg-gray-300 text-gray-500 cursor-not-allowed');
  }

  return (
    <div className={cardClasses.join(' ')}>
      {showButton && trigger === 'Radio Button' && (
        <input
          type='radio'
          disabled={state === 'Disabled'}
          className='cursor-pointer'
        />
      )}
      {showButton && trigger === 'Checkbox' && (
        <input
          type='checkbox'
          disabled={state === 'Disabled'}
          className='cursor-pointer'
        />
      )}
      {showButton && trigger === 'Switch' && (
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            disabled={state === 'Disabled'}
            className='sr-only peer'
          />
          <div className="  w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-checked:bg-bg-information0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-stroke-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      )}
      
      
  {icon && (<div className="w-48 h-48">
    <span className="w-full h-full flex items-center justify-center">
      <span className="w-full h-full">{icon}</span>
    </span>
    </div>
  )}


  {paymentIcon && (<div className="w-48 h-48">
    <span className="w-full h-full flex items-center justify-center">
      <span className="w-full h-full">{paymentIcon}</span>
    </span>
    </div>
  )}


      
     
      
      <div className='flex flex-col gap-8 '>
        <h4 className='text-text-primary font-normal paragraphsmallregular'>{header}</h4>
        {showDescription && (
          <p className='text-text-paragraph font-normal paragraphmediumregular'>
            {description}
          </p>
        )}
      </div>
      
      {showButton && (
        <button
          disabled={state === 'Disabled'}
          className={buttonClasses.join(' ')}>
          Select
        </button>
      )}
    </div>
  );
};

export default Card;
