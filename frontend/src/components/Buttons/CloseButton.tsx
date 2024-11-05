// CloseButton.tsx


type CloseButtonProps = {
  onClick: () => void;
  className?: string;
};

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = '',
}) => (
  <button onClick={onClick} className={`self-start text-white ${className}`}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'>
      <path
        d='M11.8222 21.6224L4.2 14.0002M4.2 14.0002L11.8222 6.37793M4.2 14.0002L23.8 14.0002'
        stroke='#171717'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </button>
);

export default CloseButton;
