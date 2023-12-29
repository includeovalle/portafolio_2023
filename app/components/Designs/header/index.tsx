"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger } from '@/app/components/';
import { useBgColor } from '@/app/utils/context';

const Index = () => {

 const { changeTheme, bgColor } = useBgColor();

  const handleClick = (theme:string) => {
    changeTheme(theme);
  };

  // const handleDark = () => {
  //   changeDarkMode()
  // }
 
  return (

    <Header className={bgColor} >
      <div>foto</div>
      <div>
        <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"blue"}/>
        <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="orange"/>
        <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className='purple'/>
      </div>

      <Hamburger >
        <div>
          <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"blue"}/>
          <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="orange"/>
          <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className='purple'/>
        </div>
      </Hamburger>
    </Header>
  );
};

export default Index;
