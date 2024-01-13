"use client"
import React, { useState, useCallback } from "react";
import { Button } from '@/app/components/';
import { classNamesInterface } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';

interface Props extends classNamesInterface{
    display: string;
    copyThis: string;
    }

const Index = ({display, copyThis, className="copy-text"}:Props) => {

const [copyText, setCopyText] = useState(copyThis?copyThis:"");

const {  bgColor } = useBgColor();

  const currentTheme = `${className}__${bgColor}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert(`Text has been copied to the clipboard: ${copyText}`);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

    return (
        <Button type="button" className={ currentTheme } onClick={copyToClipboard} >{display}</Button>
    );
};

export default Index;

