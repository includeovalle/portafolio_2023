"use client"
import React from "react";
import { Card, Ptag } from "@/app/components/";
import { useBgColor } from '@/app/utils/context';
import es from '@/app/copy/esp';
import { RowContainer } from '@/app/components/'



const Index = () => {
  const { bgColor } = useBgColor();

  const { image, alt, title, body, className, link } = es["projects"].vic;
  const { text, href, target } = link;
  const currentTheme = `${className}__${bgColor}`;

  return (
    <RowContainer>
      <Card className={currentTheme} src={image} alt={alt} href={href} target={target} links={true} figcaption={true}>
        <h3>{title}</h3>
        <Ptag className={'body'}>{body}</Ptag>
        <Ptag >{text}</Ptag>
      </Card>
    </RowContainer>
  );
};

export default Index;
