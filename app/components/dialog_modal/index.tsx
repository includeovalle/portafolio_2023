import styles from "./index.module.scss"
import { CloseButton } from '@/app/components/';
import { DialogInterface } from "@/app/types/";
import React, { forwardRef, ForwardedRef } from 'react';

const Index = forwardRef(({ closeBtn, onClick, children, className="default" }: DialogInterface, ref:ForwardedRef<HTMLDialogElement>) => {

    return (
            <dialog ref={ref} className={styles[className]}>
                <CloseButton onClick={onClick}>{closeBtn}</CloseButton>
                {children}
            </dialog>
    )
});

export default Index;
