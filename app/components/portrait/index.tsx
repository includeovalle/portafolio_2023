import React from "react";
import { CustomImage} from "@/app/components";
import picture from "@/public/carlos.jpeg";
import { classNamesInterface } from "@/app/types/";



  interface IndexProps extends classNamesInterface {
  text: string;
}

const Index = ({text, className}:IndexProps) => {

  const length = text.length;
  const deg = 360 / length;


  return (
    <CustomImage className={className} figcaption={true} src={picture} alt="carlos raul amaro ovalle">
      <div className="overlay">
        <div className="spinning-text">
          <p>
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
          </p>
        </div>
      </div>
    </CustomImage>
  );
};

export default Index;

