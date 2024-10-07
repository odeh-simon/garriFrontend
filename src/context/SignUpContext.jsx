import React, { createContext, useState } from 'react';

export const SignUpContext = createContext();

export const SignupProvider = ({ children }) => {
  const [accountType, setAccountType] = useState(null);  // buyer or seller
  const [signupMethod, setSignupMethod] = useState(null); // email or google

  return (
    <SignUpContext.Provider value={{ accountType, setAccountType, signupMethod, setSignupMethod }}>
      {children}
    </SignUpContext.Provider>
  );
};
