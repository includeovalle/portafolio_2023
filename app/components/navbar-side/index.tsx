"use client"
import React, { useRef } from "react";
import styles from "./index.module.scss";
import { CloseButton } from "../";
import { useSearchParams } from 'next/navigation';
import { childrenInterface, classNamesInterface } from "@/app/types/";

interface PropsInterface extends childrenInterface {
  buttonText?: string
}

const Index = ({ buttonText, children }: PropsInterface) => {

  const bgColor = useSearchParams().get("theme") || "primary";
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
      <button role="button" tabIndex={0} onClick={() => handleClick()} className={styles[bgColor]}>
        {buttonText}
      </button>
        <dialog onClick={()=> closeModal()} className={styles[currentTheme]} ref={mediaRef}>
        <CloseButton  autoFocus/>
          {children}
        </dialog>
    </>
  );
};

export default Index;
