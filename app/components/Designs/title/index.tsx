"use client"
import React from "react";
import { Htag } from '@/app/components/'
import { classNamesInterface } from '@/app/types/';
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

interface IndexProps extends classNamesInterface {
  text: string;
};

const Index = {
  H1: ({ text, className = "subtitle" }: IndexProps) => {
    const { bgColor } = useBgColor();
    const currentTheme = `${className}__${bgColor}`;
    return (
      <Htag type={1} className={currentTheme}> {text}</Htag>
    );
  }
  , H2: ({ text, className = "subtitle" }: IndexProps) => {
    const { bgColor } = useBgColor();
    const currentTheme = `${className}__${bgColor}`;
    return (
      <Htag type={2} className={currentTheme}> {text}</Htag>
    );
  }
  , Header: () => {
    const { CURRENTLANGUAGE } = useLanguage();
    return Index.H1({ text: CURRENTLANGUAGE["titles"].title });
  }
  , Projects: () => {
    const { CURRENTLANGUAGE } = useLanguage();
    return Index.H2({ text: CURRENTLANGUAGE["titles"].projects });
  }
  , Languages: () => {
  const { CURRENTLANGUAGE } = useLanguage();
  return Index.H2({ text: CURRENTLANGUAGE["titles"].languages });
  }
  , AboutMe: () => {
  const { CURRENTLANGUAGE } = useLanguage();
  return Index.H2({ text: CURRENTLANGUAGE["titles"].aboutme });
  }
}

export default Index;

export const HeaderTag = Index.Header;
export const ProjectsTag = Index.Projects;
export const LanguagesTag = Index.Languages;
export const AboutMeTag = Index.AboutMe;
