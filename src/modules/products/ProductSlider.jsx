import PropTypes from 'prop-types';
import { useRef } from 'react';
import ProductCard from './components/ProductCard';

const ProductSlider = ({ products, category }) => {
  const sliderRef = useRef(null);

  // Function to handle sliding
  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; 
    }
  };

  return (
    <div className="mt-5 relative">
      {/* Category Title */}
      <h2 className="font-bold text-xl mb-4 border-b-[3px] border-[#040E42] pb-1">
        {category.charAt(0).toUpperCase() + category.slice(1)} Items
      </h2>

      <div className="relative">
        {/* Slider */}
        <div
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          ref={sliderRef}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isNew={category === 'new'} 
            />
          ))}
        </div>

        {/* Forward Arrow */}
        <button
          className="absolute top-0 right-0 h-full px-2 bg-white flex items-center justify-center"
          onClick={handleScrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#040E42]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // Validate that products is an array of product objects and is required
  category: PropTypes.string.isRequired, // Validate that category is a string and is required
};

export default ProductSlider;
