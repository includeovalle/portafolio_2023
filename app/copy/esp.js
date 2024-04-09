import Logo from '@/public/logo.png'

const language = {
  titles: {
    projects: "Proyectos"
    , languages: "Idiomas"
    , title: "Hablidades Técnicas"
    , aboutme: "Acerca de mí"
  }
  , header: {
     portrait: "Carlos Raul Amaro Ovalle "
    , skills: ["Bash", "AWK", "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS", "SASS", "Javascript", "Typescript", "React-js", "Node-js", "Git", "Github", "storybook"]
  }
  , projects: {
    vic: {
     title: 'Vapor Ingenieria y Calderas'
    , image: Logo
    , alt: 'proyectos carlos raul amaro ovalle'
    , body: "En esta ocasión el cliente necesitaba una página web para su negocio, se le creo un sitio web con un diseño que se ajusto a su conveniencia, se le dio de alta en google my business, a su vez configuramos el correo electrónico con el dominio de su sitio web"
    , className: 'card'
    , link: {
      href: 'https://www.vaporingenieriaycalderas.mx/'
      , text: 'Revisa el proyecto'
      , target: '_blank'
    }
    }
  }
  , aboutme: "Soy un desarrollador de software enfocado principalmente en la web. He trabajado remoto los últimos 3 años. Me encanta aprender e implementar lo aprendido. Desde que comencé en el mundo del desarrollo de software, mis ratos libres se modificaron; sin darme cuenta: pase de leer novelas clásicas a leer documentaciones técnicas, pase de revisar en redes sociales a resolver dudas en comunidades de desarrollo. Poseo iniciativa propia y disfruto cuando encuentro una solución a un problema."
  , networks: {
    copyEmail: "Copiar email"
    , alert: "Correo copiado al portapapeles"
  }
  , footer: {
    languages: ["español", "inglés", "portugués"]
  }
}
export default language;
