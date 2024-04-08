"use client"
import React from 'react';
import styles from "./index.module.scss";
import { useBgColor } from '@/app/utils/context';
import { ButtonInterface } from '@/app/types';

const UseContext = () => {
    const { bgColor } = useBgColor();
    return bgColor;
}

const Index = ({ className, type, children, onClick, autoFocus, onHover }: ButtonInterface) => {

    const propStyle = className ? styles[className] : styles['default'];

    return (
        <button className={propStyle} type={type} onClick={onClick} autoFocus={autoFocus} onMouseMove={onHover} >
            {children}
        </button>
    );
};

const Spans = () => {
    return (
        <>
            <span></span>
            <span></span>
        </>
    )
}

interface CloseButtonInterface extends ButtonInterface {
    closeBtn?: JSX.Element
}

export const closeButton = ({ onClick, closeBtn, autoFocus }: CloseButtonInterface) => {

    const bgColor = UseContext();
     const closeBtnDefault = closeBtn ? closeBtn : <Spans />;

    const CurrentTheme = `close-hamburger__${bgColor}`

    return (
        <Index type={'button'} className={CurrentTheme} onClick={onClick} autoFocus={autoFocus}>
            {closeBtnDefault}
        </Index>
    )
};

export const onHoverButton = ({ onClick, onHover, className, children }: ButtonInterface) => {


    return (
        <Index type='button' className={className} onClick={onClick} onHover={onHover} >
             {children}
        </Index>
    )
}

export default Index;
