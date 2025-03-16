import React, { useState } from 'react';
import { users } from '../../../mockdata/UserData';
import UserCard from '../components/UserCard';
import searchIcon from '../../../assets/navbar/search-icon.svg';
import filterIcon from '../../../assets/navbar/filter-icon.svg';

const FollowSellers = ({ onViewInventoryClick }) => {
  const [unfollowedUsers, setUnfollowedUsers] = useState(users.filter(user => !user.isFollowing));

  const handleFollow = (userId) => {
    setUnfollowedUsers(unfollowedUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="">
      {/* Search Bar */}
      <div className="w-[50%] shadow-md rounded-[8px] mx-2 flex items-center justify-between border-[#090A0B] mb-2">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 rounded-[8px] bg-white text-gray-800"
            placeholder="Find Seller"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2 items-center">
            <button>
              <img src={searchIcon} alt="search" className="w-[20px] h-[20px]" />
            </button>
            <button>
              <img src={filterIcon} alt="filter" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Follow Sellers
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {unfollowedUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollow={handleFollow}
            onViewInventory={onViewInventoryClick}
            isFollowing={false}
            showSendMessage={false}
            showFollowOnly={false}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowSellers;