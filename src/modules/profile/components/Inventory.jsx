import React, { useState, useEffect } from "react";
import { users } from "../../../mockdata/UserData";
import { products } from "../../../mockdata/ProductData";
import UserCard from "../components/UserCard";
import ProductCard from "../../products/components/ProductCard";

const SellerInventory = ({ sellerId }) => {
  const [seller, setSeller] = useState(null);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const foundSeller = users.find((user) => user.id === sellerId);
    if (foundSeller) {
      setSeller(foundSeller);
      setIsFollowing(foundSeller.isFollowing);
      const sellerProducts = products.filter(
        (product) => product.sellerId === sellerId
      );
      setSellerProducts(sellerProducts);
    }
  }, [sellerId]);

  const handleFollow = () => {
    setIsFollowing(true);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
  };

  const handleSendMessage = (userId) => {
    // Logic to send a message to the seller
  };

  return (
    <div className="">
      <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          {isFollowing ? "Followed Seller" : "Follow Seller"}
        </p>
      </div>
      {seller && (
        <>
          <UserCard
            user={seller}
            onFollow={handleFollow}
            onUnfollow={handleUnfollow}
            onSendMessage={handleSendMessage}
            isFollowing={isFollowing}
            showSendMessage={isFollowing} // Only show send message button if following
            showFollowOnly={!isFollowing} // Only show follow button if not following
          />
          <div className="mt-6">
            <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
              <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
                Inventory
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sellerProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SellerInventory;
