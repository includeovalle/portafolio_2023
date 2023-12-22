"use client"
// context.js
import React, { createContext, useContext } from 'react';
import useLocalStorage from './custom-hooks/localStorage.js';

export const BgColorContext = createContext();

const backgroundOptions = ['blue', 'orange', 'purple', 'dark'];

const BgColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useLocalStorage('background', 'blue');

  const changeTheme = (newTheme) => {
    if (backgroundOptions.includes(newTheme)) {
      setBgColor(newTheme);
    }
  };

  return (
    <BgColorContext.Provider value={{ backgroundOptions, bgColor, changeTheme }}>
      {children}
    </BgColorContext.Provider>
  );
};

export const useBgColor = () => {
  return useContext(BgColorContext);
};

export default BgColorProvider;
