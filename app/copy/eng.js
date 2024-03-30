import Logo from '@/public/logo.png'

const language = {
  header: {
    title: "Technical Skills"
    , portrait: "Carlos Amaro "
    , skills: ["Bash", "AWK", "Html", "Styled-Components", "Next-js", "Gatsby-js", "CSS", "SASS", "Javascript", "Typescript", "React-js", "Node-js", "Git", "Github", "storybook"]
  }
  , projects: {
    vic: {
      title: 'Steam Engineering and Boilers'
      , image: Logo
      , alt: 'projects carlos amaro'
      , body: "This time the client needed a website for his business, we create a website for him with a design that suited his convenience, his bussines was registered on google my business, we setup   his profesional email as well."
      , className: 'card'
      , link: {
        url: 'https://www.vaporingenieriaycalderas.mx/'
        , name: 'Take a look at the website'
        , target: '_blank'
      }
    }
  }
  , footer: {
    languages: ["english", "spanish", "portuguese"]
  }
}
export default language;
