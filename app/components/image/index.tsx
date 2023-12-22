'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { ImageInterface, SwapStringInterface,  LinkInterface } from "@/app/types/";

interface Props extends ImageInterface, SwapStringInterface,  LinkInterface {
    width?: number;
    height?: number;
}


const Index = ({ src, alt, links, href, target, width, height, swap, swapString, figcaption, children, className }: Props) => {
    const propStyle = className ? styles[className] : styles['default'];

    const [currentSrc, setCurrentSrc] = useState(src);

    const SIZES = "(max-width: 600px) 100vw, 600px"

    const handleSwap = () => {
        setCurrentSrc(swap ? swapString || src : src);
    };

    return (
        <figure className={propStyle}>
            {links && width && (
                <Link href={href || ''}>
                    <Image
                        src={currentSrc}
                        alt={alt}
                        width={width}
                        height={height? height : width/3}
                        sizes={SIZES}
                        priority
                        onClick={handleSwap}
                    />
                  {figcaption && <figcaption>{children}</figcaption>}
                </Link>
            )}
            {links && !width && (
                <Link href={href || ''}
                target={target || '_self'}
                >
                    <Image
                        src={currentSrc}
                        alt={alt}
                        sizes={SIZES}
                        fill
                        priority
                        onClick={handleSwap}
                    />
                  {figcaption && <figcaption>{children}</figcaption>}
                </Link>
            )}
            {!links && width && (
                <Image
                    src={currentSrc}
                    alt={alt}
                    width={width}
                    height={height? height : width/3}
                    sizes={SIZES}
                    priority
                    onClick={handleSwap}
                />
            )}
            {!links && !width && (
                <Image
                    src={currentSrc}
                    alt={alt}
                    sizes={SIZES}
                    fill
                    priority
                    onClick={handleSwap}
                />
            )}
            {figcaption && !links && <figcaption>{children}</figcaption>}
        </figure>
    );
};

export default Index;
