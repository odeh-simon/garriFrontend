import React from "react";
import { products } from "../../../mockdata/ProductData";
import ProductCard from "../../products/components/ProductCard";

const SavedItems = () => {
  return (
    <div className="">
      <div className="bg-[#151C71] lg:bg-gray-400 md:mb-6 py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Saved Itmes
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
