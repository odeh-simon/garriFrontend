import { useState } from "react";
import garriCoin from "../../../assets/products/garri-coin.svg";
import uploadIcon from "../../../assets/upload-icon2.svg";
import CustomModal from "../../../components/CustomModal";
import { imageToBase64 } from "../../../utils/imageToBase64";

const ProductForm = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const categories = ["Seed", "Flowers", "Tools", "Grains", "Fertilizers"];

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64Image = await imageToBase64(file);
      setProductImage(base64Image);
    }
  };

  const handleRemoveImage = () => {
    setProductImage(null);
  };

  const handleAddProduct = async () => {
    if (
      !productName ||
      !description ||
      !category ||
      !price ||
      !quantity ||
      !productImage
    ) {
      setErrorMessage("All fields are required");
      setTimeout(() => {setErrorMessage("");
      }, 3000);
      return;
    }

    const productData = {
      productName,
      description,
      category,
      price,
      quantity,
      productImage,
    };

    // Send data to the backend
    try {
      const response = await fetch("EXAMPLE_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Product added successfully");
      } else {
        // Handle error response
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1">
        <h2 className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Add a New Item for Sale
        </h2>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full lg:w-[90%] mx-auto">
          <div className="w-full lg:w-2/3 pr-4">
            {/* product name */}
            <div className="mb-4">
              <label className="font-bold text-[#080E52] text-base lg:text-xl">
                Product Name
              </label>
              <input
                type="text"
                placeholder="e.g Mai kano Tractors"
                className="w-full border-b border-black pt-3 outline-none"
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
                className="w-full border-b border-black pt-3 outline-none"
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
                className="w-full border-b border-black pt-3 outline-none bg-white"
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
              <div className="flex items-center w-full border-b border-black pt-3">
                <img
                  src={garriCoin}
                  alt="garri currency symbol"
                  className="w-5 h-5"
                />
                <input
                  type="number"
                  placeholder="0000"
                  className="w-full outline-none"
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
                className="w-full border-b border-black pt-3 outline-none"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          {/* product image */}
          <div className="w-[100%] mx-auto lg:mx-0 lg:w-1/3 h-[302px] flex flex-col items-center justify-center bg-[#FCFCFC] border shadow-lg p-4 rounded-[8px] relative">
            <label
              htmlFor="uploadProductImage"
              className="cursor-pointer text-center"
            >
              {productImage ? (
                <div className="relative">
                  <img
                    src={productImage}
                    alt="Product Preview"
                    className="w-full h-[250px] object-contain rounded"
                  />
                  {/* close image preview */}
                  <button
                    className="absolute -top-4 -right-4 w-6 h-6 cursor-pointer"
                    onClick={handleRemoveImage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={uploadIcon}
                    alt="Upload Icon"
                    className="w-10 h-10 mb-6"
                  />
                  <p className="text-[#2D3339] font-bold font-roboto text-xl">
                    Upload product Image
                  </p>
                  <p className="text-sm font-roboto text-[#D2D6DB]">
                    *.jpeg and *.png format are supported
                  </p>
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
        {/* buttons */}
        <div className="flex flex-col md:flex-row w-full md:items-center md:justify-center gap-4 md:gap-8 mt-10">
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
          <button
            className="bg-[#151C71] text-[#FCFCFC] font-roboto text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71]"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
          <button className="border-[2px] border-[#040E42] hover:bg-[#151C71] hover:text-white text-[#080E52] font-roboto text-base font-medium px-[18px] py-2 rounded-[6px]">
            Delete Product
          </button>
        </div>
       
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddProduct}
        bodyText="Are you sure you want to add this product for sale?"
        cancelButtonText="No"
        confirmButtonText="Yes"
      />
    </div>
  );
};

export default ProductForm;
