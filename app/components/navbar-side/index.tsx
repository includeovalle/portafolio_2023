"use client"
import React, { useRef } from "react";
import styles from "./index.module.scss";
import { CloseButton } from "@/app/components/";
import { childrenInterface } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';


interface PropsInterface extends childrenInterface {
  buttonText?: string
}

const Index = ({ buttonText, children }: PropsInterface) => {

  const { bgColor } = useBgColor();
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
        <dialog className={styles[currentTheme]} ref={mediaRef}>
        <CloseButton onClick={closeModal}></CloseButton>
          {children}
        </dialog>
    </>
  );
};

export default Index;
