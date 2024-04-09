"use client"
import { CloseButton } from "@/app/components/";
import React, { useRef } from "react";
import { Title, EmailButton } from '@/app/components/Designs';
import { useBgColor } from '@/app/utils/context';
import styles from "./index.module.scss";
import { useLanguage } from '@/app/utils/language';
import { childrenInterface } from "@/app/types"

interface Props extends childrenInterface {
  src: string
}

const Index = ({ children, src }: Props) => {

  const { bgColor } = useBgColor();
  const { currentLanguage } = useLanguage();

  const IFRAMEREF = useRef<HTMLDialogElement>(null);

  const hamburgerHandler = () => {
    IFRAMEREF.current?.showModal();
  };

  const closeModal = () => {
    IFRAMEREF.current?.close();
  };


  return (
    <>
      <div className={bgColor} onClick={() => hamburgerHandler()}>
        {children}
      </div>

      <dialog className={styles["iframe"]} ref={IFRAMEREF} >
        <CloseButton onClick={closeModal}></CloseButton>
        <iframe src={src} frameborder="0"></iframe>
      </dialog>
    </>
  );
};

export default Index;
