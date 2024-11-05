


// Define types for the chip's properties
type ChipProps = {
  label: string;
  style?: 'Light' | 'Dark';
  state?: 'Neutral' | 'Destructive' | 'Information' | 'Warning' | 'Success';
  size?: 'Small' | 'Large';
  icon?: 'NoIcon' | 'Avatar' | 'Icon';
  showCross?: boolean;
};

// Chip component
const Chip: React.FC<ChipProps> = ({
  label,
  style = 'Light',
  state = 'Neutral',
  size = 'Small',
  icon = 'NoIcon',
  showCross = false,
}) => {
  // Define the base styles based on props
  const baseStyles = {
    Light: {
      Neutral: 'bg-bg-secondary-inverse text-text-inverse',
      Destructive: 'bg-bg-desctructive text-text-primary',
      Information: 'bg-bg-information text-text-primary',
      Warning: 'bg-bg-warning text-text-primary',
      Success: 'bg-bg-success text-text-primary',
    },
    Dark: {
      Neutral: 'bg-bg-primary-inverse text-text-inverse',
      Destructive: 'bg-bg-desctructive-inverse text-text-inverse',
      Information: 'bg-bg-information-inverse  text-text-inverse',
      Warning: 'bg-bg-warning-inverse text-text-inverse',
      Success: 'bg-bg-success-inverse text-text-inverse',
    },
  };

  const sizeStyles = {
    Small: 'px-6 py-2 font-inter font-medium uppercase font-overline-web',
    Large: 'px-8 py-4 font-inter font-medium uppercase font-overline-web',
  };

  const iconStyles = {
    NoIcon: '',
    Avatar: 'pl-1',
    Icon: 'pl-1',
  };

  const crossStyles = showCross ? 'pr-1' : '';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-max gap-4 ${baseStyles[style][state]} ${sizeStyles[size]} ${iconStyles[icon]} ${crossStyles} `}
    >
      {/* Optionally render an icon or avatar */}
      {icon !== 'NoIcon' && (
        <span className="mr-1">
          {/* This is where the avatar or icon would be placed */}
          {icon === 'Avatar' ? '👤' : '🔔'}
        </span>
      )}

      <span>{label}</span>

      {/* Optionally render the close icon (cross) */}
      {showCross && (
        <img src='/public/images/cross-icon.svg' />
      )}
    </div>
  );
};

export default Chip;
