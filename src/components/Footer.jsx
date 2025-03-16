import { Link } from 'react-router-dom';
import facebookIcon from '../assets/footer/facebook.svg';
import twitterIcon from '../assets/footer/twitter.svg';
import instagramIcon from '../assets/footer/instagram.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0D56] text-white flex flex-col lg:flex-row-reverse lg:gap-4 gap-6 justify-between items-center px-2 lg:px-4 py-6 w-full z-50">

      {/* Visit Website Button */}
      <div className="flex justify-center w-full">
        <a
          href="https://garri-website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E8EBED] text-[#0C0D56] text-xs lg:text-[20px] font-normal lg:font-semibold p-2 rounded-[6px] hover:bg-[#080E52] hover:text-white transition uppercase"
        >
          Visit The Garri Website
        </a>
      </div>

      {/* Navigation Links and Social Icons */}
      <div className="flex justify-between items-center lg:order-3 w-full">
        <div className="flex flex-col lg:flex-row gap-2">
          <Link to="/home" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-sm">Home</Link>
          <Link to="/wallet" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-sm">Connect Wallet</Link>
          <Link to="/about-us" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-sm">About Us</Link>
        </div>
        <div className='flex gap-3 items-center'>
          <a href="#facebook"><img src={facebookIcon} alt="our facebook" className='w-[11.558px] h-6 '/></a>
          <a href="#twitter"><img src={twitterIcon} alt="our twitter" className='w-6 h-6'/></a>
          <a href="#instagram"><img src={instagramIcon} alt="our instagram" className='w-[23.999px] h-6'/></a>
        </div>
      </div>

      {/* Privacy Policy and Terms */}
      <div className="flex flex-col lg:order-[-1] items-center gap-2 text-center w-full">
        <Link to="/privacy" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-sm">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-sm">Terms & Conditions</Link>
        <p className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">
          &copy; {currentYear} Garri Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
