import React from "react";
import { Htag } from '@/app/components/'
import { classNamesInterface, DictionaryInterface } from '@/app/types/';

interface IndexProps extends classNamesInterface {
  text: string;
  theme: string;
};

interface PropsInterface extends DictionaryInterface {
  theme: string;
}

const H1 = ({ text, theme, className = "subtitle" }: IndexProps) => {
  const currentTheme = `${className}__${theme}`;
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

export const HeaderTag = ({ theme, lang }: PropsInterface) => {
  const text = lang["titles"].title;
  return H1({ text, theme });
}

export const ProjectsTag = ({ theme, lang }: PropsInterface) => {
  const text = lang["titles"].projects;
  return H2({ text, theme });
}

export const LanguagesTag = ({theme, lang}: PropsInterface) => {
  const text = lang["titles"].languages;
  return H2({ text, theme });
}
export const AboutMeTag = ({theme, lang}: PropsInterface) => {
  const text=  lang["titles"].aboutme 
  return H2({text, theme});
  }
