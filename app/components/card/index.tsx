import React from "react";
import { CustomImage } from "@/app/components/";
import { ImageInterface } from "@/app/types/";


const Index = ({ className = "card", alt, src, children }: ImageInterface) => {

    return (
        <CustomImage className={className} src={src} alt={alt} figcaption={true}>
            {children}
        </CustomImage>
    );
};



export default Index;

