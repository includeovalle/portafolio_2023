"use client"
import React from "react";
import { Ptag } from '@/app/components/'
import { useBgColor } from '@/app/utils/context';

const Index = () => {
  const { bgColor } = useBgColor();
  const currentTheme = `lang__${bgColor}`;
  return (
    <>
      <br />
      <Ptag className={currentTheme}>ingles</Ptag>
      <Ptag className={currentTheme}>portugues</Ptag>
      <Ptag className={currentTheme}>español</Ptag>
    </>
  );
};

export default Index;

