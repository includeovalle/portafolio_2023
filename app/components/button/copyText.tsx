"use client"
import React, { useState } from "react";
import { Button } from '@/app/components/';
import { classNamesInterface } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';

interface Props extends classNamesInterface {
  display: string;
  copyThis: string;
}

const Index = ({ display, copyThis, className = "copy-text" }: Props) => {

  const copyText = copyThis ? copyThis : "";

  const { bgColor } = useBgColor();
  const { currentLanguage } = useLanguage();

  const currentTheme = `${className}__${bgColor}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert(`${currentLanguage["networks"].alert}\n ${copyText}`);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  return (
    <Button type="button" className={currentTheme} onClick={copyToClipboard} >{display}</Button>
  );
};

export default Index;

