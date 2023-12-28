"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger } from '@/app/components/';
import { useBgColor } from '@/app/utils/context';

const Index = () => {

 const { changeTheme, bgColor, isDark, toggleDarkMode } = useBgColor();

  const handleClick = (theme:string) => {
    changeTheme(theme);
  };

  
  // const handleDark = () => {
  //   toggleDarkMode()
  // }

  
  return (

    <Header className={bgColor} >
      <div>foto</div>
      <div>
        <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"blue"}/>
        <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="orange"/>
        <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className="colorChange">purple</OnHoverButton>
        <OnHoverButton className={"black"} />
      </div>
      <Hamburger>
        <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"circle__blue"}/>
        <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="circle__orange"/>
        <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className="colorChange">purple</OnHoverButton>
        <OnHoverButton  className="black"/>
      </Hamburger>
    </Header>
  );
};

export default Index;
