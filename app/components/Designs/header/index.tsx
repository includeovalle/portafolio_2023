"use client"
import { Header, Hamburger, Portrait } from '../../';
import Link from 'next/link';
import { EmailButton } from '../';
import ButtonStyle from '../../button/index.module.scss';
import colorHandler from '../../../utils/colorHandler';

interface Props {
  theme: string;
  display: string;
  alert: string;
  copyThis: string;
  portrait: string
}


const Index = ({theme, display, alert, portrait, copyThis } : Props) => {

  const COLORS = ["primary", "secondary", "tertiary"];

  // colorHandler is a function that handles default theme
  colorHandler( );

  return (

    <Header className={theme} >
      <Portrait className={theme} text={portrait} />
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
            COLORS.map((color: string) => {
              return (
              <Link key={color} aria-roledescription={"application-theme-handler"}  className={ButtonStyle[color]} href={`?theme=${color}`}>
              </Link>
              )
            })
          }
        </div>
      </Hamburger>
    </Header>
  );
};

export default Index;
