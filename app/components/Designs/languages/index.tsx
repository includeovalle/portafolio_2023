"use client"
import React from "react";
import { Ptag } from '@/app/components/'
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

const Index = () => {
  const { bgColor } = useBgColor();
  const { CURRENTLANGUAGE } = useLanguage();
  const currentTheme = `lang__${bgColor}`;
  return (
    <>
      <br />
      {
      CURRENTLANGUAGE.footer.languages.map((item: string) => (
      <Ptag key={item} className={currentTheme}>{item}</Ptag>
        ))
      }
    </>
  );
};

export default Index;

