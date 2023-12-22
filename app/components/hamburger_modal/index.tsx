'use client'
import React, { useRef } from 'react';
import { Button, Dialog } from '@/app/components/';
import { childrenInterface } from "@/app/types/";


const Index = ({ children }: childrenInterface) => {
    ;

    const modalRef = useRef<HTMLDialogElement>(null);

    const hamburgerHandler = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    return (
        <>
            <Button className={'hamburger'} type={'button'} onClick={() => hamburgerHandler()}>
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

