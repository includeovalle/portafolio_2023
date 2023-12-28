'use client'
import React, { useRef } from 'react';
import { Button, Dialog } from '@/app/components/';
import { childrenInterface } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';


const Index = ({ children }: childrenInterface) => {
    const { bgColor } = useBgColor();
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
                <span></span>
                <span></span>
                <span></span>
            </Button>

            <Dialog ref={modalRef} onClick={() => closeModal()}>
                {children}
            </Dialog>
        </>
    );
};

export default Index;
