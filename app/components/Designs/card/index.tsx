"use client"
import React from "react";
import { Card, Ptag } from "@/app/components/";
import { StaticImageData } from "next/image";
import { useBgColor } from '@/app/utils/context';

interface Item {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  className?: string;
  link?: {
    name?: string;
    url?: string;
    target?: string;
  };
}

interface IndexProps {
    item: Item;
}

const Index: React.FC<IndexProps> = ({ item }) => {
  const { bgColor } = useBgColor();

const { image, alt, title, body, link, className } = item;

  const { url = "", name = "", target = "" } = link ?? {};

  const currentTheme = `${className}__${bgColor}`;

    return (
        <Card className={currentTheme} src={image} alt={alt}>
            <h3>{title}</h3>
            <Ptag className={'body'}>{body}</Ptag>
            <a href={url} target={target}>{name}</a>
        </Card>
    );
};

export default Index;
