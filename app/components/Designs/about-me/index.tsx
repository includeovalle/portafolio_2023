import React from "react";
import { Ptag } from '../../'

interface IndexProps {
  theme: string;
  text: string[];
}

export default function Index({theme, text}: IndexProps) {
  const CURRENTTHEME = `about__${theme}`;

  return (
    <>
      {
        text.map((txt)=> (
          <Ptag key={txt} className={CURRENTTHEME}>{txt}</Ptag>
        ))
      }
    </>
  );
};
