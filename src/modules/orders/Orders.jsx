import { useState } from "react";
import OrderData from "./components/OrderData";
import searchFilter from '../../assets/search-filter-icon.svg';
import sortIcon from '../../assets/sort-icon.svg';

const Orders = () => {
  const [filter, setFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const orders = [
    {
      id: "001",
      date: "2025-03-01",
      customerName: "John Doe",
      totalPrice: "$100",
      paymentStatus: "Paid",
      items: 3,
    },
    {
      id: "002",
      date: "2025-03-02",
      customerName: "Jane Smith",
      totalPrice: "$200",
      paymentStatus: "Unpaid",
      items: 5,
    },
    // Add more orders as needed
  ];

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    if (filter === "Unfulfilled") return order.paymentStatus !== "Paid";
    if (filter === "Unpaid") return order.paymentStatus === "Unpaid";
    if (filter === "Open")
      return order.paymentStatus === "Paid" && order.items > 0;
    if (filter === "Closed")
      return order.paymentStatus === "Paid" && order.items === 0;
    return false;
  });

  return (
    <div className="flex flex-col gap-4">
      {/* header text */}
      <div className="flex justify-end items-center gap-4 md:mb-6">
        <button className="text-[#151C71] font-roboto text-base font-medium">
          Export
        </button>
        <button className="bg-[#151C71] text-white font-roboto text-base font-medium px-4 py-2 rounded-md border-2 border-[#040E42] hover:bg-transparent hover:text-[#151C71]">
          Create Order
        </button>
      </div>
      <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Orders
        </p>
      </div>
      {/* main content */}
      <div className="flex flex-row gap-4 justify-between w-full items-center border-b border-black pb-4 mb-4">
        <div className="hidden md:flex"></div>
        <div className="flex gap-2 md:gap-4 justify-center items-center flex-wrap">
          <div className="block md:hidden">
            <button
              className="px-4 py-2 rounded text-sm lg:text-base font-roboto bg-[#151C71] text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Tabs
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg">
                {["All", "Unfulfilled", "Unpaid", "Open", "Closed"].map(
                  (status) => (
                    <button
                      key={status}
                      className={`block w-full text-left px-4 py-2 text-sm lg:text-base font-roboto ${
                        filter === status
                          ? "bg-[#151C71] text-white"
                          : "text-[#080E52]"
                      }`}
                      onClick={() => {
                        setFilter(status);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {status}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-2 md:gap-4 justify-center items-center flex-wrap">
            {["All", "Unfulfilled", "Unpaid", "Open", "Closed"].map(
              (status) => (
                <button
                  key={status}
                  className={`px-4 py-2 rounded text-sm lg:text-base font-roboto ${
                    filter === status
                      ? " text-white bg-[#151C71]"
                      : "text-[#080E52]"
                  }`}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>
        {/* filter and search buttons */}
        <div className="flex gap-2 md:gap-4 items-center md:mt-0">
          <button>
            <img src={searchFilter} alt="search icon" className="" />
          </button>
          <button>
            <img src={sortIcon} alt="sort" className="" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead>
            <tr className="bg-[#151C71] text-white font-roboto text-xs lg:text-base font-normal">
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Customer</th>
              <th className="py-3 px-4 border-b">Total</th>
              <th className="py-3 px-4 border-b">Payment Status</th>
              <th className="py-3 px-4 border-b">Items</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <OrderData key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;