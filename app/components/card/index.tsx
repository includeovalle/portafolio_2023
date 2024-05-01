import React from "react";
import Link from 'next/link';
import { CustomImage } from "../";
import { ImageInterface } from "@/app/types/";

interface IndexProps extends ImageInterface {
    links?: boolean;
    href: string;
    target?: string;
}

const Index = ({ className = "card", alt, src, children, links, href, target, figcaption }: IndexProps) => {
    const currentLink = "/";

    return (
        <Link href={links ? href : currentLink} target={target}>
        <CustomImage className={className} src={src} alt={alt} figcaption={figcaption} >
            {children}
        </CustomImage>
        </Link>
    );
};



export default Index;

