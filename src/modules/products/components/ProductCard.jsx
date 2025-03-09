import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import garriCoin from '../../../assets/products/garri-coin.svg';
import newBanner from '../../../assets/products/new-banner.svg';
import verifiedIcon from '../../../assets/products/verified user.svg';
import unverifiedIcon from '../../../assets/products/unverified-user.svg';
import locationIcon from '../../../assets/products/location-icon.svg';
import { useCart } from "../../../context/CartContext";


const ProductCard = ({ product, isNew }) => {
  const [liked, setLiked] = useState(false);
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(product);
  };



  return (
    <div className="relative border-[1px] border-[#040E42] bg-white shadow-lg rounded-[4px] p-2 w- flex-shrink-0 m-2">
      {/* New Product Banner */}
      {isNew && (
        <div className="absolute top-0 left-0 w-[40px] h-[112px]">
          <img src={newBanner} alt="new product" />
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
      </Link>

      {/* Product Info */}
      <div className="mt-2 flex flex-col gap-3">
        <h3 className="font-bold text-[14px] lg:text-[18px] font-roboto text-[#2D3339]">{product.name}</h3>
        <div className='flex justify-between items-center'>       
          <div className='flex gap-1 w-[60px] bg-[#E6E8FF] rounded-[8px] items-center p-[6px]'>
            <img src={garriCoin} alt="garri currency" className='w-[20.667px] h-[20px]' />
            <p className="font-bold text-black text-[18px] font-roboto">{product.price}</p>
          </div>
          <div>
            {/* Dynamically determine verified or unverified status */}
            {product.isVerified ? (
              <img src={verifiedIcon} alt='verified user' className='w-6 h-6 lg:w-9 lg:h-9' />
            ) : (
              <img src={unverifiedIcon} alt='unverified user' className='w-6 h-6 lg:w-9 lg:h-9' />
            )}
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <img src={locationIcon} alt="location icon" className='w-5 h-5' />
          <p className="text-[#C2C0C1] font-medium text-[12px] lg:text-[16px] font-roboto">{product.location}</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
       onClick={handleAddToCart} 
      className="bg-[#151C71] text-white mt-3 px-4 py-2 rounded-[6px] w-full">
        Add to Cart
      </button>

      {/* Heart Icon Toggle */}
      <button
        className="absolute top-2 right-2 focus:outline-none"
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
            <path d="M11.4877 3.16991L10.9102 3.7257C11.0613 3.88268 11.2698 3.97138 11.4877 3.97138C11.7056 3.97138 11.914 3.88268 12.0651 3.7257L11.4877 3.16991ZM8.73709 16.871C7.11743 15.5942 5.34638 14.3473 3.94138 12.7652C2.56385 11.214 1.60293 9.4041 1.60293 7.05592H0C0 9.90433 1.1867 12.0774 2.74285 13.8296C4.27152 15.5509 6.22019 16.9279 7.74474 18.1298L8.73709 16.871ZM1.60293 7.05592C1.60293 4.75745 2.9017 2.82997 4.67452 2.01961C6.39683 1.23234 8.71103 1.44083 10.9102 3.7257L12.0651 2.61413C9.45568 -0.0969718 6.42678 -0.543801 4.00814 0.561765C1.64002 1.64424 0 4.15774 0 7.05592H1.60293ZM7.74474 18.1298C8.29211 18.5613 8.87974 19.0215 9.47524 19.3694C10.0706 19.7172 10.7499 20 11.4877 20V18.3971C11.1568 18.3971 10.7675 18.2681 10.284 17.9854C9.80064 17.703 9.29921 17.3141 8.73709 16.871L7.74474 18.1298ZM15.2306 18.1298C16.7551 16.9279 18.7038 15.5509 20.2325 13.8296C21.7886 12.0774 22.9753 9.90433 22.9753 7.05592H21.3724C21.3724 9.4041 20.4115 11.214 19.0339 12.7652C17.6289 14.3473 15.8579 15.5942 14.2383 16.871L15.2306 18.1298ZM22.9753 7.05592C22.9753 4.15774 21.3353 1.64424 18.9671 0.561765C16.5485 -0.543801 13.5196 -0.0969718 10.9102 2.61413L12.0651 3.7257C14.2643 1.44083 16.5785 1.23234 18.3008 2.01961C20.0736 2.82997 21.3724 4.75745 21.3724 7.05592H22.9753ZM14.2383 16.871C13.6761 17.3141 13.1747 17.703 12.6914 17.9854C12.2078 18.2681 11.8185 18.3971 11.4877 18.3971V20C12.2254 20 12.9048 19.7172 13.5001 19.3694C14.0956 19.0215 14.6832 18.5613 15.2306 18.1298L14.2383 16.871Z" fill="#808080"/>
          </svg>
        )}
      </button>
    </div>
  );
};

// Define PropTypes for the component to ensure the expected data types are passed
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    isVerified: PropTypes.bool, // Add this new property for verification status
  }).isRequired,
  isNew: PropTypes.bool,
};

export default ProductCard;