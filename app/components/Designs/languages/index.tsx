import React from "react";
import Link from 'next/link';
import { Language } from "@/app/types/dictionary";
import styles from '../../anchors/index.module.scss'


interface Props {
  theme: string;
  languages: Language[];
  currentLang: string;
}

const Index = ({ theme, languages, currentLang }: Props) => {
  return (
      <nav className={styles[theme]} >
      {
        languages.map((lang: Language) => {

          const LANGUAGE = lang.href
          const CURRENTROUTE = `/${LANGUAGE}?theme=${theme}`
          const CURRENTTHEME = `active__${theme}`
          return (
            <Link tabIndex={0}
              href={CURRENTROUTE}
              key={lang.href}
              className={currentLang===lang.href ? styles[CURRENTTHEME] : ""}
              title={lang.title}
              aria-roledescription={lang.ariaRole}
            >
              {lang.href}
            </Link>
          )
        }
        )
      }
      </nav>
  );
};

export default Index;
