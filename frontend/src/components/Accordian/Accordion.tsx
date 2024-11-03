// Accordion.tsx
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  label: string;
  description?: string;
  data?: string;
  showDescription?: boolean;
  showData?: boolean;
  icon?: ReactNode; // Accepts an icon as a ReactNode
  isDisabled?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  label,
  description = '',
  data = '',
  showDescription = true,
  showData = true,
  icon,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className='border-b rounded-xxs p-16 transition-all bg-bg-primary border-b-stroke-secondary hover:bg-bg-primary_hover'>
      <div className='flex items-center gap-16' onClick={toggleAccordion}>
        {/* Icon container */}
        {icon && (
          <div className='w-20 h-20 flex-shrink-0'>
            {React.cloneElement(icon as React.ReactElement, {
              className: 'max-w-full max-h-full w-auto h-auto', // Ensures the SVG scales correctly within the container
            })}
          </div>
        )}

        {/* Label and Data container */}
        <div className='flex flex-col flex-grow'>
          <span className='font-semibold'>{label}</span>
        </div>

        {/* Expand/Collapse icon */}
        <motion.div
          className='transform transition-transform flex-shrink-0'
          animate={{ rotate: isOpen ? 180 : 0 }}>
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
        </motion.div>
      </div>

      {/* Content section that expands */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden mt-2'>
            {showData && <p className='text-sm font-medium'>{data}</p>}
            {showDescription && (
              <p className='text-sm text-gray-600'>{description}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
