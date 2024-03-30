import Logo from '@/public/logo.png'

const language = {
  header: {
    title: "Hablidades Técnicas"
    , portrait: "Carlos Raul Amaro Ovalle "
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
      url: 'https://www.vaporingenieriaycalderas.mx/'
      , name: 'Revisa el proyecto'
      , target: '_blank'
    }
    }
  }
  , footer: {
    languages: ["español", "inglés", "portugués"]
  }
}
export default language;
