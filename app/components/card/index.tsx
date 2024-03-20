import React from "react";
import { CustomImage } from "@/app/components/";
import { ImageInterface } from "@/app/types/";


const Index = ({ className = "card", alt, src, children }: ImageInterface) => {

    return (
        <CustomImage links href="https:www.vaporingenieriaycalderas.mx" target="_blank" className={className} src={src} alt={alt} figcaption={true}>
            {children}
        </CustomImage>
    );
};



export default Index;

