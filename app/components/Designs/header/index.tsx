"use client"
import { Header, OnHoverButton, Hamburger, Portrait, Ul } from '@/app/components/';
import Link from 'next/link';
import { HeaderTag, EmailButton } from '@/app/components/Designs';
import colorHandler from '@/app/utils/colorHandler';
import { DictionaryInterface } from "@/app/types/";

interface Props extends DictionaryInterface {
  theme: string;
}



const Index = ({theme, lang } : Props) => {

  const COLORS = ["blue", "purple", "orange"];


  // colorHandler is a function that handles default theme
  colorHandler( );

  return (

    <Header className={theme} >
      <Portrait className={theme} text={lang.header.portrait} />
      <div>
        <HeaderTag theme={theme} lang={lang} />
        <Ul className={theme} lis={lang.header.skills}/>

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
        <EmailButton lang={lang} />
      </Hamburger>
    </Header>
  );
};

export default Index;
