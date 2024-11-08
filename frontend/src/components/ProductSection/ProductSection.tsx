import { useState } from 'react';
import CircleIndicator from '../../CircleIndicator.jsx'; // Import the reusable SVG component

const ProductSection = ({ isMobile }) => {
  const [selectedImage, setSelectedImage] = useState(
    '/images/sampleProduct.png'
  ); // Default image path
  const images = [
    '/images/sampleProduct.png',
    '/images/sampleProduct2.png',
    '/images/sampleProduct2.png',
    '/images/sampleProduct2.png',
    '/images/sampleProduct2.png',
    '/images/sampleProduct2.png',
  ]; // Array of image paths

  return (
    <div className='w-full'>
      {isMobile ? (
        <div className='flex flex-col items-start gap-8 self-stretch w-full'>
          {/* Main Product Image */}
          <div
            className='w-full h-[357px] bg-contain bg-no-repeat bg-center rounded-xxs'
            style={{ backgroundImage: `url(${selectedImage})` }}>
            {/* The main image container with height and background image set dynamically */}
          </div>

          {/* Ellipse Slider Indicators using a Single Reusable SVG */}
          <div className='flex justify-center w-full gap-16 self-stretch'>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className='cursor-pointer '>
                <CircleIndicator
                  fill={selectedImage === image ? '#151C24' : '#E4E7EC'}
                />
              </div>
            ))}
          </div>

          {/* Thumbnails Slider */}
          <div className='flex items-start gap-8 self-stretch '>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`w-48 h-48 bg-cover  bg-no-repeat rounded-xxs cursor-pointer ${
                  selectedImage === image ? 'border-2 border-black' : ''
                }`}
                style={{ backgroundImage: `url(${image})` }}>
                {/* Thumbnail images are rendered as divs with a background */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-start self-stretch gap-16'>
          {/* Desktop Image View */}
          <div className='flex flex-1 justify-center w-full '>
            <img
              src={selectedImage}
              alt='Product'
              className='max-w-full h-[676px]  bg-no-repeat bg-contain object-cover rounded-xxs'
            />
          </div>
          {/* Add more images or thumbnails if needed */}

          {/* Ellipse Slider Indicators using a Single Reusable SVG */}
          <div className='flex justify-center w-full gap-16 self-stretch'>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className='cursor-pointer '>
                <CircleIndicator
                  fill={selectedImage === image ? '#151C24' : '#E4E7EC'}
                />
              </div>
            ))}
          </div>

          {/* Thumbnails Slider */}
          <div className='flex items-start gap-8 self-stretch '>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`w-96 h-96 bg-cover  bg-no-repeat rounded-xxs cursor-pointer ${
                  selectedImage === image ? 'border-2 border-black' : ''
                }`}
                style={{ backgroundImage: `url(${image})` }}>
                {/* Thumbnail images are rendered as divs with a background */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
