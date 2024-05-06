"use client"
import { Header, Hamburger, Portrait, Ul } from '../../';
import Link from 'next/link';
import { TitleTag, EmailButton } from '../';
import ButtonStyle from '../../button/index.module.scss';
import colorHandler from '../../../utils/colorHandler';

interface Props {
  theme: string;
  display: string;
  alert: string;
  copyThis: string;
  portrait: string
  title: string;
  skills: string[];
}


const Index = ({theme, display, alert, portrait, title, skills, copyThis } : Props) => {

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
              <Link key={color} aria-roledescription={"application-theme-handler"}  className={ButtonStyle[color]} href={`?theme=${color}`}>
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
              <Link key={color} aria-roledescription={"application-theme-handler"}  className={ButtonStyle[color]} href={`?theme=${color}`}>
              </Link>
              )
            })
          }
        </div>
        <EmailButton display={display} alert={alert} copyThis={copyThis} />
      </Hamburger>
    </Header>
  );
};

export default Index;
