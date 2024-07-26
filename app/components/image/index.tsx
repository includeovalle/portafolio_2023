import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { ImageInterface, LinkInterface } from "@/app/types/";

interface Props extends ImageInterface, LinkInterface {
    width?: number;
    height?: number;
}


const Index = ({ src, alt, links, href, target, width, height, figcaption, children, className }: Props) => {
    const propStyle = className ? styles[className] : styles['default'];


    return (
        <figure className={propStyle}>
            {links && width && (
                <Link href={href || ''}>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height? height : width/3}
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
                        src={src}
                        alt={alt}
                        fill
                        priority
                    />
            {figcaption && <figcaption>{children}</figcaption>}
                </Link>
            )}
            {!links && width && (
                <>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height? height : width/3}
                    priority
                />
            {figcaption && <figcaption>{children}</figcaption>}
                </>
            )}
            {!links && !width && (
                <>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100%"
                    priority
                />
            {figcaption && <figcaption>{children}</figcaption>}
                </>
            )}
        </figure>
    );
};

export default Index;
