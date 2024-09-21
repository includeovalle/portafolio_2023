import React from "react";
import { CustomImage} from "../";
import picture from "@/public/carlos.webp";
import { classNamesInterface } from "@/app/types/";



  interface IndexProps extends classNamesInterface {
  text: string;
}

const Index = ({text, className}:IndexProps) => {

  const length = text.length;
  const deg = 360 / length;


  return (
    <CustomImage className={className} width={220} height={220}  figcaption={true} src={picture} alt="carlos raul amaro ovalle">
        <div className="spinning-text">
            { text && text.split("").map((letra, i) => (
              <span
                key={i}
                style={{
                  transform: `rotate(${deg * i}deg)`,
                }}
              >
                {letra}
              </span>
            ))}
        </div>
    </CustomImage>
  );
};

export default Index;

