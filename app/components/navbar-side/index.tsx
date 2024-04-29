"use client"
import React, { useRef } from "react";
import styles from "./index.module.scss";
import { CloseButton } from "@/app/components/";
import { useSearchParams } from 'next/navigation';
import { childrenInterface, classNamesInterface } from "@/app/types/";

interface PropsInterface extends childrenInterface {
  buttonText?: string
}

const Index = ({ buttonText, children }: PropsInterface) => {

  const bgColor = useSearchParams().get("theme") || "blue";
  const mediaRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    mediaRef.current?.showModal();
  };

  const closeModal = () => {
    mediaRef.current?.close();
  };

  const currentTheme = `media__${bgColor}`;

  return (
    <>
      <nav onClick={() => handleClick()} className={styles[bgColor]}>
        {buttonText}
      </nav>
        <dialog onClick={()=> closeModal()} className={styles[currentTheme]} ref={mediaRef}>
        <CloseButton />
          {children}
        </dialog>
    </>
  );
};

export default Index;
