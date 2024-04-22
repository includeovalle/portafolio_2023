"use client"
import React from "react";
import { Ptag } from '@/app/components/'
import { useBgColor } from '@/app/utils/context';
import es from '@/app/copy/esp';

const Index = () => {
  const { bgColor } = useBgColor();
  const currentTheme = `lang__${bgColor}`;
  return (
    <>
      <br />
      {
      es.footer.languages.map((item: string) => (
      <Ptag key={item} className={currentTheme}>{item}</Ptag>
        ))
      }
    </>
  );
};

export default Index;

