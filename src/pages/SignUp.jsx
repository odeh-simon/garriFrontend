import React, { useContext, useState } from 'react';
import desktopBgImage from '../assets/authBg.png';
import mobileBgImage from '../assets/authMobileBg.png';
import tabletBgImage from '../assets/authTabBg.png';
import garriLogo from '../assets/garri logo.svg';
import eyeOpen from '../assets/eye-open.svg';
import eyeClosed from '../assets/eye-closed.svg';
import { SignUpContext } from '../context/SignUpContext';
import axios from 'axios';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import useWindowSize from '../hooks/UseWindowSize';

export default function SignUp() {
  const { accountType, signupMethod } = useContext(SignUpContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const options = countryList().getData(); // Fetch the country list data
  const size = useWindowSize();

   // Validation error states
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
 
   const validateEmail = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };
 
   const validatePassword = (password) => {
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
     return passwordRegex.test(password);
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Clear previous errors
    setEmailError('');
    setPasswordError('');
  
    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
  
    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters including upper case, lowercase and numbers');
      return;
    }
  
    const signupData = {
      email,
      name,
      phone,
      password,
      accountType,
      signupMethod,
      country,
      state,
      postalcode,
    };
  
    try {
      const response = await axios.post('/api/signup', signupData);
      console.log('User created:', response.data);
      // Handle successful signup (e.g., navigate to the next page)
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const backgroundImage = {
    backgroundImage: `url(${
      size.width <= 500
        ? mobileBgImage
        : size.width <= 1023
        ? tabletBgImage
        : desktopBgImage
    })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='flex flex-col lg:flex-row gap-[24px] lg:gap-[75.75px] lg:pr-[32px] w-full h-[100%]'>
      {/* Background Image Section */}
      <div className='w-full lg:w-[55%] flex flex-col items-center lg:items-start gap-6 pt-9 pl-5 h-[30vh] lg:h-auto' style={backgroundImage}>
        <div className='flex gap-2 items-center'>
          <img src={garriLogo} alt="logo" className='w-9 h-9' />
          <p className='text-[#FCFCFC] font-roboto text-[28px] lg:text-[40px] lg:font-bold'>Garri Market Place</p>
        </div>
        <h1 className='text-stroke flex items-center font-roboto text-[90px] md:text-[128px] font-bold lg:hidden'>Sign Up</h1>
      </div>
      
      {/* Sign Up Form Section */}
      <div className='w-[90%] mx-auto lg:mx-0 lg:w-[40%] flex flex-col justify-center py-8 h-[100%]'>
        <h2 className='text-[32px] font-roboto font-bold text-[#080E52] mb-4 hidden lg:block'>Sign Up</h2>

        <form onSubmit={handleSubmit} className='w-full space-y-2'>
          {/* Full Name */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Full Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]'
              placeholder='Enter your full name'
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border-b-2 ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]`}
              placeholder='Enter your email'
              required
            />
             {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Phone</label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]'
              placeholder='Enter your phone number'
              required
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border-b-2 ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]`}
              placeholder='Create a password'
              required
            />
            <img  
              src={passwordVisible ? eyeOpen : eyeClosed}
              alt='Toggle visibility'
              className='absolute right-3 top-9 cursor-pointer w-6 h-6'
              onClick={togglePasswordVisibility}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>

          {/* Country */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Country</label>
            <Select
              options={options}
              value={country}
              onChange={setCountry}
              className='w-full'
              placeholder='Select your country'
            />
          </div>

          {/* State */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>State</label>
            <input
              type='text'
              value={state}
              onChange={(e) => setState(e.target.value)}
              className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]'
              placeholder='Enter your state'
              required
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Postal Code</label>
            <input
              type='text'
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              className='w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED]'
              placeholder='Enter your postal code'
              required
            />
          </div>

          {/* Checkbox */}
          <div className='flex items-center gap-2 mb-6'>
            <input
              type='checkbox'
              id='terms'
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
              className='form-checkbox h-5 w-5 text-[#080E52]'
              required
            />
            <label htmlFor='terms' className='text-[#9DA1CC] font-roboto text-sm'>
              By continuing you agree to Garri Marketplace&apos;s <span className='text-[#080E52]'>Terms and Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className=''>
            <button
              type='submit'
              className='w-full bg-[#151C71] text-white py-3 rounded-md text-xl font-semibold focus:outline-none hover:bg-blue-700'
            >
              Sign Up
            </button>
          </div>

          {/* Already have an account? */}
          <div className='text-center mt-6'>
            <p className='text-[#E4E4E4] font-roboto'>
              Already have an account? <a href='/login' className='text-[#000433] font-roboto'>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
