"use client"
import React from "react";
import { CopyButton } from "@/app/components";
import { useLanguage } from '@/app/utils/language';

const Email = "carlosovalle@soultech.studio"


const Index = () => {
  const { CURRENTLANGUAGE } = useLanguage();
  const buttonText = CURRENTLANGUAGE["networks"].copyEmail;

  return (
    <>

      <CopyButton display={buttonText} copyThis={Email} />

    </>
  );
};

export default Index;

