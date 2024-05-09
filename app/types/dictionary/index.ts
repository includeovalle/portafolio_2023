export default interface Props {
  lang: {
    titles: { projects: string; languages: string; title: string; aboutme: string; };
    header: { portrait: string; skills: string[] };
    projects: { vic: Project };
    aboutme: string;
    media: {
      whatsapp: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
      github: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
      linkedin: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
      email: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
      storybook: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
      resume: {
        alt: string;
        links: {
          href: string;
          target: string;
        }
      }
    }
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
