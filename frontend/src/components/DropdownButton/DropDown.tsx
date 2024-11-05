import  { useState } from 'react';

interface DropdownProps {
  label: string;
}



const Dropdown: React.FC<DropdownProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' inline-flex flex-col p-12 items-start gap-8   bg-bg-primary '>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-8 paragraphsmallregular text-text-primary w-full justify-between'>
        {label}
        <span className='flex-shrink-0 items-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'>
            <path
              d='M15 8L10 13L5 8'
              stroke='#151C24'
              strokeWidth='1.67'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className='w-full flex-1'>
          <ul>
            <li className='p-8 items-center text-paragraph-xsmall-regular '>
              Action 1
            </li>
            <li className='p-8 items-center text-paragraph-xsmall-regular'>
              Action 2
            </li>
            <li className='p-8 items-center text-paragraph-xsmall-regular'>
              Action 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
