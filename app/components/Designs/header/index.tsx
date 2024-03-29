"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '@/app/components/';
import {Title} from '@/app/components/Designs';
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

const Index = () => {

  const { changeTheme, bgColor } = useBgColor();
  const { currentLanguage } = useLanguage();

  const handleClick = (theme:string) => {
    changeTheme(theme);
  };


  console.log(currentLanguage, "index man");

  const text = " Carlos Raul Amaro Ovalle";
  const skills = [ "Bash" , "AWK" , "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS" , "SASS" , "Javascript" , "Typescript" , "React-js" , "Node-js" , "Git" , "Github", "storybook" ]


  return (

    <Header className={bgColor} >
      <Portrait className={bgColor} text={text} />
      <div>
        <Title className="subtitle" >Habilidades T&#233;cnicas</Title>
        <Ul className={bgColor} lis={skills}/>
      </div>

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
