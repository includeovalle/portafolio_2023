import React from 'react';
import styles from "./index.module.scss";
import { HeaderInterface } from "@/app/types/";


const Index = ({ children, className="default" }:HeaderInterface) => {
    return (
        <footer className={styles[className]} >
            {children}
        </footer>
    );
};

export default Index;
