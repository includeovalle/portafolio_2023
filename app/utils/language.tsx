"use client"
import React, { createContext, useContext, useState } from 'react';
import esp from "@/app/copy/esp";
import eng from "@/app/copy/eng";
import po from "@/app/copy/por";

import { childrenInterface } from "@/app/types"

// Update the type of LanguageContext
export const LanguageContext = createContext<any>({});

const LanguageList = {
  'en': eng,
  'es': esp,
  'pt': po
};

let currentLanguage = LanguageList['en']

const LanguageProvider = ({ children }: childrenInterface) => {
  const [UserBrowserLanguage, setUserBrowserLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.navigator.language;
    }
    // Return a default UserBrowserLanguage (optional)
    return 'en'; // or any other default
  });

if (UserBrowserLanguage.startsWith('en')) {
    currentLanguage = LanguageList['en'];
} else if (UserBrowserLanguage.startsWith('es')) {
    currentLanguage = LanguageList['es'];
} else if (UserBrowserLanguage.startsWith('pt')) {
    currentLanguage = LanguageList['pt'];
} else {
    // Default language in case none of the conditions match
    currentLanguage = LanguageList['en']; // Or any other default language
}

  return (
      <LanguageContext.Provider value={{currentLanguage}}>
        {children}
      </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageProvider;

