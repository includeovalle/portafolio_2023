'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { ImageInterface, LinkInterface } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';

interface Props extends ImageInterface, LinkInterface {
    width?: number;
    height?: number;
}


const Index = ({ src, alt, links, href, target, width, height, figcaption, children, className }: Props) => {
    const { bgColor } = useBgColor();

    const propStyle = className ? styles[bgColor] : styles['default'];

    const [currentSrc, setCurrentSrc] = useState(src);

    const SIZES = "(max-width: 600px) 100vw, 600px"

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
                />
            )}
            {!links && !width && (
                <Image
                    src={currentSrc}
                    alt={alt}
                    sizes={SIZES}
                    fill
                    priority
                />
            )}
            {figcaption && !links && <figcaption>{children}</figcaption>}
        </figure>
    );
};

export default Index;
