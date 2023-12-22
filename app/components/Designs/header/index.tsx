"use client"
import React, { useState } from "react";
import { Header, OnHoverButton } from '@/app/components/';
import { useBgColor } from '@/app/utils/context';

const Index = () => {
  const [theme, setTheme ] = useState('blue');

 const { changeTheme } = useBgColor();

  const handleClick = (theme:string) => {
    changeTheme(theme);
  };
  
  return (

    <Header className={'header__space-around'} >
        <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"circle__blue"}/>
        <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="colorChange">orange</OnHoverButton>
        <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className="colorChange">purple</OnHoverButton>
        <OnHoverButton onClick={() => handleClick('dark')} onHover={()=> handleClick('dark')} className="colorChange">dark</OnHoverButton>
    </Header>
  );
};

export default Index;
