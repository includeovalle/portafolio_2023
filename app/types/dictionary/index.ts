export default interface Props {
  lang: {
    titles: { projects: string; languages: string; title: string; aboutme: string; };
    header: { portrait: string; skills: string[] };
    projects: { vic: Project };
    aboutme: string;
    languages: Language[]
    networks: { copyEmail: string; alert: string };
    footer: FooterInterface;
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

interface Link {
  text: string;
  alt: string;
  href: string;
  target?: string; // Optional target attribute
}

interface ProjectLink extends Link {
  title: string;
}


interface AboutMe extends Link {
  title: string;
}

interface Project {
  title: string;
  links: ProjectLink[];
}

interface Footer {
  title: string;
  placeholder: string;
  button: string;
  about: {
    project: Project;
    aboutme: AboutMe;
  };
}
export interface Language {
    href: string;
    title: string;
    ariaRole: string;
}
