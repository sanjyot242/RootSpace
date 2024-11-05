


interface IconButtonProps {
  src: string;
  alt: string;
  onClick?: () => void; // Optional onClick handler
}

const IconButton = ({ src, alt, onClick }:IconButtonProps) => {
  return (
    <button className="flex gap-[-8px] items-end justify-end" aria-label={alt} onClick={onClick}>
      <div >
        <img loading="lazy" src={src} alt={alt} className="object-contain  my-auto w-24 h-24 aspect-square" />
      </div>
    </button>
  );
};

export default IconButton;





