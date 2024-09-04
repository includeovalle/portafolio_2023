export default interface Props {
  lang: {
    titles: { projects: string; languages: string; title: string; aboutme: string; };
    header: { portrait: string; skills: string[] };
    projects: Project[];
    aboutme: string[];
    languages: Language[]
    networks: { copyEmail: string; alert: string };
    footer: FooterInterface;
  };
}

export interface Project {
  title: string;
  image: string;
  alt: string;
  body: string;
  className?: string;
  link: {
    href: string;
    text: string;
    target: string;
  };
}

interface Link {
  text: string;
  alt: string;
  href?: string;
  target?: string;
}

interface AboutSection {
  title: string;
  links: Link[];
}

export interface FooterInterface {
  title: string;
  placeholder: string;
  button: string;
  popup: {
    email: string;
    whatsapp: string;
    gmail: string;
  }
  about: {
    project: AboutSection;
    aboutme: AboutSection;
  };
}


export interface Language {
    href: string;
    title: string;
    ariaRole: string;
}
