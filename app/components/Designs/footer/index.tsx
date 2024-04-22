 'use client'
 import React from "react";
 import { Footer } from "@/app/components/";
 import { useBgColor } from '@/app/utils/context';

 const Index = () => {
 const { bgColor} = useBgColor();


   return (
     <Footer className={bgColor}>
       <p> Soultech studio... 🚀</p>
     </Footer>
   );
 };

 export default Index;
