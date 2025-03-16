import bgImage from "../../../assets/escrowBg.png";
import avatar from "../../../assets/avatar2.svg";
import sendIcon from "../../../assets/send-icon.png";
import cancelIcon from "../../../assets/cancel-icon2.svg";
import proceedIcon from "../../../assets/check-icon.svg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const ProductReview = () => {
  const navigate = useNavigate();
  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div className="pt-8 px-8 lg:px-12 lg:pt-16" style={backgroundImage}>
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
      <div className="text-[#FCFCFC] mt-8 lg:mt-8 flex flex-col gap-4 lg:gap-9">
        <h2 className="text-lg md:text-[36px] lg:text-[64px] font-bold">
          Seller&apos;s Bio
        </h2>
        <div className="flex flex-col items-start lg:flex-row gap-3 lg:gap-6">
          {/* user avatar */}
          <div className="bg-[#FCFCFC] w-[59.665px] h-[59.665px] md:w-[119.333px] md:h-[119.333px] lg:w-[179px] lg:h-[179px] flex-shrink-0 flex items-center justify-center">
            <img
              src={avatar}
              alt="user avatar"
              className="w-[42.332px] h-[42.332px] md:w-[84.667px] md:h-[84.667px] lg:w-[84.667px] lg:h-[84.667px]"
            />
          </div>
          {/* seller personal data */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5 text-[#FCFCFC] lg:font-bold font-roboto text-xs md:text-base">
              <h3>Seller&apos;s Name:</h3>
              <h3>Mike Spicy</h3>
            </div>
            <div className="flex items-center gap-5 text-[#FCFCFC] lg:font-bold font-roboto text-xs md:text-base">
              <h3>Phone Number:</h3>
              <h3>+1 23 456 7890</h3>
            </div>
            <div className="flex items-center gap-5 text-[#FCFCFC] lg:font-bold font-roboto text-xs md:text-base">
              <h3>Shop Address:</h3>
              <h3>15 market avenue</h3>
            </div>
            <div className="flex items-center gap-5 text-[#FCFCFC] lg:font-bold font-roboto text-xs md:text-base">
              <h3>Delivery Time:</h3>
              <h3>4 days</h3>
            </div>
            <div className="flex items-center gap-5 text-[#FCFCFC] lg:font-bold font-roboto text-xs md:text-base">
              <h3>Seller&apos;s rating:</h3>
              <div className="flex items-center">
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-white stroke-current fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
                {[...Array(2)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-white fill-transparent stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-5 text-[#FCFCFC] font-roboto text-xs md:text-base">
              <h3 className="w-fit text-nowrap lg:font-bold">
                Message Seller:
              </h3>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 pr-10 rounded-[4px] bg-transparent border border-[#E8EBED] text-white"
                  placeholder="Type your message"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <img src={sendIcon} alt="send" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-col gap-4 justify-center items-center w-[90%] mx-auto lg:w-full mt-10 mb-8">
          <Button
            label="Product Received"
            bgColor="#FCFCFC"
            borderColor="#0B7B69"
            textColor="#0B7B69"
            hoverBgColor="#0B7B69"
            hoverTextColor="#FCFCFC"
            icon={proceedIcon}
            onClick={() => navigate("/recieved-product")}
          />

          <Button
            label="Not Satisfied with package"
            bgColor="#FCFCFC"
            hoverBgColor="#8C1823"
            textColor="#8C1823"
            hoverTextColor="#FCFCFC"
            icon={cancelIcon}
            onClick={() => navigate("/submit-complaints")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
