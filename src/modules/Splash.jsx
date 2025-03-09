import { useContext, useState } from 'react';
import bgImage from '../assets/splashBg.png';
import garriLogo from '../assets/garri logo.svg';
import cartIcon from '../assets/cart-icon.svg';
import sellerIcon from '../assets/seller-icon.svg';
import mailIcon from '../assets/mail-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import Button from '../components/Button';
import { SignUpContext } from '../context/SignUpContext';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  const { setAccountType, setSignupMethod, accountType } = useContext(SignUpContext);
  const [promptMessage, setPromptMessage] = useState(''); // State to manage prompt message

  // Handle account type selection
  const handleAccountType = (type) => {
    setAccountType(type);
    setPromptMessage(''); // Clear the prompt when account type is selected
    console.log("Account Type Selected:", type); // Log selected account type
  };

  // Handle signup method and proceed with signup
  const handleSignup = (method) => {
    if (!accountType) {
      setPromptMessage('Please select an account type first.'); // Set the prompt message
      return;
    }
    
    setSignupMethod(method);
    console.log("Signup Method Selected:", method); // Log selected signup method

    if (method === 'email') {
      navigate('/signup'); // Redirect to signup page
    } else {
      // Handle Google signup flow
      // Redirect after successful Google authentication
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <>
      <div style={backgroundImage} className="relative w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className='w-[90%] mx-auto flex flex-col'>
          <div className="relative pt-[20px] lg:pl-6 flex flex-col gap-[40px] lg:gap-0">
            <div className="lg:p-2 flex items-center gap-3 lg:rounded-[12px] lg:bg-[#FCFCFC] w-[330px]">
              <img src={garriLogo} alt="logo" className="w-[50px] h-[50px]" />
              <p className="text-[#FCFCFC] lg:text-[#080E52] font-roboto text-[28px] md:text-[30px] md:font-bold">
                Garri Market Place
              </p>
            </div>

            <div>
              <h1 className="flex items-center justify-center md:items-start md:justify-start text-[#FCFCFC] font-roboto text-[56px] md:text-[70px] font-bold self-stretch">
                Let&apos;s Get <br />Started
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-[34px] items-center justify-center relative">
            {/* Account Type Selection */}
            <div className="flex gap-4 lg:gap-8">
              <button
                type="button"
                onClick={() => handleAccountType('buyer')}
                className={`flex flex-col gap-2 items-center justify-center hover:bg-[#151C71] p-4 rounded-md ${
                  accountType === 'buyer' ? 'bg-[#151C71] text-white border-2 border-[#151C71]' : 'bg-transparent text-white'
                }`}
              >
                <img src={cartIcon} alt="buyer account" />
                <p className="font-roboto text-center text-[20px] font-bold">
                  Buyer&apos;s <br /> Account
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleAccountType('seller')}
                className={`flex flex-col gap-2 items-center justify-center hover:bg-[#151C71] p-4 rounded-md ${
                  accountType === 'seller' ? 'bg-[#151C71] text-white border-2 border-[#151C71]' : 'bg-transparent text-white'
                }`}
              >
                <img src={sellerIcon} alt="seller account" />
                <p className="font-roboto text-center text-[20px] font-bold">
                  Retailer&apos;s <br /> Account
                </p>
              </button>
            </div>

            {/* Prompt message for account type */}
            {promptMessage && (
              <p className="text-red-500 font-bold text-lg">{promptMessage}</p>
            )}

            {/* Signup Method Buttons */}
            <div className="w-[90%] mx-auto flex flex-col gap-3 items-center justify-center mb-4">
              <Button
                label="Continue with Email"
                icon={mailIcon}
                bgColor='#151C71'
                onClick={() => handleSignup('email')}
                disabled={!accountType} // Disable button if accountType is not selected
              />

              <Button
                label="Continue with Google"
                icon={googleIcon}
                onClick={() => handleSignup('google')}
                disabled={!accountType} // Disable button if accountType is not selected
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
