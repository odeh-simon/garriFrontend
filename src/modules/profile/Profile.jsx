import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import NotificationDetail from "./components/NotificationDetail";
import ProfileUpdate from "./components/UpdateProfile";
import avatar from "../../assets/avatar2.svg";
import KYCForm from "./components/KYCForm";
import UploadProduct from "../products/components/UploadProduct";
import Wallet from "./components/Wallet";
import Orders from "../orders/Orders";
import SavedItems from "./components/SavedItems";
import FollowedSellers from "./components/FollowedSellers";
import FollowSellers from "./components/FollowSellers";
import SellerInventory from "./components/Inventory";

const Profile = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedSellerId, setSelectedSellerId] = useState(null);
  userRole = "buyer";

  const sellerTabs = [
    "Notification",
    "Profile",
    "Edit Profile",
    "KYC",
    "Upload Item",
    "Wallet",
    "Logout",
  ];
  const buyerTabs = [
    "Notification",
    "Order",
    "Profile",
    "Edit Profile",
    "KYC",
    "Saved Item",
    "Followed Seller",
    "Follow Sellers",
    "Logout",
  ];

  const tabs = userRole === "seller" ? sellerTabs : buyerTabs;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEditProfileClick = () => {
    setActiveTab("Edit Profile");
    setIsSidebarOpen(false);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setActiveTab("NotificationDetail");
  };

  const handleBackClick = () => {
    setSelectedNotification(null);
    setActiveTab("Notification");
  };

  const handleViewInventoryClick = (sellerId) => {
    setSelectedSellerId(sellerId);
    setActiveTab("Inventory");
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-screen relative">
      {/* Mobile Header */} {/* Hamburger Menu */}
      <button
        className="lg:hidden p-4 fixed top-12 right-0 z-50  text-white"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-12 left-0 w-full lg:w-64 bg-[#FCFCFC] shadow-lg border-[1.5px] border-r-[#c3c3c3] border-opacity-50 py-5 px-[10px] pl-6 rounded-tr-xl mt-4 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`p-2 cursor-pointer rounded-lg transition-all font-roboto text-base lg:text-xl ${
                activeTab === tab
                  ? "text-[#080E52]"
                  : "hover:bg-gray-200 text-[#D2D6DB]"
              } ${
                tab === "Logout"
                  ? "text-red-600 border-t rounded-none border-black mt-2 pt-2"
                  : ""
              }`}
              onClick={() => {
                setActiveTab(tab);
                setIsSidebarOpen(false);
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div
        className={`flex-1 p-6 h-screen overflow-y-auto ${
          isSidebarOpen ? "hidden lg:block" : "block"
        }`}
      >
        {activeTab === "Profile" && (
          <div className="w-full">
            {/* header text */}
            <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1 mx-2">
              <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
                {userRole === "seller" ? "Seller's Profile" : "Buyer's Profile"}
              </p>
            </div>

            <div className="mt-4 flex flex-col lg:px-10">
              {/* user avatar and username */}
              <div className="flex flex-col items-center">
                <div className="bg-[#B190B6] rounded-full w-[114px] h-[114px] flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-[64px] h-[64px]"
                  />
                </div>
                <h2 className="text-center text-base lg:text-xl text-[#151B3B] font-roboto">
                  USER NAME
                </h2>
                <button
                  className="block mx-auto mt-2 bg-[#151C71] text-white p-3 rounded-xl"
                  onClick={handleEditProfileClick}
                >
                  Edit Profile
                </button>
              </div>

              <div className="mt-4 text-[#828F9B] font-roboto font-bold text-base lg:text-xl flex flex-col gap-4 mb-6">
                <p>
                  Username:
                  <p className="text-[#080E52]">Evan Balsodojo</p>
                </p>
                <p>
                  Email:
                  <p className="text-[#080E52]">user@email.com</p>
                </p>
                {userRole === "seller" ? (
                  <p>
                    Shop Address:
                    <p className="text-[#080E52]">NO. 10 Santiago Lodge MX</p>
                  </p>
                ) : (
                  <p>
                    Default delivery address:
                    <p className="text-[#080E52]">NO. 10 Santiago Lodge MX</p>
                  </p>
                )}
                <p>
                  Phone:
                  <p className="text-[#080E52]">+234 854 478 4646</p>
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Notification" && (
          <Notification onNotificationClick={handleNotificationClick} />
        )}
        {activeTab === "NotificationDetail" && (
          <NotificationDetail
            notification={selectedNotification}
            onBackClick={handleBackClick}
          />
        )}
        {activeTab === "Edit Profile" && <ProfileUpdate />}
        {activeTab === "KYC" && <KYCForm />}
        {activeTab === "Upload Item" && <UploadProduct />}
        {activeTab === "Wallet" && <Wallet />}
        {activeTab === "Order" && <Orders />}
        {activeTab === "Saved Item" && <SavedItems />}
        {activeTab === "Followed Seller" && (
          <FollowedSellers onViewInventoryClick={handleViewInventoryClick} />
        )}
        {activeTab === "Follow Sellers" && (
          <FollowSellers onViewInventoryClick={handleViewInventoryClick} />
        )}
        {activeTab === "Inventory" && (
          <SellerInventory sellerId={selectedSellerId} />
        )}
      </div>
    </div>
  );
};

export default Profile;