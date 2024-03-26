"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { childrenInterface } from "@/app/types"

export const LanguageContext = createContext("en");

const LanguageProvider = ({ children }: childrenInterface) => {
 const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.navigator.language;
    }
    // Return a default language (optional)
    return 'en'; // or any other default
  });

  useEffect(() => {
    if (language === 'en-US') {
      setLanguage('en');
    }
    if (language === 'es') {
      setLanguage('es');
    }
  }, [language]);

  return (
    <html lang={language}>
      <LanguageContext.Provider value={ language }>
        {children}
      </LanguageContext.Provider>
    </html>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageProvider;

