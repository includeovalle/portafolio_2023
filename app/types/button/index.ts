import { childrenInterface, classNamesInterface } from '@/app/types'
import React, { ReactNode } from 'react';

export default interface Props extends childrenInterface, classNamesInterface {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onHover?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    autoFocus?: boolean;
}
