import React from "react";
import { CopyButton } from '../../';
import { DictionaryInterface } from "@/app/types";

const Email = "carlosovalle@soultech.studio"

const Index = ({lang}: DictionaryInterface) => {

  const buttonText = lang["networks"].copyEmail;

  return (
    <>

      <CopyButton display={buttonText} copyThis={Email} lang={lang}/>

    </>
  );
};

export default Index;

