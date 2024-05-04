"use client"
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '../../';
import Link from 'next/link';
import { TitleTag, EmailButton } from '../';
import colorHandler from '../../../utils/colorHandler';

interface Props {
  theme: string;
  display: string;
  alert: string;
  portrait: string
  title: string;
  skills: string[];
}


const Index = ({theme, display, alert, portrait, title, skills } : Props) => {

  const COLORS = ["blue", "purple", "orange"];

  // colorHandler is a function that handles default theme
  colorHandler( );

  return (

    <Header className={theme} >
      <Portrait className={theme} text={portrait} />
      <div>
        <TitleTag theme={theme} text={title} />
        <Ul className={theme} lis={skills}/>

      </div>

      <div>
        {
          COLORS.map((color: string) => {
            return (
              <Link key={color} href={`?theme=${color}`}>
                <OnHoverButton className={color} />
              </Link>
            )
          })
        }
      </div>

      <Hamburger >
        <div>
          {
            COLORS.map((color: string, index: number) => {
              return (
              <Link key={color} href={`?theme=${color}`}>
                <OnHoverButton key={index} className={color} />
              </Link>
              )
            })
          }
        </div>
        <EmailButton display={display} alert={alert} />
      </Hamburger>
    </Header>
  );
};

export default Index;
