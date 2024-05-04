import React from "react";
import styles from "./index.module.scss";
import { ParagraphInterface } from "@/app/types/";

const Index = ({ className, children, title }: ParagraphInterface) => {

    const classProps = className ? styles[className] : styles["default"]

    return (
        <p title={title} className={classProps}>
            {children}
        </p>
    );
};

export default Index;

