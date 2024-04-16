"use client"
// context.js
import React, { useState,  createContext, useContext } from 'react';

export const BgColorContext = createContext();
const backgroundOptions = ['blue', 'orange', 'purple'];

const BgColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("blue");

  const changeTheme = (newTheme) => {
    if (backgroundOptions.includes(newTheme)) {
      setBgColor(newTheme);
    }
  };

  return (
    <BgColorContext.Provider value={{ bgColor, changeTheme}}>
      {children}
    </BgColorContext.Provider>
  );
};

export const useBgColor = () => {
  return useContext(BgColorContext);
};

export default BgColorProvider;
