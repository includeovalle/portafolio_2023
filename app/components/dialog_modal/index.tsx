import styles from "./index.module.scss"
import { CloseButton } from '@/app/components/';
import { DialogInterface } from "@/app/types/";
import React, { forwardRef, ForwardedRef } from 'react';

//closeBtn must be able to receive a component as a prop


const Index = forwardRef(({ closeBtn, onClick, children, className }: DialogInterface, ref:ForwardedRef<HTMLDialogElement>) => {


    const propStyle = className ? styles[className] : styles['default'];

    return (
            <dialog ref={ref} onClick={onClick} className={propStyle}>
                <CloseButton onClick={onClick}>{closeBtn}</CloseButton>
                {children}
            </dialog>
    )
});

Index.displayName = 'Index';
export default Index;


