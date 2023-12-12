import React, { useState } from 'react';
import img1 from '../../assets/product.png';
import img4 from '../../assets/product2.jpg';
import img3 from '../../assets/product.png';
import img2 from '../../assets/product2.jpg';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  const imageData = [
    { path: img1, id: 1 },
    { path: img2, id: 2 },
    { path: img3, id: 3 },
    { path: img4, id: 4 },
    { path: img1, id: 5 },
  ];

  return (
    <div className="relative w-full" id="indicators-carousel">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {imageData.map((imagePath, index) => (
            <div
              key={imagePath.id}
              className={`duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <img
                src={imagePath.path}
                className="absolute inset-0 w-full h-full object-cover"
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
          {/* ... (Content with respective Tailwind classes) */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group text-gray-500 focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          {/* Next button content */}
          {/* ... (Content with respective Tailwind classes) */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
