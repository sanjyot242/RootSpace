import { useState } from 'react';

interface QuantitySelectorProps {
  min?: number;
  max?: number;
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  min = 1,
  max = 10,
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  return (
    <div className='flex items-center gap-2 p-2 border rounded shadow-md w-24'>
      {/* Decrement Button */}
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`flex justify-center items-center w-8 h-8 border rounded ${
          quantity <= min
            ? 'text-gray-400 bg-gray-200 cursor-not-allowed'
            : 'text-black'
        }`}>
        -
      </button>

      {/* Quantity Display */}
      <div className='flex-1 text-center'>{quantity}</div>

      {/* Increment Button */}
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`flex justify-center items-center w-8 h-8 border rounded ${
          quantity >= max
            ? 'text-gray-400 bg-gray-200 cursor-not-allowed'
            : 'text-black'
        }`}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
