import React from "react";
import { SocialMedia, CustomImage } from '../../';
import { StaticImageData } from 'next/image';
import Whatsapp from "/public/whatsapp.svg";
import Github from "/public/github.svg";
import Linkedin from "/public/linked.svg";
import Email from "/public/email.svg";
import Story from "/public/storybook.svg";
import Pdf from "/public/pdf-icon.svg";

//TODO: add to the dictionary
const Index = ({mediaInfo}:any) => {
  const text = "Links";

type ImageItem = {
  [key: string]: {
    image: StaticImageData;
  };
};
  const IMAGES: ImageItem[] =  [{whatsapp:{ image: Whatsapp }}, { github:{ image: Github } }, {linkedin:{ image: Linkedin }}, {email:{ image: Email }}, {story:{ image: Story }}, {resume:{ image: Pdf }}]

  return (
    <>

      <SocialMedia buttonText={text}>
        {
          IMAGES.map((item, index) => {
            const key = Object.keys(IMAGES[index]).toString()
            const DICTIONARY = item[key]
            const IMAGE= mediaInfo[key]
            const newItem = {...DICTIONARY, ...IMAGE}
            return (
              <CustomImage key={index} src={newItem.image.src} className={"icon"} alt={newItem.alt} links={true} href={newItem.links.href} target={newItem.links.target} />
          )
          })
        }
      </SocialMedia>
    </>
  );
};

export default Index;

