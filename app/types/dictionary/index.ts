export default interface Props {
  lang: {
    titles: { projects: string; languages: string; title: string };
    header: { portrait: string; skills: string[] };
    projects: { vic: Project };
    networks: { copyEmail: string; alert: string };
    footer: { languages: string[] };
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
