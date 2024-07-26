import React from "react";
import { Htag } from '../../'
import { classNamesInterface, DictionaryInterface } from '@/app/types/';

interface IndexProps extends classNamesInterface {
  text: string;
  theme: string;
};

const H1 = ({ text, theme }: IndexProps) => {
  const currentTheme = `${theme}`;
  return (
    <Htag type={1} className={currentTheme}> {text}</Htag>
  );
}

const H2 = ({ text, theme, className = "subtitle" }: IndexProps) => {
  const currentTheme = `${className}__${theme}`;
  return (
    <Htag type={2} className={currentTheme}> {text}</Htag>
  );
}

export const TitleTag = ({ theme,text }: IndexProps) => {
  return H1({ text, theme });
}

export const SubtitleTag = ({ theme, text }: IndexProps) => {
  return H2({ text, theme });
}
