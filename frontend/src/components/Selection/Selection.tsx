import  { useState } from 'react';
import Badge from '../Badges/Badges';


type SelectionProps = {
  label: string;
  showBadge?: boolean;
  showSwitch?: boolean;
  showRadioButton?: boolean;
  showIcon?: boolean;
  onClick?: () => void;
};

const Selection: React.FC<SelectionProps> = ({
  label,
  showBadge = true,
  showSwitch = true,
  showRadioButton = true,
  showIcon = true,
  onClick
}) => {
  // Handle dynamic hover state
  const [isHovered, setIsHovered] = useState(false);

  // Background color based on hover state
  const backgroundColor = isHovered ? 'bg-gray-100' : 'bg-bg-primary';

  return (
    <div
    onClick={onClick}
      className={`flex items-center p-12 ${backgroundColor} rounded-lg transition duration-200 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}  // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Remove hover state on mouse leave
    >
      {/* Left Section: Label and Badge */}
      <div className="flex-1 flex-shrink-0 basis-0 ">
        <span className="font-normal font-ebgaramond text-paragraph-small-regular text-text-primary">{label}</span>
      </div>

      {/* Right Section: Switch, Radio, and Icon */}
      <div className="flex   items-center gap-4">

      {showBadge && (
          <Badge
          size="Small"
          bgColor="bg-bg-information"
          borderColor="border-stroke-information"
          textColor="text-text-information-inverse"
          label="+ Badge" //dynamic label 
          style="Fill"
        />
        )}


        {showSwitch && (
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        )}

        {showRadioButton && (
          <input type="radio" name="selection" className="form-radio" />
        )}

        {showIcon && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 5L12 10L7 15" stroke="#151C24" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
        )}
      </div>
    </div>
  );
};

export default Selection;
