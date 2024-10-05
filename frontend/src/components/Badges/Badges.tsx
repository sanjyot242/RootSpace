import React from 'react';


//stlying needs to be  worked out 


// Define the props for the Badge component
interface BadgeProps {
    size?: 'Small' | 'Medium' | 'Large';
    bgColor?: string;      // Background color class
    textColor?: string;    // Text color class
    borderColor?: string;  // Border color class (for outline badges)
    style?: 'Fill' | 'Outline';
    label: string;
    leftIcon?: boolean;
    rightIcon?: boolean;
  }
  
  const Badge: React.FC<BadgeProps> = ({
    size = 'Small',
    bgColor = 'bg-gray-800',
    textColor = 'text-white',
    borderColor = 'border-gray-600',
    style = 'Outline',
    label,
    leftIcon = false,
    rightIcon = false,
  })=> {
  // Define size classes
  const sizeClasses = {
    Small: 'font-inter text-overline-mobile uppercase font-semibold py-0 px-4 gap-4',
    Medium: 'font-inter text-overline-mobile uppercase font-semibold py-2 px-8 gap-8',
    Large: 'font-inter text-overline-mobile uppercase font-semibold py-4 px-8 gap-8',
  };

   // Define the base styles depending on the badge style (fill or outline)
   

   // Combine styles for the badge
   const badgeClasses = `flex items-center rounded-xxs ${
     style === 'Fill' ? bgColor : `border ${borderColor}`
   } ${sizeClasses[size]} ${textColor}`;
 
   return (
     <div className={badgeClasses}>
       {leftIcon && <span className="material-icons">add</span>}
       <span>{label}</span>
       {rightIcon && <span className="material-icons">check</span>}
     </div>
   );
 };


export default Badge;
