"use client"
import { Header, Hamburger, Portrait } from '../../';
import Link from 'next/link';
import { Languages } from '../';
import ButtonStyle from '../../button/index.module.scss';
import colorHandler from '../../../utils/colorHandler';
import { Language } from "@/app/types/dictionary";

interface Props {
  theme: string;
  display: string;
  alert: string;
  copyThis: string;
  languages: Language[];
  currentLang: string;
}


const Index = ({theme, languages, currentLang} : Props) => {

  const COLORS = ["primary", "secondary", "tertiary"];

  // colorHandler is a function that handles default theme
  colorHandler( );

  return (

    <Header className={theme} >
      <div>
      <Languages theme={theme} languages={languages} currentLang={currentLang}/>
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
