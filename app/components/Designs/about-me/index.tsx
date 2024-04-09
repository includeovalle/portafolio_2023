"use client"
import React from "react";
import { Ptag } from '@/app/components/'
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

const Index = () => {
  const { bgColor } = useBgColor();
  const { CURRENTLANGUAGE } = useLanguage();
  const CURRENTTHEME = `about__${bgColor}`;
  const ABOUTME = CURRENTLANGUAGE.aboutme;

  return (
    <>
      <br />
      <Ptag  className={CURRENTTHEME}>{ABOUTME}</Ptag>
      <br />
    </>
  );
};

export default Index;

