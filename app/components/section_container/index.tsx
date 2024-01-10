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
        setCurrentBgColor(styles[bgColor])
    },[bgColor]);

    return (
        <Index main={main} className={currentBgColor}>
            {children}
        </Index>
    );
}


export function InnerContainer({ children, main = false, className="inner-container" }: Props) {
    return (
        <Index className={styles[className]} main={main}>
            {children}
        </Index>
    );
}

export function RowContainer({ children, main = false, className='row-container' }: Props) {
    return (
        <Index className={styles[className]} main={main}>
            {children}
        </Index>
        );
}

export default Index;
