import React from 'react';

interface CardProps {
  state?: 'Normal' | 'Hover' | 'Selected' | 'Disabled';
  trigger?: 'Checkbox' | 'Radio Button' | 'Switch';
  showDescription?: boolean;
  showButton?: boolean;
  showPaymentIcon?: boolean;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  state = 'Normal',
  trigger = 'Radio Button',
  showDescription = true,
  showButton = true,
  showPaymentIcon = true,
  icon,
}) => {
  const cardClasses = [
    'w-[493px] h-[88px] p-4 flex items-center gap-4 border rounded-lg',
  ];

  if (state === 'Normal') {
    cardClasses.push('bg-white border-gray-300');
  } else if (state === 'Hover') {
    cardClasses.push('bg-gray-100 border-gray-300');
  } else if (state === 'Selected') {
    cardClasses.push('bg-blue-50 border-blue-200');
  } else if (state === 'Disabled') {
    cardClasses.push('bg-gray-200 border-gray-300');
  }

  const buttonClasses = ['py-2 px-4 border rounded-md'];
  if (state !== 'Disabled') {
    buttonClasses.push('bg-blue-500 text-white');
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
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-checked:bg-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      )}

      {icon && <span>{icon}</span>}
      <div className='flex-grow'>
        <h4 className='font-semibold'>Express Shipping</h4>
        {showDescription && (
          <p className='text-sm text-gray-600'>
            Free shipping for an additional $23
          </p>
        )}
      </div>
      {showPaymentIcon && <span className='material-icons'>credit_card</span>}
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
