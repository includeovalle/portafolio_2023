import React from "react";
import Link from 'next/link';
import styles from '../../paragraph/index.module.scss'
import { Language } from "@/app/types/dictionary";


interface Props {
  theme: string;
  languages: Language[];
}

const Index = ({ theme, languages }: Props) => {
  const currentTheme = `lang__${theme}`;
  return (
    <>
      <br />
      {
        languages.map((lang: Language, key: number) => {
          const currentLang = lang.lang
          const currentRoute = `/${currentLang}?theme=${theme}`
          return (
            <Link className={styles[currentTheme]} href={currentRoute} key={key} >
              <p title={lang.title} >{lang.text}</p>
            </Link>
          )
        }
        )
      }
    </>
  );
};

export default Index;
