"use client"
import React, { useState,  useEffect } from 'react';
import styles from "./index.module.scss";
import { useBgColor} from '@/app/utils/context';

interface Props {
    children?: React.ReactNode;
    className?: string;
    main?: boolean;
}
const Index = ({ children, className, main = false }: Props) => {
    const propStyle = className ? className : styles['default'];
    console.log({propStyle});
    return (
        <>

            {main &&
                <main className={propStyle}>
                    {children}
                </main>
            }

            {
                !main &&
                <section className={propStyle}>
                    {children}
                </section>
            }
        </>
    );
};


export function MainContainer({ children, main = true }: Props) {

    const [currentBgColor, setCurrentBgColor ] = useState(styles['default']);
    
const { bgColor } = useBgColor();



    useEffect(()=>{
    console.log({bgColor});
        setCurrentBgColor(styles[bgColor])
    },[bgColor]);

    return (
        <Index main={main} className={currentBgColor}>
            {children}
        </Index>
    );
}


export function InnerContainer({ children, main = false, className }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function CardContainer({ children, main = false, className='card' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function KeymapContainer({ children, main = false, className='keymap' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function ParagraphContainer({ children, main = false, className='paragraph' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function RowContainer({ children, main = false, className='row-container' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
        );
}

export function ColContainer({ children, main = false, className='col-container' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
        );
}

export default Index;
