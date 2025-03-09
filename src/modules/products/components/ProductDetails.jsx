import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../../mockdata/ProductData";
import ProductCard from "./ProductCard";
import LineChart from "./LineChart";
import plusIcon from "../../../assets/plus-icon.svg";
import minusIcon from "../../../assets/minus-icon.svg";
import garriCoin from "../../../assets/products/garri-coin.svg";
import phoneicon from "../../../assets/phone-icon.svg";
import avatar from "../../../assets/avatar.svg";
import arrow from "../../../assets/categories/arrow-down.svg";
import cartIcon from "../../../assets/cart.svg";
import Button from "../../../components/Button";
import { useCart } from "../../../context/CartContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [liked, setLiked] = useState(false);
  const { addItemToCart, increaseItemQuantity, decreaseItemQuantity, items } = useCart();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
    const foundSimilarProducts = products.filter((p) => p.id !== productId);
    setSimilarProducts(foundSimilarProducts);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const itemInCart = items.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  const handleIncreaseQuantity = () => {
    increaseItemQuantity(product.id);
  };

  const handleDecreaseQuantity = () => {
    decreaseItemQuantity(product.id);
  };

  return (
    <div className="p-4">
      {/* header */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1 mx-2">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          {product.category.toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="bg-[#FCFCFC] flex flex-col gap-7 rounded-3xl">
          {/* product image and details */}
          <div className="flex flex-col gap-4 bg-white p-4">
            <div className="relative flex-shrink-0 w-[50%] mx-auto flex justify-center items-center">
              
              {/* Heart Icon Toggle */}
              <button
                className="absolute top-4 right-0 md:right-16  focus:outline-none"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                  >
                    <path
                      d="M11.4877 3.16991L10.9102 3.7257C11.0613 3.88268 11.2698 3.97138 11.4877 3.97138C11.7056 3.97138 11.914 3.88268 12.0651 3.7257L11.4877 3.16991ZM8.73709 16.871C7.11743 15.5942 5.34638 14.3473 3.94138 12.7652C2.56385 11.214 1.60293 9.4041 1.60293 7.05592H0C0 9.90433 1.1867 12.0774 2.74285 13.8296C4.27152 15.5509 6.22019 16.9279 7.74474 18.1298L8.73709 16.871ZM1.60293 7.05592C1.60293 4.75745 2.9017 2.82997 4.67452 2.01961C6.39683 1.23234 8.71103 1.44083 10.9102 3.7257L12.0651 2.61413C9.45568 -0.0969718 6.42678 -0.543801 4.00814 0.561765C1.64002 1.64424 0 4.15774 0 7.05592H1.60293ZM7.74474 18.1298C8.29211 18.5613 8.87974 19.0215 9.47524 19.3694C10.0706 19.7172 10.7499 20 11.4877 20V18.3971C11.1568 18.3971 10.7675 18.2681 10.284 17.9854C9.80064 17.703 9.29921 17.3141 8.73709 16.871L7.74474 18.1298ZM15.2306 18.1298C16.7551 16.9279 18.7038 15.5509 20.2325 13.8296C21.7886 12.0774 22.9753 9.90433 22.9753 7.05592H21.3724C21.3724 9.4041 20.4115 11.214 19.0339 12.7652C17.6289 14.3473 15.8579 15.5942 14.2383 16.871L15.2306 18.1298ZM22.9753 7.05592C22.9753 4.15774 21.3353 1.64424 18.9671 0.561765C16.5485 -0.543801 13.5196 -0.0969718 10.9102 2.61413L12.0651 3.7257C14.2643 1.44083 16.5785 1.23234 18.3008 2.01961C20.0736 2.82997 21.3724 4.75745 21.3724 7.05592H22.9753ZM14.2383 16.871C13.6761 17.3141 13.1747 17.703 12.6914 17.9854C12.2078 18.2681 11.8185 18.3971 11.4877 18.3971V20C12.2254 20 12.9048 19.7172 13.5001 19.3694C14.0956 19.0215 14.6832 18.5613 15.2306 18.1298L14.2383 16.871Z"
                      fill="#808080"
                    />
                  </svg>
                )}
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-[172px] h-[197px] object-cover rounded"
              />
            </div>

            <div className="flex justify-center items-center gap-[29px]">
              {/* quantity +/- icon */}
              <div className="flex items-center justify-center gap-3 bg-[#E6E8FF] rounded-full p-2">
                <button className="w-9 h-9" onClick={handleDecreaseQuantity}>
                  <img
                    src={minusIcon}
                    alt="reduce quantity"
                    className="w-9 h-9"
                  />
                </button>
                <p className="font-roboto text-xl text-black font-bold">{quantity}</p>
                <button className="w-9 h-9" onClick={handleIncreaseQuantity}>
                  <img
                    src={plusIcon}
                    alt="increase quantity"
                    className="w-9 h-9"
                  />
                </button>
              </div>

              {/* price */}
              <div className="flex gap-[5px] bg-[#E6E8FF] rounded-full items-center py-2 px-4">
                <img src={garriCoin} alt="garri currency" className="w-9 h-9" />
                <p className="font-bold text-black text-xl font-roboto">
                  {product.price}
                </p>
              </div>
            </div>

            {/* product description and details */}
            <div className="w-full flex flex-col justify-between">
              {/* name and description */}
              <div>
                <h1 className="text-xl lg:text-[40px] text-center font-bold text-[#151B3B] mb-2">
                  {product.name}
                </h1>
                <p className="text-sm lg:text-base text-[#BBB6B6] mb-3">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamc
                </p>
              </div>
              {/* ratings and phone */}
              <div className="flex justify-between">
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(product.rating)
                            ? "text-[#151C71]"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.985a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.985c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.985a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.589-1.81h4.184a1 1 0 00.95-.69l1.286-3.985z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} / 5
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <img
                    src={phoneicon}
                    alt="seller contact phone"
                    className="w-5 h-5"
                  />
                  <span className="text-[#BBB6B6] text-base font-roboto">
                    {product.phone}
                  </span>
                </div>
              </div>
            </div>
            {/* reviews section */}
            <div>
              <div className="p-[10px] flex gap-2 items-center bg-[#FCFCFC] shadow-md rounded-[6px]">
                <div className="w-[75px] h-auto">
                  <img
                    src={avatar}
                    alt="user avatar"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-roboto font-bold text-base lg:text-xl">
                    Gal Gadot from USA
                  </h2>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(product.rating)
                            ? "text-[#151C71]"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.985a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.985c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.985a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.589-1.81h4.184a1 1 0 00.95-.69l1.286-3.985z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-roboto text-sm text-black">
                    {product.reviews}
                  </p>
                </div>
              </div>
              <Link to="reviews" className="flex items-center gap-2 mt-2">
                <p className="text-[#080E52] font-roboto font-bold text-xl">
                  see all
                </p>
                <img src={arrow} alt="" />
              </Link>
            </div>
          </div>

          {/* Linechart section */}
          <div className="">
            <LineChart
              data={product.priceHistory}
              currentPrice={product.price}
            />
          </div>

          {/* add to cart button */}
          <div className="flex items-center justify-center mb-4">
            <Button 
            label="Add to cart" 
            bgColor="#151C71" 
            icon={cartIcon} 
            onClick={handleAddToCart}
            />
          </div>
        </div>

        {/* similar products */}
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-[3px] border-[#040E42] pb-1">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
            {similarProducts.map((similarProduct) => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;