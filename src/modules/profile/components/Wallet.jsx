import verifyIcon from "../../../assets/verified-icon.svg";

export default function Wallet() {
  return (
    <div className="w-full px-6 mb-6">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400 mb-6 py-1">
        <h2 className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          Wallet
        </h2>
      </div>
      {/* main content */}
      <div className="flex flex-col gap-9 ">
        <div>
          <h2 className="text-[#828F9B] font-roboto font-bold text-base lg:text-xl">
            Wallet Address:
          </h2>
          <div className="flex gap-8 items-center">
            <p className="text-[#080E52] font-roboto text-base lg:text-xl font-bold">
              083ehbxjwebejk23i2384oo2321
            </p>
            <img src={verifyIcon} alt="verified Icon" className="w-6 h-6" />
          </div>
        </div>
        {/* button */}
        <div className="flex flex-col md:flex-row lg:items-center gap-4 w-full lg:gap-9">
          <button className="bg-transparent text-[#151C71] font-roboto text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-[#151C71]  hover:text-white">
            Change Address
          </button>
          <button className="bg-[#151C71] text-white font-roboto text-base font-medium px-[18px] py-2 rounded-[6px] border-[2px] border-[#040E42] hover:bg-transparent hover:text-[#151C71]">
            Connect Wallet
          </button>
        </div>
        {/* info text */}
        <p className="font-roboto text-base lg:text-xl font-bold text-[#EDA145]">your wallet address has to be $GARRI wallet address</p>
      </div>
    </div>
  );
}
