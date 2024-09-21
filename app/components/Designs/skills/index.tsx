import React from "react";
import { SkillsMap, RowContainer } from "@/app/components";

import HTML from "@/public/skills/html5.svg";
import CSS from "@/public/skills/css.svg";
import JS from "@/public/skills/js.svg";
import TS from "@/public/skills/types.svg";
import Handle from "@/public/skills/handlebars.svg";
import ReactLogo from "@/public/skills/react.svg";
import Gatsby from "@/public/skills/gatsbyjs.svg";
import Sass from "@/public/skills/light-sass.svg";
import Styled from "@/public/skills/styled.webp";
import Storyb from "@/public/skills/storybook.svg";
import Tailwind from "@/public/skills/tailwind.svg";

import NVM from "@/public/skills/nvm.svg";
import NPM from "@/public/skills/npm.svg";
import Linux from "@/public/skills/linux.svg";
import AWK from "@/public/skills/awk.svg";
import Bash from "@/public/skills/terminal.svg";
import Nginx from "@/public/skills/nginx.svg";
import Git from "@/public/skills/git.svg";
import Vim from "@/public/skills/vim.svg";
import Postman from "@/public/skills/postman.svg";



import Node from "@/public/skills/light-node.svg";
import Next from "@/public/skills/nextj.svg";
import Express from "@/public/skills/express.svg";
import JWT from "@/public/skills/jwt.svg";


import Auth0 from "@/public/skills/auth0.svg";
import Postgre from "@/public/skills/pgsql.svg";


const Skills = ({ theme, skills }: { theme: string; skills: string[] }) => {

  const frontendSkills = [{ name: "HTML", image: HTML }, { name: "CSS3", image: CSS }, { name: "JavaScript", image: JS }, { name: "Typescript", image: TS }, { name: "Handlebars.js", image: Handle }, { name: "React.js", image: ReactLogo }, { name: "Gatsby.js", image: Gatsby }, { name: "Sass", image: Sass }, { name: "Tailwind.css", image: Tailwind }, { name: "Styled-Components", image: Styled }, { name: "Storybook", image: Storyb }]

  const backendSkills = [{ name: "Node.js", image: Node }, { name: "Next.js", image: Next }, { name: "Express.js", image: Express }, { name: "J W T", image: JWT }]

  const learningSkills = [{ name: "Auth0", image: Auth0 }, { name: "PostgreSQL", image: Postgre }]

  const toolsSkills = [{ name: "Linux", image: Linux }, { name: "Git", image: Git }, { name: "Vim", image: Vim }, { name: "Npm", image: NPM }, { name: "Nvm", image: NVM }, { name: "Awk", image: AWK }, { name: "Bash", image: Bash }, { name: "Nginx", image: Nginx }, { name: "Postman", image: Postman }]

  const customClass = `skills-container__${theme}`;
  return (

    <RowContainer>
      <RowContainer className={customClass}>
        <h3>Frontend:</h3>
        <SkillsMap theme={theme} images={frontendSkills} />
      </RowContainer >

      <RowContainer className={customClass}>
        <h3>Backend:</h3>
        <SkillsMap theme={theme} images={backendSkills} />
      </RowContainer >

      <RowContainer className={customClass}>
        <h3>{skills[0]}</h3>
        <SkillsMap theme={theme} images={toolsSkills} />
      </RowContainer >


      <RowContainer className={customClass}>
        <h3>{skills[1]}</h3>
        <SkillsMap theme={theme} images={learningSkills} />
      </RowContainer >

    </RowContainer>
  );
};

export default Skills;
