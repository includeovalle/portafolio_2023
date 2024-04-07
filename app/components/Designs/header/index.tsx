"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '@/app/components/';
import { Title, EmailButton } from '@/app/components/Designs';
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

const Index = () => {

  const { changeTheme, bgColor } = useBgColor();
  const { CURRENTLANGUAGE } = useLanguage();

  const handleClick = (theme: string) => {
    changeTheme(theme);
  };

  const COLORS = ["blue", "purple", "orange"]

  const TitleTag = () => Title.Header()


  return (

    <Header className={bgColor} >
      <Portrait className={bgColor} text={CURRENTLANGUAGE.header.portrait} />
      <div>
        <TitleTag />
        <Ul className={bgColor} lis={CURRENTLANGUAGE.header.skills}/>

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
