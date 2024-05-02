"use client";
import React from "react";
import { Button } from '../';
import { classNamesInterface } from "@/app/types/";
import { useSearchParams } from 'next/navigation';

interface Props extends classNamesInterface {
  display: string;
  copyThis: string;
  alertText: string;
}

const Index = ({ display, copyThis, className = "copy-text", alertText }: Props) => {

  const copyText = copyThis ? copyThis : "";

  const bgColor = useSearchParams().get("theme");

  const currentTheme = `${className}__${bgColor}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert(`
        ${alertText}
        ${copyText}
        `);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  return (
    <Button type="button" className={currentTheme} onClick={copyToClipboard} >{display}</Button>
  );
};

export default Index;

