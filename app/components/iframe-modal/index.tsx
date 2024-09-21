"use client"
import { CloseButton } from "../";
import React, { useRef } from "react";
import styles from "./index.module.scss";
import { childrenInterface } from "@/app/types/"

interface Props extends childrenInterface {
  src: string;
  className: string;
}

const Index = ({ children, src, className }: Props) => {


  const POPUPREF = useRef<HTMLDialogElement>(null);

  const hamburgerHandler = () => {
    POPUPREF.current?.showModal();
  };

  const closeModal = () => {
    POPUPREF.current?.close();
  };


  return (
    <>
      <div className={styles[className]} onClick={() => hamburgerHandler()}>
        {children}
      </div>

      <dialog className={styles['modal']} ref={POPUPREF} >
        <CloseButton onClick={closeModal}></CloseButton>
        <object type="application/pdf" data={src} ></object>
      </dialog>
    </>
  );
};

export default Index;
