import React from 'react';
import styles from "./index.module.scss";
import { H_Interface } from "@/app/types/";

//asign a button type default is button

const Index = ({ className="default", type, children }: H_Interface) => {
    return (
        <>
            {type === 1 &&
                <h1 className={styles[className]}>{children}</h1>
            }
            {type === 2 &&
                <h2 className={styles[className]}>{children}</h2>
            }
            {type === 3 &&
                <h3 className={styles[className]}>{children}</h3>
            }
            {type === 4 &&
                <h4 className={styles[className]}>{children}</h4>
            }
        </>
    );
};

export default Index;

