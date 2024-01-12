"use client"
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Dialog } from "@/app/components/";
import { useBgColor } from '@/app/utils/context';
import { childrenInterface, classNamesInterface } from "@/app/types/";

const UseBgColor = () => {
  const { bgColor } = useBgColor();
  return bgColor;
}

interface PropsInterface extends childrenInterface, classNamesInterface {
  buttonText?: string
}

const Index = ({ className = "media", children, buttonText }: PropsInterface) => {

  const [isOpen, setIsOpen] = useState(false);
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

  const currentTheme = `${className}__${bgColor}`

  return (
    <>
      <nav onClick={() => handleClick()} className={isOpen ? styles["no-display"] : styles[bgColor]}>
        {buttonText}
      </nav>
      <Dialog className={!isOpen ? "no-display" : currentTheme} ref={mediaRef} onClick={() => closeModal()}>
        {children}
      </Dialog>
    </>
  );
};

export default Index;
