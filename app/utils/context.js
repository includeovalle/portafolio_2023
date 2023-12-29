"use client"
// context.js
import React, { createContext, useContext } from 'react';
import useLocalStorage from './custom-hooks/localStorage.js';

export const BgColorContext = createContext();

const backgroundOptions = ['blue', 'orange', 'purple'];

const BgColorProvider = ({ children }) => {
  //TODO solve how to get the initial value from local storage
  const [bgColor, setBgColor] = useLocalStorage('background', '');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkmode', '');


  // check localStorage for background using try catch
  try {
    var initialTheme = localStorage.getItem('background');
  } catch { return null; }

  // check localStorage for background using try catch
  try {
    var initialDarkmode = localStorage.getItem('darkmode');
    if (!initialDarkmode) { setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches); }
  } catch { return null; }

  if (!initialTheme) { setBgColor("blue"); }

  const changeTheme = (newTheme) => {
    if (backgroundOptions.includes(newTheme)) {
      setBgColor(newTheme);
    }
  };

  const changeDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
    } 
  }

  return (
    <BgColorContext.Provider value={{ bgColor, changeTheme, changeDarkMode, isDarkMode }}>
      {children}
    </BgColorContext.Provider>
  );
};

export const useBgColor = () => {
  return useContext(BgColorContext);
};

export default BgColorProvider;
