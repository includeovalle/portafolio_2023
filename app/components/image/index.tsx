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

    if (links) {
        return (
            <Link className={propStyle} href={href || ''} target={target || '_self'} >
                {width && (
                    <figure >
                        <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height ? height : width / 3}
                            priority
                        />
                        <figcaption>{children}</figcaption>
                    </figure>
                )}
                {!width && (
                    <figure>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            priority
                        />
                        {<figcaption>{children}</figcaption>}
                    </figure>
                )}
            </Link>
        )
    }

    return (
        <figure className={propStyle}>
            {width && (
                <>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height ? height : width / 3}
                        priority
                    />
                    {figcaption && <figcaption>{children}</figcaption>}
                </>
            )}
            {!width && (
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
    )
};

export default Index;
