import { useState } from "react";
import PropTypes from "prop-types";
import { notificationData } from "../../../mockdata/NotificationData";
import deleteIcon from "../../../assets/notification/delete-icon.svg";

const Notification = ({ onNotificationClick }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [starred, setStarred] = useState({});
  const [notifications, setNotifications] = useState(notificationData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleStarClick = (id) => {
    setStarred((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteClick = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const filteredNotifications = notifications.filter((notification) =>
    activeTab === "All" ? true : notification.category === activeTab
  );

  return (
    <div className="">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400  py-1 mx-2">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Notification List
        </p>
      </div>

      <div className="mt-4 ">
        <div className="flex justify-around border-b border-black font-roboto text-[10px] md:text-base  lg:mx-16 pb-4 mb-2">
          <button
            className={`mr-4 text-[#080E52] ${
              activeTab === "All" ? "pb-1 border-b border-[#080E52]" : ""
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </button>
          <button
            className={`mr-4 text-[#080E52] ${
              activeTab === "Transaction History"
                ? "pb-1 border-b border-[#080E52]"
                : ""
            }`}
            onClick={() => handleTabClick("Transaction History")}
          >
            Transaction History
          </button>
          <button
            className={`mr-4 text-[#080E52] ${
              activeTab === "Inbox" ? "pb-1 border-b border-[#080E52]" : ""
            }`}
            onClick={() => handleTabClick("Inbox")}
          >
            Inbox
          </button>
          <button
            className={`mr-4 text-[#080E52] ${
              activeTab === "Announcement"
                ? "pb-1 border-b border-[#080E52]"
                : ""
            }`}
            onClick={() => handleTabClick("Announcement")}
          >
            Announcement
          </button>
        </div>
        <ul className="overflow-y-auto">
          {filteredNotifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center justify-between p-3 border-b border-black cursor-pointer"
              onClick={() => onNotificationClick(notification)}
            >
              <div className="flex gap-2 items-center">
                <svg
                  className="mr-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStarClick(notification.id);
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={starred[notification.id] ? "#151C71" : "transparent"}
                  stroke="#151C71"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5 12 2" />
                </svg>
                <img src={notification.icon} alt="" className="w-5 h-5" />
                <div className="flex flex-col ">
                  <p className="text-black text-[10px] font-roboto md:text-base">
                    {notification.title}
                  </p>
                  <span className="text-[#2D3339] text-[8px] md:text-xs font-roboto text-right">{notification.time}</span>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <button
                  className="text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteClick(notification.id);
                  }}
                >
                  <img
                    src={deleteIcon}
                    alt="delete notification"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Notification.propTypes = {
  onNotificationClick: PropTypes.func.isRequired,
};

export default Notification;