import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { findOne } from "country-codes-list";
import uploadIcon from "../../../assets/upload-icon2.svg";

const KYCForm = () => {
  const [residencyCountry, setResidencyCountry] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [idFile, setIdFile] = useState(null);
  const [utilityBillFile, setUtilityBillFile] = useState(null);
  const [shopAddress, setShopAddress] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = (setFile) => {
    setFile(null);
  };

  const getCountryCode = (countryName) => {
    const country = findOne("countryNameEn", countryName);
    return country ? country.countryCode : "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !residencyCountry ||
      !issuingCountry ||
      !idFile ||
      !utilityBillFile ||
      !shopAddress
    ) {
      setError("Please fill all fields before submitting.");
    } else {
      setError("");
      // Submit the form
      console.log("Form submitted");
    }
  };

  return (
    <div className="">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1">
        <h2 className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Know Your Customer
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 lg:mx-6 font-roboto">
        {/* country of residence */}
        <div>
          <label className="font-bold text-[#080E52] text-base lg:text-xl">
            Country/Region of Residency
          </label>
          <div className="flex justify-between items-center border-b border-black py-2">
            <CountryDropdown
              value={residencyCountry}
              onChange={(val) => setResidencyCountry(val)}
              className="w-full outline-none appearance-none"
            />
            {residencyCountry && (
              <img
                src={`https://flagcdn.com/w40/${getCountryCode(
                  residencyCountry
                ).toLowerCase()}.png`}
                alt="flag"
                className="w-6 h-4 ml-2"
              />
            )}
          </div>
        </div>
        {/* issuing country */}
        <div>
          <label className="font-bold text-[#080E52] text-base lg:text-xl">
            Issuing Country/Region
          </label>
          <div className="flex justify-between items-center border-b border-black py-2">
            <CountryDropdown
              value={issuingCountry}
              onChange={(val) => setIssuingCountry(val)}
              className="w-full outline-none appearance-none"
            />
            {issuingCountry && (
              <img
                src={`https://flagcdn.com/w40/${getCountryCode(
                  issuingCountry
                ).toLowerCase()}.png`}
                alt="flag"
                className="w-6 h-4 ml-2"
              />
            )}
          </div>
        </div>
        {/* upload ID */}
        <div>
          <label className="font-bold text-[#080E52] text-base lg:text-xl">
            Upload ID
          </label>
          <input
            type="file"
            className="hidden"
            id="uploadID"
            onChange={(e) => handleFileUpload(e, setIdFile)}
          />
          <label
            htmlFor="uploadID"
            className="block border-b border-black py-2 cursor-pointer"
          >
            <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
          </label>
          {idFile && (
            <div className="relative mt-2 w-32 h-auto">
              <img src={idFile} alt="ID Preview" className="w-full h-auto" />
              <button
                className="absolute -top-1 -right-5 w-6 h-6 cursor-pointer"
                onClick={() => handleRemoveFile(setIdFile)}
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
          )}
        </div>
        {/* shop address */}
        <div>
          <label className="font-bold text-[#080E52] text-base lg:text-xl">
            Shop Address
          </label>
          <input
            type="text"
            placeholder="Address"
            value={shopAddress}
            onChange={(e) => setShopAddress(e.target.value)}
            className="w-full border-b border-black py-2 outline-none"
          />
        </div>
        {/* upload utility bill */}
        <div>
          <label className="font-bold text-[#080E52] text-base lg:text-xl">
            Upload Utility Bill{" "}
            <span className="text-[#EDA145] text-sm font-semibold">
              (not more than 3 months)
            </span>
          </label>
          <input
            type="file"
            className="hidden"
            id="uploadUtilityBill"
            onChange={(e) => handleFileUpload(e, setUtilityBillFile)}
          />
          <label
            htmlFor="uploadUtilityBill"
            className="block border-b border-black p-2 cursor-pointer"
          >
            <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
          </label>
          {utilityBillFile && (
            <div className="relative mt-2 w-32 h-auto">
              <img
                src={utilityBillFile}
                alt="Utility Bill Preview"
                className="w-full h-auto"
              />
              <button
                className="absolute -top-1 -right-5 w-6 h-6 cursor-pointer"
                onClick={() => handleRemoveFile(setUtilityBillFile)}
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
          )}
        </div>
        {/* error message */}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {/* submit button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-[#15B097] text-center font-roboto text-base lg:text-xl font-bold mt-4"
          >
            DONE
          </button>
        </div>
      </form>
    </div>
  );
};

export default KYCForm;
