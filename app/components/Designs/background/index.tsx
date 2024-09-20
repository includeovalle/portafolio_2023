import React from "react";
import {Ul} from "@/app/components"


const Index = ({theme="default",children}:{theme:string,children?: React.ReactNode;}) => {

 const customClass = `background__${theme}`;
  const LIS = ["software","engineer","","","software","","","engineer","",""]
  return (
    <Ul lis={LIS} className={customClass}>
      {children}
    </Ul>
  );
};

export default Index;

