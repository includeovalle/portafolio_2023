import React from "react";
import { Card, Ptag } from "@/app/components/";
import IMAGE from '@/public/logo.png';
import { RowContainer } from '@/app/components/'
import { DictionaryInterface } from "@/app/types/";

interface Props extends DictionaryInterface {
  theme: string;
}

const Index = ({theme, lang}: Props) => {


  const { alt, title, body, className, link } = lang["projects"].vic;
  const { text, href, target } = link;
  const bgColor = theme;
  const currentTheme = `${className}__${bgColor}`;

  return (
    <RowContainer>
      <Card className={currentTheme} src={IMAGE} alt={alt} href={href} target={target} links={true} figcaption={true}>
        <h3>{title}</h3>
        <Ptag className={'body'}>{body}</Ptag>
        <Ptag >{text}</Ptag>
      </Card>
    </RowContainer>
  );
};

export default Index;
