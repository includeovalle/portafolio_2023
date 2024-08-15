import React from "react";
import { CustomImage, Ptag } from '../../';
import LOGO from '/public/logo.png';
import GAME from '/public/juego.png';
import BODA from '/public/boda.png';
import  { Project} from "@/app/types/dictionary"

import { RowContainer } from '../../';


const PROJECTS = [LOGO,  BODA, GAME];
interface Props {
  theme: string;
  cards: Project[]; // Make this optional to allow a default value
}

const Index = ({ theme, cards = [] }: Props) => { // Provide a default empty array
  const bgColor = theme;
  const currentTheme = `card__${bgColor}`;

  return (
    <RowContainer>
      {cards.length > 0 ? (
        cards.map((card, index) => {
          const { alt, title, body, link, image } = card;
          const { text, href, target } = link;

          return (
            <CustomImage
              key={index}
              className={currentTheme}
              src={PROJECTS[index]}
              alt={alt}
              href={href}
              target={target}
              links={true}
              figcaption={true}
            >
              <h3>{title}</h3>
              <Ptag className={'body'}>{body}</Ptag>
              <Ptag>{text}</Ptag>
            </CustomImage>
          );
        })
      ) : (
        <Ptag>No cards available</Ptag> // Fallback message if no cards are provided
      )}
    </RowContainer>
  );
};

export default Index;
