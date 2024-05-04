import React from "react";
import { Ptag } from '../../'

interface IndexProps {
  theme: string;
  text: string;
}

export default function Index({theme, text}: IndexProps) {
  const CURRENTTHEME = `about__${theme}`;

  return (
    <>
      <br />
      <Ptag  className={CURRENTTHEME}>{text}</Ptag>
      <br />
    </>
  );
};
