"use client"
import { CloseButton } from "@/app/components/";
import React, { useRef } from "react";
import styles from "./index.module.scss";
import { childrenInterface } from "@/app/types/"

interface Props extends childrenInterface {
  src: string
}

const Index = ({ children, src }: Props) => {


  const IFRAMEREF = useRef<HTMLDialogElement>(null);

  const hamburgerHandler = () => {
    IFRAMEREF.current?.showModal();
  };

  const closeModal = () => {
    IFRAMEREF.current?.close();
  };


  return (
    <>
      <div onClick={() => hamburgerHandler()}>
        {children}
      </div>

      <dialog className={styles["iframe"]} ref={IFRAMEREF} >
        <CloseButton onClick={closeModal}></CloseButton>
        <iframe title="curriculum" src={src} />
      </dialog>
    </>
  );
};

export default Index;
