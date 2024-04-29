 import React from "react";
 import { Footer } from "@/app/components/";

 const Index = ({theme}:{theme:string}) => {
   return (
     <Footer className={theme}>
       <p> Soultech studio... 🚀</p>
     </Footer>
   );
 };

 export default Index;
