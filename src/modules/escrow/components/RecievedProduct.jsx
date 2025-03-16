import { useState } from "react";
import bgImage from "../../../assets/escrowBg.png";

const RecievedProduct = () => {
  const [rating, setRating] = useState(0);

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="pt-8 px-8 lg:px-12 lg:pt-16 text-[#FCFCFC] w-full" style={backgroundImage}>
      {/* header text */}
      <div className="relative flex items-center justify-center lg:mb-20">
        <h1 className="absolute z-0 text-[#FFFFE6] font-roboto text-[36px] md:text-[64px] lg:text-[128px] font-bold opacity-20">
          $Garri Escrow
        </h1>
        <h2 className="relative z-10 text-center text-xl md:text-[40px] lg:text-[64px] font-extrabold text-[#fcfcfc] font-roboto">
          $Garri Escrow
        </h2>
      </div>
      {/* main content */}
      <div className="flex flex-col gap-6">
        <h2 className="text-sm md:text-lg lg:text-2xl text-center text-[#0B7B69] lg:font-bold font-roboto mt-8">
          Success! Your order has arrived. Thank you for shopping with us.
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full font-roboto text-sm md:text-lg lg:text-xl text-[#FCFCFC] mb-3">
            <p>Comment:</p>
            <div className="flex items-center gap-2">
              <p>Rating: </p>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 cursor-pointer ${index < rating ? 'text-[#0B7B69] fill-current' : 'text-white fill-transparent stroke-current'}`}
                    viewBox="0 0 24 24"
                    onClick={() => handleRatingClick(index)}
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* comment input field */}
          <textarea
            className="w-full h-40 p-2 border border-black bg-[#FCFCFC] text-[black] shadow-md"
            placeholder="Write a review..."
          />
          <div className="self-end w-fit ">
              <button className="w-full mt-4 text-center font-roboto text-sm md:text-base lg:text-lg text-[#FCFCFC] font-bold p-3 rounded-full bg-[#828F9B] hover:bg-[#273094] transition">
                Send Comment
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecievedProduct;