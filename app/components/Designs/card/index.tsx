"use client"
import React from "react";
import { Card, Ptag } from "@/app/components/";
import { useBgColor } from '@/app/utils/context';
import { useLanguage } from '@/app/utils/language';
import { RowContainer } from '@/app/components/'



const Index = () => {
  const { bgColor } = useBgColor();
  const { CURRENTLANGUAGE } = useLanguage();

  const { image, alt, title, body, className, link } = CURRENTLANGUAGE["projects"].vic;
  const { text, href, target } = link;
  const currentTheme = `${className}__${bgColor}`;

  return (
    <RowContainer>
      <Card className={currentTheme} src={image} alt={alt} text={text} href={href} target={target} links={true} figcaption={true}>
        <h3>{title}</h3>
        <Ptag className={'body'}>{body}</Ptag>
        <a >{text}</a>
      </Card>
    </RowContainer>
  );
};

export default Index;
