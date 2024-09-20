
import React from "react";
import { CustomImage } from "../";

interface IMAGES {
  name: string
  image: string
}


const Index = ({ images, theme }: { images: IMAGES[]; theme: string }) => {

  return (
    <>
      {
        images?.map((item: IMAGES) => (
          <CustomImage className={`skills__${theme}`} key={item.name} width={50} height={50} figcaption={true} src={item.image} alt={`skills_${item.name}`} >
            {item.name}
          </CustomImage >
        ))
      }
    </>
  );
};

export default Index;
