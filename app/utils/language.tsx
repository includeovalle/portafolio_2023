"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import esp from "@/app/copy/esp";
import eng from "@/app/copy/eng";
import po from "@/app/copy/por";
import { childrenInterface } from "@/app/types"

export const LanguageContext = createContext("en");


const LanguageList = {
  'en': eng,
  'es': esp,
  'pt': po
};

let currentLanguage = LanguageList['en'];

const LanguageProvider = ({ children }: childrenInterface) => {
  const [UserBrowserLanguage, setUserBrowserLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.navigator.UserBrowserLanguage;
    }
    // Return a default UserBrowserLanguage (optional)
    return 'en'; // or any other default

  });

  // check how UserBrowserLanguage startsWith
  if (UserBrowserLanguage.startsWith('en')) {
    currentLanguage = LanguageList['en'];
  }
  if (UserBrowserLanguage.startsWith('es')) {
    currentLanguage = LanguageList['es'];
  }
  if (UserBrowserLanguage.startsWith('pt')) {
    currentLanguage = LanguageList['pt'];
  }


  // useEffect(() => {
  //   if (UserBrowserLanguage === 'en-US') {
  //     setUserBrowserLanguage('en');
  //   }
  //   if (UserBrowserLanguage === 'es') {
  //     setUserBrowserLanguage('es');
  //   }
  //   console.log({UserBrowserLanguage});
  // }, [UserBrowserLanguage]);
  //
  const changeLanguage = UserBrowserLanguage;

  return (
    <html lang={UserBrowserLanguage}>
      <LanguageContext.Provider value={{currentLanguage}}>
        {children}
      </LanguageContext.Provider>
    </html>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageProvider;

