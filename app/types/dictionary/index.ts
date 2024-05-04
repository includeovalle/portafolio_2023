export default interface Props {
  lang: {
    titles: { projects: string; languages: string; title: string; aboutme: string; };
    header: { portrait: string; skills: string[] };
    projects: { vic: Project };
    aboutme: string;
    networks: { copyEmail: string; alert: string };
    footer: { languages: Language[] };
  };
}

interface Project {
  title: string;
  image: string;
  alt: string;
  body: string;
  className: string;
  link: {
    href: string;
    text: string;
    target: string;
  };
}

export interface Language {
  title: string;
  text: string;
  lang: string;
}
