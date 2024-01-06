"use client"
import React, { useEffect,  useState,  useRef } from "react";
import styles from "./index.module.scss";
import {Dialog, CustomImage} from "@/app/components/";
import { useBgColor } from '@/app/utils/context';
import { childrenInterface, classNamesInterface } from "@/app/types/";
import Whatsapp from "@/public/whatsapp.svg";


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

  const MediaInfo = [
    {image: Whatsapp, alt: "contacto", links:{href: "/", target: "_blank"}}
    ,{image: Whatsapp, alt: "contacto", links:{href: "/", target: "_blank"}}
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
