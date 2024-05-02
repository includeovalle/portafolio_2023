import React from "react";
import { CopyButton } from '../../';

const Email = "carlosovalle@soultech.studio"

const Index = ({ display, alert }: { display: string, alert: string }) => {
  return (
    <>
      <CopyButton display={display} copyThis={Email} alertText={alert} />
    </>
  );
};

export default Index;

