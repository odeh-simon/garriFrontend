import { useState } from "react";
import garriCoin from "../../../assets/products/garri-coin.svg";

const ProductForm = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const categories = ["Seed", "Flowers", "Tools", "Grains", "Fertilizers"];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1">
        <h2 className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Add a New Item for Sale
        </h2>
      </div>

      <div className="flex">
        <div className="w-2/3 pr-4">
          {/* product name */}
          <div className="mb-4">
            <label className="font-bold text-[#080E52] text-base lg:text-xl">
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g Mai kano Tractors"
              className="w-full border-b border-black py-2 outline-none"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          {/* product description */}
          <div className="mb-4">
            <label className="font-bold text-[#080E52] text-base lg:text-xl">
              Description
            </label>
            <input
              type="text"
              placeholder="250Hp red tractor"
              className="w-full border-b border-black py-2 outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* product category */}
          <div className="mb-4">
            <label className="font-bold text-[#080E52] text-base lg:text-xl">
              Category
            </label>
            <select
              className="w-full border-b border-black py-2 outline-none bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {/* product price */}
          <div className="mb-4">
            <label className="font-bold text-[#080E52] text-base lg:text-xl w-full">
              Price
            </label>
            <div className="flex items-center">
              <img
                src={garriCoin}
                alt="garri currency symbol"
                className="w-5 h-5"
              />
              <input
                type="number"
                placeholder="0000"
                className="w-full border-b border-black outline-none"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          {/* product quantity */}
          <div className="mb-4">
            <label className="font-bold text-[#080E52] text-base lg:text-xl w-full">
              Quantity
            </label>
            <input
              type="number"
              placeholder="0000"
              className="w-full border-b border-black py-2 outline-none"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-900 text-white px-4 py-2 rounded">
              Add Product
            </button>
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded">
              Delete Product
            </button>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center border border-gray-300 p-4 rounded-lg">
          <label
            htmlFor="uploadProductImage"
            className="cursor-pointer text-center"
          >
            {productImage ? (
              <img
                src={productImage}
                alt="Product Preview"
                className="w-32 h-32 object-cover rounded"
              />
            ) : (
              <div className="text-gray-500">
                ⬆ Upload product Image <br />
                <span className="text-xs">jpeg & png format are supported</span>
              </div>
            )}
          </label>
          <input
            type="file"
            className="hidden"
            id="uploadProductImage"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
