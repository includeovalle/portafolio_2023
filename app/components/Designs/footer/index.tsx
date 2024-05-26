import React from "react";
import Link from "next/link";
import { Footer, CustomImage } from "../../";
import Input from "./FocusHandler";
import  {FooterInterface}  from "../../../types/dictionary";

import Github from "/public/github.svg";
import Story from "/public/storybook.svg";
import Linkedin from "/public/linked.svg";
import Pdf from "/public/pdf-icon.svg";

interface IndexProps {
  theme: string;
  content: FooterInterface;
}

const Index = ({ theme, content }: IndexProps) => {

  const { title, placeholder, button, about: { project: { title: PROJECTTITLE, links: PROJECTLINKS }, aboutme:{ title: ABOUTMETITILE, links: ABOUTMELINKS} } } = content;

  const ProjectLinks = [Github, Story]
const AboutMeLinks = [Linkedin, Pdf]


  return (
    <Footer className={theme}>
        <h3>{title}</h3>
      <div>
        <Input placeholder={placeholder} textButton={button} theme={theme} />
      </div>

      <section>
        <div>
          <h3>{PROJECTTITLE}</h3>
          <ul>
              {
              ProjectLinks.map((item, index)=> {
                const newLink = PROJECTLINKS[index]
                const newItem= {...item, ...newLink}
                const className=`icon__${theme}`
                return (
                <li key={index}>
                  <CustomImage src={newItem.src}  alt={newItem.alt} links target={newItem.target} href={newItem.href} figcaption  className={className} >
                        {newItem.text}
                  </CustomImage>
                    </li>
              )})
            }
          </ul>
        </div >

        <div>
          <h3>{ABOUTMETITILE}</h3>
          <ul>
              {
              AboutMeLinks.map((item, index)=> {
                const newLink = ABOUTMELINKS[index]
                const newItem= {...item, ...newLink}
                const className=`icon__${theme}`
                return (
                <li key={index}>
                  <CustomImage src={newItem.src}  alt={newItem.alt} links target={newItem.target} href={newItem.href} figcaption  className={className} >
                        {newItem.text}
                  </CustomImage>
                  </li>
              )})
            }
          </ul>
        </div >

</section>
      <Link href='https://www.soultech.studio' target="_blank">
        <p> Soultech studio... 🚀</p>
      </Link>
    </Footer>
  );
};

export default Index;
