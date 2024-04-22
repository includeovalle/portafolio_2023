"use client"
import React from "react";
import { Htag } from '@/app/components/'
import { classNamesInterface } from '@/app/types/';
import { useBgColor } from '@/app/utils/context';
import es from '@/app/copy/esp';

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
    return Index.H1({ text: es["titles"].title });
  }
  , Projects: () => {
    return Index.H2({ text: es["titles"].projects });
  }
  , Languages: () => {
  return Index.H2({ text: es["titles"].languages });
  }
}

export default Index;

export const HeaderTag = Index.Header;
export const ProjectsTag = Index.Projects;
export const LanguagesTag = Index.Languages;
