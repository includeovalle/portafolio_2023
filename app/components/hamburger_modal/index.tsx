'use client'
import React, { useRef } from 'react';
import { Button, Dialog } from '../';
import { childrenInterface } from "@/app/types/";
import { useSearchParams } from 'next/navigation';


const Index = ({ children }: childrenInterface) => {
    const bgColor = useSearchParams().get("theme") || "primary";
    const modalRef = useRef<HTMLDialogElement>(null);

    const hamburgerHandler = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    const CurrentTheme = `hamburger__${bgColor}`
    return (
        <>
            <Button className={CurrentTheme} type={'button'} onClick={() => hamburgerHandler()}>
            </Button>

            <Dialog className={bgColor} ref={modalRef} onClick={() => closeModal()}>
                {children}
            </Dialog>
        </>
    );
};

export default Index;
