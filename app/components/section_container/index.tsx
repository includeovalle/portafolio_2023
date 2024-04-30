import React from 'react';
import styles from "./index.module.scss";

interface Props {
    children?: React.ReactNode;
    className?: string;
    main?: boolean;
    theme?: string;
}
export default function Index({ children, className, main = false }: Props) {
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


export function MainContainer({ children, main = true, theme}: Props) {


    const  currentBgColor = theme ? styles[theme] : styles['default'];


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
