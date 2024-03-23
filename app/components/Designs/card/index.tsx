"use client"
import React from "react";
import { Card, Ptag } from "@/app/components/";
import { ImageInterface, LinkInterface  } from "@/app/types/";
import { useBgColor } from '@/app/utils/context';

interface Item extends ImageInterface, LinkInterface{
  title: string;
  body: string;
  className?: string;
}

interface IndexProps {
  item: Item;
}

const Index: React.FC<IndexProps> = ({ item }) => {
  const { bgColor } = useBgColor();

  const { src, alt, title, body, text, href, target, className } = item;

  const currentTheme = `${className}__${bgColor}`;

  return (
    <Card className={currentTheme} src={src} alt={alt} text={text} href={href} target={target} links={true} figcaption={true}>
      <h3>{title}</h3>
      <Ptag className={'body'}>{body}</Ptag>
      <a >{text}</a>
    </Card>
  );
};

export default Index;
