 import React from "react";
 import {Footer}  from "../../";

 interface IndexProps {
   theme: "blue" | "purple" | "orange";
 }

 const Index = ({theme}: IndexProps) => {
   return (
     <Footer className={theme}>
       <p> Soultech studio... 🚀</p>
     </Footer>
   );
 };

 export default Index;
