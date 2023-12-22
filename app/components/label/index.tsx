import React from "react";
import styles from "./index.module.scss";
import { LabelInterface, childrenInterface, classNamesInterface } from "@/app/types/";



const Index = ({ className, type, placeholder, children, min, max, name, onChange, value, onClick, autoFocus }: LabelInterface) => {


    const classProps = className ? styles[className] : styles["row"]

    const text = children ? children : "enter text"

    return (
        <label onClick={onClick} className={classProps}>
            <span>{text}</span>
            <input name={name}
                autoFocus={autoFocus}
                type={type}
                defaultValue={value}
                placeholder={placeholder}
                min={min}
                max={max}
                onChange={onChange}
            />
        </label>
    );
};


export const ColLabel = ({ className, type, placeholder, value, children, name, onChange, autoFocus }: LabelInterface) => {


    const classProps = className ? styles[className] : styles["column"]

    const text = children ? children : "enter text"

    return (
        <label className={classProps}>
            <span>{text}</span>
            <input autoFocus={autoFocus} name={name} type={type} placeholder={placeholder} defaultValue={value} onChange={onChange} />
        </label>
    );
};
interface Props extends classNamesInterface, childrenInterface {
    onClick?: () => void
}

export const Label = ({ className, children, onClick }: Props) => {
    return (
        <p onClick={onClick} className={className ? styles[className] : "not-in-stylesheet"}>
            {children}
        </p>
    )
}

export default Index;

