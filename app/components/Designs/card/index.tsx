import React from "react";
import { Card, Ptag } from '../../';
import IMAGE from '/public/logo.png';
import { RowContainer } from '../../'

interface Props  {
  theme: string;
  card: {
    alt: string;
    title: string;
    body: string;
    link: {
      text: string;
      href: string;
      target: string;
    }
  }
}

const Index = ({theme,card}: Props) => {

  const { alt, title, body, link } = card;
  const { text, href, target } = link;
  const bgColor = theme;
  const currentTheme = `card__${bgColor}`;

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
