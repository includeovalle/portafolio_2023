import React from "react";
import styles from "./index.module.scss";
import { ParagraphInterface } from "@/app/types/";

const Index = ({ className, children }: ParagraphInterface) => {

    const classProps = className ? styles[className] : styles["default"]

    return (
        <p className={classProps}>
            {children}
        </p>
    );
};

export default Index;

