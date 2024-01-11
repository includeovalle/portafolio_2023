"use client"
import React, { useState, useCallback } from "react";
import { Button } from '@/app/components/';

interface Props {
    display: string;
    copyThis: string;
    }
const Index = ({display, copyThis}:Props) => {

const [copyText, setCopyText] = useState(copyThis?copyThis:"");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert(`Text has been copied to the clipboard: ${copyText}`);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

    return (
        <Button type="button" onClick={copyToClipboard} >{display}</Button>
    );
};

export default Index;

