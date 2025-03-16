import { useState } from "react";
import avatar from "../../../assets/avatar2.svg";
import uploadIcon from "../../../assets/upload-icon.svg";
import { imageToBase64 } from "../../../utils/imageToBase64";
import CustomModal from "../../../components/CustomModal";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = (userRole) => {
  userRole = "buyer";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    avatar: avatar,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await imageToBase64(file);
      setFormData({ ...formData, avatar: base64Image });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data for PATCH request
    const patchData = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      avatar: formData.avatar,
    };

    // Make the PATCH request
    try {
      const response = await fetch("Exmaple-endpoint", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchData),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Profile updated successfully");
      } else {
        // Handle error response
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChangePassword = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    navigate("/update-password");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        bodyText="An email will be sent to example@email.com to change password"
        cancelButtonText="Cancel"
        confirmButtonText="Continue"
      />
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1 mx-2">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          {userRole === "seller" ? "Seller's Profile" : "Buyer's Profile"}
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="relative ">
          <div className="bg-[#B190B6] rounded-full w-[114px] h-[114px] flex items-center justify-center">
            <img src={formData.avatar} alt="User Avatar" className="w-[80%] h-[80%] rounded-full object-cover" />
          </div>
          <input
            type="file"
            accept="image/*"
            className="absolute -bottom-2 -right-2 opacity-0 w-9 h-9 cursor-pointer"
            onChange={handleImageUpload}
          />
          <img src={uploadIcon} alt="upload image" className="absolute -bottom-2 -right-2 w-9 h-9 pointer-events-none" />
        </div>
      </div>
      <div className="space-y-4 lg:w-[86%] mx-auto">
        <div>
          <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
            User name
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="enter username"
            className="w-full border-b border-gray-300 outline-none"
          />
        </div>
        <div>
          <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="w-full border-b border-gray-300  outline-none"
          />
        </div>
        <div>
          <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="update phone number"
            className="w-full border-b border-gray-300  outline-none"
          />
        </div>
        <div>
          <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="update address"
            className="w-full border-b border-gray-300  outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleChangePassword}
            type="button" className="bg-[#151C71] text-[#FCFCFC] font-roboto font-medium text-base px-[18px] py-2 rounded-[6px] w-fit mt-4">
            Change Password
          </button>
          <button type="submit" className="text-[#15B097] text-center font-roboto text-base lg:text-xl font-bold mt-4">
            DONE
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdate;