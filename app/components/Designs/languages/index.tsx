import React from "react";
import { Ptag } from '../../'

interface Props {
  theme: string;
  languages: string[];
}

const Index = ({theme, languages } : Props) => {
  const currentTheme = `lang__${theme}`;
  return (
    <>
      <br />
      {
      languages.map((item: string) => (
      <Ptag key={item} className={currentTheme}>{item}</Ptag>
        ))
      }
    </>
  );
};

export default Index;

