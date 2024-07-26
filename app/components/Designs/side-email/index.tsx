import React from "react";
import { CopyButton } from '../../';

interface IndexProps {
  display: string;
  alert: string;
  copyThis: string;
}

const Index = ({ display, alert, copyThis }: IndexProps) => {
  return (
    <>
      <CopyButton display={display} copyThis={copyThis} alertText={alert} />
    </>
  );
};

export default Index;

