import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/footer/facebook.svg';
import twitterIcon from '../assets/footer/twitter.svg';
import instagramIcon from '../assets/footer/instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0C0D56] text-white flex gap-3 md:justify-between items-center px-2 lg:px-4 py-6 w-full">
      
      {/* Left Section (Privacy and Terms) */}
      <div className="flex flex-col gap-2">
        <Link to="/privacy" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">Terms & Conditions</Link>
        <p className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">&copy; 2024 Garri Marketplace. All rights reserved.</p>
      </div>

      {/* Center Section (Visit Button) */}
      <div className="flex flex-col gap-3 justify-center">
        <a
          href="https://garri-website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E8EBED] text-[#0C0D56] text-xs lg:text-[20px] font-normal lg:font-semibold p-2 rounded-[6px] hover:bg-gray-200 transition uppercase"
        >
          Visit The Garri Website
        </a>
        <div className='flex gap-3 items-center justify-center'>
            <a href="#facebook"><img src={facebookIcon} alt="our facebook" className='w-[11.558px] h-6 '/></a>
            <a href="#twitter"><img src={twitterIcon} alt="our twitter" className='w-6 h-6'/></a>
            <a href="#instagram"><img src={instagramIcon} alt="our instagram" className='w-[23.999px] h-6'/></a>
        </div>
      </div>

      {/* Right Section (Navigation Links) */}
      <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
        <Link to="/" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">Home</Link>
        <Link to="/marketplace" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">Marketplace</Link>
        <Link to="/wallet" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">Connect Wallet</Link>
        <Link to="/about" className="hover:text-gray-300 text-[#FCFCFC] font-light lg:font-normal font-roboto text-xs lg:text-[16px]">About us</Link>
      </div>

    </footer>
  );
};

export default Footer;
