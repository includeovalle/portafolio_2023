"use client"
// context.js
import React, { createContext, useContext } from 'react';
import useLocalStorage from './custom-hooks/localStorage.js';

export const BgColorContext = createContext();

const backgroundOptions = ['blue', 'orange', 'purple'];

const BgColorProvider = ({ children }) => {
  //TODO solve how to get the initial value from local storage
  const [bgColor, setBgColor] = useLocalStorage('background', '');
  // check localStorage for background using try catch
  try {
    var initialTheme = localStorage.getItem('background');
    if (!initialTheme) { setBgColor("blue"); }
  } catch { return null; }

  // check localStorage for background using try catch
  try {
    var initialDarkmode = localStorage.getItem('darkmode');
    if (!initialDarkmode) { setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches); }
  } catch { return null; }


  const changeTheme = (newTheme) => {
    if (backgroundOptions.includes(newTheme)) {
      setBgColor(newTheme);
    }
  };

  return (
    <BgColorContext.Provider value={{ bgColor, changeTheme }}>
      {children}
    </BgColorContext.Provider>
  );
};

export const useBgColor = () => {
  return useContext(BgColorContext);
};

export default BgColorProvider;
