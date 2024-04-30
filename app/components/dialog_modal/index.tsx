import styles from "./index.module.scss"
import { CloseButton } from '@/app/components/';
import { DialogInterface } from "@/app/types/";
import React, { forwardRef, ForwardedRef } from 'react';

const Index = forwardRef(({ closeBtn, onClick, children, className="default" }: DialogInterface, ref:ForwardedRef<HTMLDialogElement>) => {

    return (
            <dialog ref={ref} onClick={onClick} className={styles[className]}>
                <CloseButton >{closeBtn}</CloseButton>
                {children}
            </dialog>
    )
});

Index.displayName = 'Dialog';
export default Index;
