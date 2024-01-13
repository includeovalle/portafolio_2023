"use client"
import React from "react";
import { Header, OnHoverButton, Hamburger, Portrait, Ul, Htag } from '@/app/components/';
import { useBgColor } from '@/app/utils/context';

const Index = () => {

  const { changeTheme, bgColor } = useBgColor();

  const handleClick = (theme:string) => {
    changeTheme(theme);
  };



  const text = " Carlos Raul Amaro Ovalle";
  const skills = [ "Bash" , "AWK" , "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS" , "SASS" , "Javascript" , "Typescript" , "React-js" , "Node-js" , "Git" , "Github", "storybook" ]

  return (

    <Header className={bgColor} >
      <Portrait className={bgColor} text={text} />
      <div>
        <Htag className={bgColor} type={1}>Habilidades T&#233;cnicas</Htag>
        <Ul className={bgColor} lis={skills}/>
      </div>

      <div>
        <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"blue"}/>
        <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="orange"/>
        <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className='purple'/>
      </div>

      <Hamburger >
        <div>
          <main>
          <OnHoverButton onClick={() => handleClick('blue')} onHover={() => handleClick('blue')} className={"blue"}/>
          <OnHoverButton onClick={() => handleClick('orange')} onHover={()=> handleClick('orange')} className="orange"/>
          <OnHoverButton onClick={() => handleClick('purple')} onHover={()=> handleClick('purple')} className='purple'/>
          </main>
        </div>
      </Hamburger>
    </Header>
  );
};

export default Index;
