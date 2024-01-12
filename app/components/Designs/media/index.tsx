"use client"
import React from "react";
import {SocialMedia, CustomImage} from "@/app/components/";
import Whatsapp from "@/public/whatsapp.svg";
import Github from "@/public/github.svg";
import Linkedin from "@/public/linked.svg";
import Email from "@/public/email.svg";
import Story from "@/public/storybook.svg";
import Pdf from "@/public/pdf-icon.svg";


const Index = () => {
  const whatsappAPI = window.matchMedia("(max-width: 768px)").matches? "https://api.whatsapp.com/send?phone=4441934444" :  "https://web.whatsapp.com/send?phone=4441934444"

 const text = "Contacto";

  const MediaInfo = [
    {image: Whatsapp, alt: "contacto",
      links:{href:whatsappAPI, target: "_blank"} }
    ,{image: Github, alt: "repositori del proyecto",
      links:{href: "https://github.com/includeovalle/portafolio_2023/", target: "_blank"} }
    ,{image: Linkedin, alt: "contacto linkedin",
      links:{href: "https://www.linkedin.com/in/carlos-amaro-dev", target: "_blank"}}
    ,{image: Email, alt: "correo profesional",
      links:{href: "mailto:carlosovalle@soultech.studio", target: "_blank"}}
    ,{image: Story, alt: "pagina de testeo de componentes",
      links:{href: "/", target: "_blank"}}
    //TODO find a way to download the pdf
    ,{image: Pdf, alt: "Resumen profesional",
      links:{href: "../../../public/carlos-amaro-resume.pdf", target: "_self"}}
  ]

  return (
    <>

      <SocialMedia buttonText={text}>
        {
          MediaInfo.map((item, index)=> (
            <CustomImage key={index} src={item.image} className={"icon"} alt={item.alt} links={true} href={item.links.href} target={item.links.target}/>
          ))
        }
      </SocialMedia>
    </>
  );
};

export default Index;

