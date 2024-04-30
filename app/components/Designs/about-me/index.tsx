import React from "react";
import { Ptag } from '@/app/components/'
import { DictionaryInterface } from "@/app/types/";

interface IndexProps extends DictionaryInterface {
  theme: string;
}

export default function Index({theme, lang}: IndexProps) {
  const CURRENTTHEME = `about__${theme}`;
  const ABOUTME = lang.aboutme;

  return (
    <>
      <br />
      <Ptag  className={CURRENTTHEME}>{ABOUTME}</Ptag>
      <br />
    </>
  );
};
