import { useState } from 'react';
import bgImage from '../assets/authBg.png';
import garriLogo from '../assets/garri logo.svg';
import eyeOpen from '../assets/eye-open.svg';
import eyeClosed from '../assets/eye-closed.svg';
import googleIcon from '../assets/google-login.svg';
import fbIcon from '../assets/fb-login.svg';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const backgroundImage = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      };

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
  
    const loginData = {
      email,
      password,
    };
  
    try {
      const response = await axios.post('/api/signup', loginData);
      console.log('User created:', response.data);
      // Handle successful signup (e.g., navigate to the next page)
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  return (
    <>
        <div className='flex gap-[75.75px] w-full h-[100%]'>
            <div className='w-[50%] pt-9 pl-5' style={backgroundImage}>
                <div className='flex gap-2 items-center'>
                    <img src={garriLogo} alt="logo" className='w-9 h-9' />
                    <p className='text-[#FCFCFC] font-roboto text-[40px] font-bold'>Garri Market Place</p>
                </div>

                <div className='flex items-center justify-center'>
                    <h2 className='text-stroke text-[#080E52] font-roboto text-[120px] font-bold'>
                        WELCOME BACK
                    </h2>
                </div>
            </div>

           {/* Login Form Section */}
            <div className='w-[40%] flex flex-col justify-center py-8 h-[100%]'>
                <h2 className='text-[32px] font-roboto font-bold text-[#080E52] mb-4'>Login</h2>

                <form onSubmit={handleSubmit} className='w-full space-y-2'>
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

                    {/* Password */}
                    <div className='relative'>
                        <label className='block text-[#828F9B] font-roboto text-[18px] font-bold mb-1'>Password</label>
                        <input
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full border-b-2 ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 p-2 placeholder-[#E8EBED] mb-4`}
                        placeholder='Enter your password'
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

                     {/* Submit Button */}
                    <div className=''>
                        <button
                        type='submit'
                        className='w-full bg-[#151C71] text-white py-3 rounded-md text-xl font-semibold focus:outline-none hover:bg-blue-700'
                        >
                        Login
                        </button>
                    </div>

                    <div className='flex justify-between'>
                        {/* Checkbox */}
                        <div className='flex items-center gap-2 mb-6'>
                            <input
                            type='checkbox'
                            id='rememberMe'
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className='form-checkbox h-5 w-5 text-[#080E52]'
                            required
                            />
                            <label htmlFor='rememberMe' className='text-[#9DA1CC] font-roboto text-sm'>
                            Remember me
                            </label>
                        </div>

                        <div>
                            <button>Forgot Password?</button>
                        </div>
                    </div>

                    <div className='text-center my-6'>
                        <p className='text-[#E4E4E4] font-roboto'>
                            Don&apos;t have an account? <a href='/signup' className='text-[#000433] font-roboto'>click here </a>
                            to sign up
                        </p>
                    </div>

                    <div className='flex gap-5 items-center justify-center'>
                        <button>
                            <img src={googleIcon} alt="google login" />
                        </button>
                        <button>
                            <img src={fbIcon} alt="facebook login" />
                        </button>
                    </div>

                </form>
            </div>    
                    
        </div>
    </>
  )
}
