"use client"
import React from "react";
import {Htag} from '@/app/components/'
import {childrenInterface, classNamesInterface} from '@/app/types/';
import { useBgColor } from '@/app/utils/context';

interface IndexProps extends childrenInterface, classNamesInterface {
};

const Index = ({className="default", children}:IndexProps) => {

  const { bgColor } = useBgColor();
  const currentTheme = `${className}__${bgColor}`;
  return (
      <Htag type={2} className={currentTheme}>{children}</Htag>
  );
};

export default Index;

