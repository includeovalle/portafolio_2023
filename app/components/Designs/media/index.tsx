import React from "react";
import { SocialMedia, CustomImage } from "@/app/components/";
import Whatsapp from "@/public/whatsapp.svg";
import Github from "@/public/github.svg";
import Linkedin from "@/public/linked.svg";
import Email from "@/public/email.svg";
import Story from "@/public/storybook.svg";
import Pdf from "@/public/pdf-icon.svg";

//TODO: add to the dictionary
const Index = () => {
  const whatsappAPI = "https://api.whatsapp.com/send?phone=4441934444"
  const text = "Links";

  const MediaInfo = [
    {
      image: Whatsapp, alt: "contacto",
      links: { href: whatsappAPI, target: "_blank" }
    }
    , {
      image: Github, alt: "repositori del proyecto",
      links: { href: "https://github.com/includeovalle/portafolio_2023/", target: "_blank" }
    }
    , {
      image: Linkedin, alt: "contacto linkedin",
      links: { href: "https://www.linkedin.com/in/carlos-amaro-dev", target: "_blank" }
    }
    , {
      image: Email, alt: "correo profesional",
      links: { href: "mailto:carlosovalle@soultech.studio", target: "_blank" }
    }
    , {
      image: Story, alt: "pagina de testeo de componentes",
      links: { href: "https://portafolio-2023-dayu.vercel.app/?path=/docs/configure-your-project--docs", target: "_blank" }
    }
    , {
      image: Pdf, alt: "Resumen profesional",
      links: { href: "/carlos-amaro-resume.pdf", target: "_self" }
    }
  ]

  return (
    <>

      <SocialMedia buttonText={text}>
        {
          MediaInfo.map((item, index) => (
            <CustomImage key={index} src={item.image} className={"icon"} alt={item.alt} links={true} href={item.links.href} target={item.links.target} />
          ))
        }
      </SocialMedia>
    </>
  );
};

export default Index;

