"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '@/app/components/';
import { Title, EmailButton } from '@/app/components/Designs';
import { useBgColor } from '@/app/utils/context';

const Index = () => {

  const { changeTheme, bgColor } = useBgColor();

  const handleClick = (theme: string) => {
    changeTheme(theme);
  };



  const TEXT = " Carlos Raul Amaro Ovalle";
  const SKILLS = ["Bash", "AWK", "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS", "SASS", "Javascript", "Typescript", "React-js", "Node-js", "Git", "Github", "storybook"];
  const COLORS = ["blue", "purple", "orange"]
  const TITLE ="Habilidades Técnicas";

  return (

    <Header className={bgColor} >
      <Portrait className={bgColor} text={TEXT} />
      <div>
        <Title className="subtitle" >{TITLE}</Title>
        <Ul className={bgColor} lis={SKILLS} />
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
