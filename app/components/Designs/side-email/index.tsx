import React from "react";
import { CopyButton } from "@/app/components";
import es from "@/app/copy/esp";

const Email = "carlosovalle@soultech.studiok"


const Index = () => {
  const buttonText = es["networks"].copyEmail;

  return (
    <>

      <CopyButton display={buttonText} copyThis={Email} />

    </>
  );
};

export default Index;

