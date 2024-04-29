"use client"
import React from "react";
import { Ptag } from '@/app/components/'
import { DictionaryInterface } from "@/app/types/";

interface Props extends DictionaryInterface {
  theme: string;
}

const Index = ({theme, lang } : Props) => {
  const currentTheme = `lang__${theme}`;
  return (
    <>
      <br />
      {
      lang.footer.languages.map((item: string) => (
      <Ptag key={item} className={currentTheme}>{item}</Ptag>
        ))
      }
    </>
  );
};

export default Index;

