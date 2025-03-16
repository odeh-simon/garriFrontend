import { useState } from 'react';
import logo from '../assets/home/logo.svg';
import mobileLogo from '../assets/home/logo-mobile.svg';
import searchIcon from '../assets/navbar/search-icon.svg';
import filterIcon from '../assets/navbar/filter-icon.svg';
import profileIcon from '../assets/navbar/user-icon2.svg'; // Add profile icon
import cartIcon from '../assets/navbar/cart-icon.svg'; // Add cart icon
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(''); // Default active page
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Track authentication status
  const navigate = useNavigate();
  const { items } = useCart();
  const itemsCount = items?.length;


  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle link click and set active page
  const handleLinkClick = (page, path) => {
    setActivePage(page);
    setMenuOpen(false); // Close the menu when an option is selected on mobile
    navigate(path);
  };

  return (
    <nav className="bg-[#151C71] px-4 py-2 flex justify-between items-center fixed left-0 right-0 z-50 top-0">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[auto] w-[100px] hidden lg:block" />
        <img src={mobileLogo} alt="Logo" className="h-10 w-10 lg:hidden block" />
      </div>

      {/* Search Bar */}
      <div className="w-[50%] lg:w-[25%] mx-2 flex items-center justify-between border-[#090A0B]">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 rounded-[8px] bg-white text-gray-800"
            placeholder="Search"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2 items-center">
            <button>
              <img src={searchIcon} alt="search" className="w-[20px] h-[20px]" />
            </button>
            <button>
              <img src={filterIcon} alt="filter" />
            </button>
          </div>
        </div>
      </div>

      {/* Cart and Profile Icons for Mobile */}
      <div className="lg:hidden flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <button onClick={()=> navigate('/cart')} className='relative'>
              <img src={cartIcon} alt="Cart" className="w-[24px] h-[24px]" />
              {itemsCount > 0 && <span className="absolute -top-1 -right-2 bg-red-400 font-roboto font-bold shadow text-white px-2 py-1 w-3 h-[14px] flex items-center justify-center text-[8px] rounded-[50px]">{itemsCount}</span>}
            </button>
            <button onClick={()=> navigate('/profile')}>
              <img src={profileIcon} alt="Profile" className="w-[24px] h-[24px]" />
            </button>
          </>
        ) : null}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <button
          className={`text-[#FCFCFC] font-roboto text-lg ${activePage === 'Home' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('Home', '/home')}
        >
          Home
        </button>
        {/* wallet */}
        <button
          className={`text-[#FCFCFC] font-roboto text-lg ${activePage === 'Connect Wallet' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('Connect Wallet', '/wallet')}
        >
          Connect Wallet
        </button>
        <button
          className={`text-[#FCFCFC] font-roboto text-lg ${activePage === 'About Us' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('About Us', '/about-us')}
        >
          About Us
        </button>

        {/* Conditionally render login/signup or profile/cart based on authentication */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <button onClick={()=> navigate('/cart')} className='relative'>
              <img src={cartIcon} alt="Cart" className="w-[24px] h-[24px]" />
              {itemsCount > 0 && <span className="absolute -top-1 -right-2 bg-red-400 font-roboto font-bold shadow text-white px-2 py-1 w-3 h-[14px] flex items-center justify-center text-[8px] rounded-[50px]">{itemsCount}</span>}
            </button>
            <button onClick={()=> navigate('/profile')}>
              <img src={profileIcon} alt="Profile" className="w-[24px] h-[24px]" />
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="bg-[#FCFCFC] font-roboto text-lg text-[#080E52] p-[3px] rounded-[6px]">Sign Up</button>
            <button className="bg-[#FCFCFC] font-roboto text-lg text-[#080E52] p-[3px] rounded-[6px]">Log In</button>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-14 right-4 bottom-4 w-1/2 bg-white shadow-lg z-50 flex flex-col items-start py-4 px-6">
          <button
            className={` mb-4 text-lg ${activePage === 'Home' ? 'text-[#080E52]' : 'text-[#0b192a]'}`}
            onClick={() => handleLinkClick('Home', '/home')}
          >
            Home
          </button>
          {/* wallet */}
          <button
            className={`text-blue-900 mb-4 text-lg ${activePage === 'Connect Wallet' ? 'text-[#080E52]' : 'text-[#D2D6DB]'}`}
            onClick={() => handleLinkClick('Connect Wallet', '/wallet')}
          >
            Connect Wallet
          </button>
          <button
            className={`text-blue-900 mb-4 text-lg ${activePage === 'About Us' ? 'text-[#080E52]' : 'text-[#D2D6DB]'}`}
            onClick={() => handleLinkClick('About Us', '/about-us')}
          >
            About Us
          </button>

          {/* Conditionally render login/signup or profile/cart based on authentication in mobile view */}
          <div className="mt-auto w-full flex flex-col items-center justify-center space-y-4">
            {isAuthenticated ? (
              <div>
                <button onClick={()=> navigate('/profile')}>
                  <img src={profileIcon} alt="Profile" className="w-[24px] h-[24px]" />
                </button>
              </div>
            ) : (
              <>
                <button className="w-full px-8 py-[6px] bg-[#080E52] text-[#FCFCFC] rounded-[6px]">Sign Up</button>
                <button className="w-full px-8 py-[6px] bg-[#080E52] text-[#FCFCFC] rounded-[6px]">Log In</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;