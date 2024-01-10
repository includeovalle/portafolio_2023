"use client"
import React, { useEffect,  useState,  useRef } from "react";
import styles from "./index.module.scss";
import {Dialog, CustomImage} from "@/app/components/";
import { useBgColor } from '@/app/utils/context';
import { childrenInterface, classNamesInterface } from "@/app/types/";
import Whatsapp from "@/public/whatsapp.svg";
import Github from "@/public/github.svg";
import Linkedin from "@/public/linked.svg";
import Email from "@/public/email.svg";
import Story from "@/public/storybook.svg";
import Pdf from "@/public/pdf-icon.svg";

const UseBgColor = () => {
  const { bgColor } = useBgColor();
  return bgColor;
}

interface PropsInterface extends childrenInterface, classNamesInterface {}

const Index = ({className="default", children}:PropsInterface) => {

  const [isOpen, setIsOpen ] = useState(false);
  const bgColor = UseBgColor();
  const mediaRef = React.useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    mediaRef.current?.show();
    setIsOpen(true);
  };

  const closeModal = () => {
    mediaRef.current?.close();
    setIsOpen(false);
  };

  // detect if user press esc key and set isOpen to false
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('keydown', handleEsc);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const whatsappAPI = window.matchMedia("(max-width: 768px)").matches? "https://api.whatsapp.com/send?phone=4441934444" :  "https://web.whatsapp.com/send?phone=4441934444"

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

  const currentTheme = `media__${bgColor}`
  return (
    <>
      <nav onClick={() => handleClick()} className={isOpen? styles["no-display"] : styles[bgColor]}>
        Contacto
      </nav>

      <Dialog className={!isOpen? "no-display": currentTheme} ref={mediaRef} onClick={() => closeModal()}>
        {
          MediaInfo.map((item, index)=> (
            <CustomImage key={index} src={item.image} className={"icon"} alt={item.alt} links={true} href={item.links.href} target={item.links.target}/>
          ))
        }
      </Dialog>
    </>
  );
};

export default Index;
