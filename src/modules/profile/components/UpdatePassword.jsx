import { useState, useEffect } from "react";

const UpdatePassword = () => {
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log("Password changed successfully");
  };

   // Scroll to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center mt-[80px] min-h-screen">
      <h2 className="text-[#080E52] font-roboto font-bold text-xl lg:text-2xl ">
          Change Password
        </h2>
      <div className="bg-white p-6 rounded shadow-md w-[90vw] md:w-[50vw]">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter new password"
              className="w-full border-b border-gray-300 outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-[#080E52] font-roboto text-base lg:text-xl">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              value={passwordData.confirmNewPassword}
              onChange={handleInputChange}
              placeholder="Confirm new password"
              className="w-full border-b border-gray-300 outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className=" text-[#15B097] text-center font-roboto text-base lg:text-xl font-bold mt-4">
              DONE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;