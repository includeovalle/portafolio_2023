 import React from "react";
 import {Footer}  from "../../";

 interface IndexProps {
   theme: "primary" | "secondary" | "tertiary";
 }

 const Index = ({theme}: IndexProps) => {
   return (
     <Footer className={theme}>
       <p> Soultech studio... 🚀</p>
     </Footer>
   );
 };

 export default Index;
