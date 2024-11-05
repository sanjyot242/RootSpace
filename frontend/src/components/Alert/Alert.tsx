

interface AlertProps {
  style?: 'Fill' | 'Outline';
  color?: 'Information' | 'Warning' | 'Success' | 'Destructive';
  title: string;
  description: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  style = 'Fill',
  color = 'Information',
  title,
  description,
  onClose,
}) => {
  const colors = {
    Information: {
      fill: 'bg-bg-information border-stroke-information',
      outline: 'bg-white  border-stroke-information',
    },
    Warning: {
      fill: 'bg-bg-warning  border-stroke-warning',
      outline: 'bg-white border-stroke-warning',
    },
    Success: {
      fill: 'bg-bg-success  border-stroke-success',
      outline: 'bg-white border-stroke-success',
    },
    Destructive: {
      fill: 'bg-bg-destructive  border-stroke-destructive',
      outline: 'bg-white border-stroke-destructive',
    },
  };

  const chosenColor = colors[color][style.toLowerCase() as 'fill' | 'outline'];

  return (
    //SVG can be added to component and imported
    <div
      className={`p-16 rounded-xxs border ${chosenColor} flex items-start justify-between gap-16`}>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M12.9333 15.7333H12V12H11.0666M12 8.26667H12.0093M20.4 12C20.4 16.6392 16.6392 20.4 12 20.4C7.36078 20.4 3.59998 16.6392 3.59998 12C3.59998 7.36081 7.36078 3.60001 12 3.60001C16.6392 3.60001 20.4 7.36081 20.4 12Z'
            stroke='#0B4A6F'
            strokeWidth='1.67'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='flex flex-col items-start gap-8 w-full'>
        <strong className='block font-semibold'>{title}</strong>
        <p className='text-sm'>{description}</p>
      </div>
      {onClose && (
        <button onClick={onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M6 18L18 6M6 6L18 18'
              stroke='#151C24'
              strokeWidth='1.67'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
