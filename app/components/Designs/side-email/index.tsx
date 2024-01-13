import React from "react";
import { CopyButton } from "@/app/components";

const Email = "carlosovalle@soultech.studio"
const buttonText =`Copiar Email`;

const Index = () => {

  return (
    <>

      <CopyButton display={buttonText} copyThis={Email} />

    </>
  );
};

export default Index;

