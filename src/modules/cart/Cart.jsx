import { useCart } from "../../context/CartContext";
import PropTypes from "prop-types";
import { useEffect } from "react";
import garriCoin from "../../assets/products/garri-coin.svg";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import { useNavigate } from "react-router-dom";
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < rating;
    return (
      <svg
        key={index}
        className={`w-4 h-4 ${isFilled ? "text-[#0F172A]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.985c.14.436.55.733.99.733h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46c-.356.258-.51.7-.382 1.123l1.286 3.985c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1.125 1.125 0 00-1.176 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.286-3.985c.128-.422-.026-.865-.382-1.123l-3.39-2.46c-.783-.57-.38-1.81.589-1.81h4.184c.44 0 .85-.297.99-.733l1.286-3.985z" />
      </svg>
    );
  });
  return <div className="flex">{stars}</div>;
};

const Cart = () => {
  const {
    items,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useCart();

  const navigate = useNavigate();
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          CART
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.length === 0 ? (
          <p className="text-center text-[#080E52] font-bold font-roboto">
            Your cart is empty
          </p>
        ) : (
          <>
          {/* cart item container */}
            {items.map((item) => (
              <div
                key={item.id}
                className="relative flex items-start justify-between bg-[#FCFCFC] rounded-[16px] shadow p-4"
              >
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="absolute top-0 right-4 text-red-600 text-[10px] lg:text-[8px] hover:underline"
                >
                  Remove
                </button>
                {/* product image */}
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover "
                  />
                  {/* product namem, rating and price */}
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xs md:text-base font-bold text-black font-roboto">
                      {item.name}
                    </h2>

                    <div className="flex items-center">
                      <StarRating rating={item.rating} />
                      <span className="ml-2 text-xs text-gray-600">
                        {item.reviewsCount}
                      </span>
                    </div>
                    {/* price */}
                    <div className="flex items-center justify-center gap-1 bg-[#FFFFE6] p-1 w-fit rounded-[8px]">
                      <img
                        src={garriCoin}
                        alt="garri currency symbol"
                        className="w-[16.533px] h-[16px]"
                      />
                      <span className="text-base font-roboto text-black">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* right part of the cart item card */}
                <div className="flex flex-col items-end gap-3">
                  {/* plus and minus icon */}
                  <div className="flex items-center justify-center gap-[7px] bg-[#FFFFE6] rounded-[6px] p-1">
                    <button onClick={() => decreaseItemQuantity(item.id)}>
                      <img
                        src={minusIcon}
                        alt="reduce quantity"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </button>
                    <span className="text-base font-roboto text-black">{item.quantity}</span>
                    <button onClick={() => increaseItemQuantity(item.id)}>
                    <img
                    src={plusIcon}
                    alt="reduce quantity"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                    </button>
                  </div>
                  {/* item total price */}
                  <div className="flex items-center justify-center gap-1 bg-[#FFFFE6] p-1 w-fit rounded-[8px]">
                  <img
                        src={garriCoin}
                        alt="garri currency symbol"
                        className="w-[16.533px] h-[16px]"
                      />
                      <span className="text-base text-black font-roboto">
                        {item.price * item.quantity}
                      </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <div className="text-lg font-semibold font-roboto text-black flex items-center gap-1">
                <p>Total:</p>
                <img
                        src={garriCoin}
                        alt="garri currency symbol"
                        className="w-[18.533px] h-[18px]"
                      />
                 <p>{calculateTotalPrice()}</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/escrow")}
              type="button"
              className="w-full lg:w-[50%] lg:mx-auto flex items-center justify-center text-lg bg-[#151C71] text-[#FCFCFC] font-bold py-2 rounded-md hover:bg-[#273094] transition"
            >
              CHECKOUT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Cart;
