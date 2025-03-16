import React, { useState } from 'react';
import { users } from '../../../mockdata/UserData';
import UserCard from './UserCard';

const FollowedSellers = ({ onViewInventoryClick }) => {
  const [followedUsers, setFollowedUsers] = useState(users.filter(user => user.isFollowing));

  const handleUnfollow = (userId) => {
    setFollowedUsers(followedUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="">
      <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Followed Sellers
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {followedUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUnfollow={handleUnfollow}
            onViewInventory={onViewInventoryClick}
            isFollowing={true}
            showSendMessage={false}
            showFollowOnly={false}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowedSellers;