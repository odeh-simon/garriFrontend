import { useState } from 'react';
import SocialLinks from '../../../components/SocialLinks';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    // Basic validation
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    if (!formData.agreeToTerms) formErrors.agreeToTerms = 'You must agree to the terms';

    if (Object.keys(formErrors).length === 0) {
      // Data is valid, prepare the data for submission
      const dataToSubmit = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Submit the form data (this would be replaced with an actual API call)
      console.log('Submitting data:', dataToSubmit);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='w-full mt-8'>
      <form className="flex flex-col gap-6 w-[84%] lg:w-[60%] mx-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className="font-bold text-[#828F9B] font-roboto text-base lg:text-xl">
            Enter Name
          </label>
          <input
            id='name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
            className="w-full border-b border-[#828F9B] outline-none"
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor='email' className="font-bold text-[#828F9B] font-roboto text-base lg:text-xl">
            Email
          </label>
          <input
            id='email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="w-full border-b border-[#828F9B] outline-none"
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor='message' className="font-bold text-[#828F9B] font-roboto text-base lg:text-xl">
            Message
          </label>
          <input
            id='message'
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border-b border-[#828F9B] outline-none"
            required
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreeToTerms" className="ml-2 text-xs md:text-lg font-roboto text-[#BBC2C9]">
            I&apos;ve read and agree with <a href="" className='text-[#080E52]'>Terms of Service</a> and <a href="" className='text-[#080E52]'>Privacy Policy</a>

          </label>
        </div>
        {errors.agreeToTerms && <p className="text-red-500">{errors.agreeToTerms}</p>}

        <button
          type="submit"
          className="bg-[#080E52] text-white py-2 px-4 w-full md:w-[331px] mx-auto rounded-md"
        >
          Send Message
        </button>
      </form>
      <div className='mt-2'>
        <p className='text-center text-[#080E52] font-roboto text-xs md:text-base lg:text-lg font-medium lg:font-normal'>Or connect with us via our socials</p>
        <div className='mt-8'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
