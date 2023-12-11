import React, { useState } from 'react';
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };
  const imageData = [
    '../../assets/footerContact.png',
    '../../assets/footerContact.png',
    '../../assets/footerContact.png',
    '../../assets/footerContact.png',
    '../../assets/footerContact.png',
  ];
  

  return (
    <div className="relative w-full" id="indicators-carousel">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {imageData.map((imagePath, index) => (
        <div
          key={index}
          className={`hidden duration-700 ease-in-out ${activeIndex === index ? 'block' : ''}`}
          data-carousel-item={activeIndex === index ? 'active' : ''}
        >
          <img
            src={imagePath}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      </div>
      
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={activeIndex === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center text-gray-500 h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        {/* Previous button content */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group text-gray-500 focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default Carousel;
