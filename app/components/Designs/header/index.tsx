"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '@/app/components/';
import { Title, EmailButton } from '@/app/components/Designs';
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

const Index = () => {

  const { changeTheme, bgColor } = useBgColor();
  const { currentLanguage } = useLanguage();

  const handleClick = (theme: string) => {
    changeTheme(theme);
  };

  const COLORS = ["blue", "purple", "orange"]



  return (

    <Header className={bgColor} >
      <Portrait className={bgColor} text={currentLanguage.header.portrait} />
      <div>
        <Title className="subtitle" >{currentLanguage.header.title}</Title>
        <Ul className={bgColor} lis={currentLanguage.header.skills}/>

      </div>

      <div>
        {
          COLORS.map((color: string) => {
            return (
              <OnHoverButton key={color} onClick={() => handleClick(color)} onHover={() => handleClick(color)} className={color} />
            )
          })
        }
      </div>

      <Hamburger >
        <div>
          {
            COLORS.map((color: string, index: number) => {
              return (
                <OnHoverButton key={index} onClick={() => handleClick(color)} onHover={() => handleClick(color)} className={color} />
              )
            })
          }
        </div>
        <EmailButton />

      </Hamburger>
    </Header>
  );
};

export default Index;
