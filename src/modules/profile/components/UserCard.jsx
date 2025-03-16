import PropTypes from "prop-types";
import { useState } from "react";
import { findOne } from "country-codes-list";
import verifiedIcon from "../../../assets/products/verified user.svg";
import unverifiedIcon from "../../../assets/products/unverified-user.svg";

const UserCard = ({
  user,
  onFollow,
  onUnfollow,
  onSendMessage,
  isFollowing: initialIsFollowing,
  showSendMessage,
  showFollowOnly,
  onViewInventory
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const getCountryCode = (countryName) => {
    const country = findOne("countryNameEn", countryName);
    return country ? country.countryCode : "";
  };

  const handleFollowToggle = () => {
    if (isFollowing) {
      onUnfollow(user.id);
    } else {
      onFollow(user.id);
    }
    setIsFollowing(!isFollowing);
  };

  const handleViewInventory = () => {
    onViewInventory(user.id);
  };

  const handleSendMessage = () => {
    onSendMessage(user.id);
  };

  return (
    <div className="w-full bg-[#FCFCFC] p-4 h-fit flex flex-col md:flex-row md:items-center md:justify-between rounded-xl shadow-md overflow-hidden">
      <div className="md:p-2 flex flex-col md:flex-row gap-3 items-center md:items-start">
        {/* seller avatar */}
        <div className="w-[127px] h-[100px] md:h-[127px] relative bg-[#b090b5] mb-4 md:mb-0">
          <img src={user.avatar} alt={user.name} className="w-full h-full " />
          <img
            src={`https://flagcdn.com/w40/${getCountryCode(
              user.country
            ).toLowerCase()}.png`}
            alt={user.country}
            className="w-6 h-4 mr-2 absolute top-0 -right-2"
          />

          <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center  absolute -bottom-4 -right-1">
            {user.isVerified ? (
              <img
                src={verifiedIcon}
                alt="Verified user"
                className="w-full h-full"
              />
            ) : (
              <img
                src={unverifiedIcon}
                alt="Unverified user"
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Sellers personal data */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 text-[#2D3339] font-roboto text-xs md:text-base">
            <h3>Seller&apos;s Name:</h3>
            <h3>{user.name}</h3>
          </div>
          <div className="flex items-center gap-5 text-[#2D3339] font-roboto text-xs md:text-base">
            <h3>Phone Number:</h3>
            <h3>{user.phone}</h3>
          </div>
          <div className="flex items-center gap-5 text-[#2D3339] font-roboto text-xs md:text-base">
            <h3>Seller&apos;s Email:</h3>
            <h3>{user.email}</h3>
          </div>
          <div className="flex items-center gap-5 text-[#2D3339] font-roboto text-xs md:text-base">
            <h3>Shop Address:</h3>
            <h3>{user.shopAddress}</h3>
          </div>
        </div>
      </div>
      {/* Follow/Unfollow and view inventory/send message buttons */}
      <div className="p-4 flex items-center flex-col gap-4">
        {showFollowOnly ? (
          <button
            onClick={handleFollowToggle}
            className="w-[80%] mx-auto md:mx-0 md:w-full bg-[#151C71] text-[#FCFCFC] font-roboto text-sm md:text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71] transition duration-200"
          >
            Follow
          </button>
        ) : (
          <>
            {showSendMessage && (
              <button
                onClick={handleSendMessage}
                className="w-[80%] mx-auto md:mx-0 md:w-full bg-[#151C71] text-[#FCFCFC] font-roboto text-sm md:text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71] transition duration-200"
              >
                Send Message
              </button>
            )}
            {!showSendMessage && (
              <button
                onClick={handleViewInventory}
                className="w-[80%] mx-auto md:mx-0 md:w-full bg-[#151C71] text-[#FCFCFC] font-roboto text-sm md:text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71] transition duration-200"
              >
                View Inventory
              </button>
            )}
            <button
              onClick={handleFollowToggle}
              className="w-[80%] mx-auto md:mx-0 md:w-full bg-[#151C71] text-[#FCFCFC] font-roboto text-sm md:text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71] transition duration-200"
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    shopAddress: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    isVerified: PropTypes.bool.isRequired,
  }).isRequired,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
  onSendMessage: PropTypes.func,
  onViewInventory: PropTypes.func,
  isFollowing: PropTypes.bool,
  showSendMessage: PropTypes.bool,
  showFollowOnly: PropTypes.bool,
};

export default UserCard;