import React from "react";
import { CustomImage } from "@/app/components/";
import { ImageInterface, LinkInterface  } from "@/app/types/";

interface IndexProps extends ImageInterface, LinkInterface{
}

const Index = ({ className = "card", alt, src, children, links, href, text, target, figcaption }: IndexProps) => {

    return (
        <CustomImage className={className} src={src} alt={alt} figcaption={true} links={links} href={href} target={target} text={text} >
            {children}
        </CustomImage>
    );
};



export default Index;

