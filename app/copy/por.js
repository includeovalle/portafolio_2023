import Logo from '@/public/logo.png'

const language = {
  titles: {
    projects: "Projetos"
    , languages: "Línguas"
    , title: "Habilidades Técnicas"
  }
  , header: {
     portrait: "Raul Amaro "
    , skills: ["Bash", "AWK", "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS", "SASS", "Javascript", "Typescript", "React-js", "Node-js", "Git", "Github", "storybook"]
  }
  , projects: {
    vic: {
      title: 'Vapor Ingenieria y Calderas'
      , image: Logo
      , alt: 'projetos carlos raul amaro ovalle'
      , body: "Nesta vez, o cliente precisava de um site para o seu negócio, criamos um site para ele com um design que se adequava à sua conveniência, seu negócio foi registrado no Google Negócio, configuramos seu e-mail profissional também."
      , className: 'card'
      , link: {
        href: 'https://www.vaporingenieriaycalderas.mx/'
        , text: 'Olhe o site'
        , target: '_blank'
      }
    }
  }
  , networks: {
    copyEmail: "Copiar email"
    , alert: "E-mail copiado para a área de transferência"
  }
  , footer: {
    languages: ["português", "espanhol", "inglês"]
  }
}
export default language;

