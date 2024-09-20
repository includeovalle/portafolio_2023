import { Header, Card, SubtitleTag, Skills, Footer, AboutMe, TitleTag, Background } from '@/app/components/Designs';
import { MainContainer, InnerContainer, Ul, Portrait } from '@/app/components';
import { Metadata } from 'next'
import { getDictionary } from "./dictionaries"
import { type Locale } from "../../i18n-config";
export const metadata: Metadata = {
  title: 'Bienvenido a mi página web'
  , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
}

interface Props {
  params: { lang: Locale }
  searchParams: URLSearchParams
}

export default async function Home({ searchParams, params }: Props) {

  const language = params.lang;

  const lang = await getDictionary(language)

  const bgColor = (searchParams as unknown as { theme: "primary" | "tertiary" | "secondary" }).theme || "primary";

  const MAINTITLE = lang["titles"].title;
  const PROJECTSTITLE = lang["titles"].projects;
  const ABOUTMETITLE = lang["titles"].aboutme;
  const CONTACTOTITLE = lang["titles"].contact;
  const DISPLAY = lang["networks"].copyEmail;
  const ALERT = lang["networks"].alert;
  const LANGUAGES = lang["languages"];
  const PORTRAIT = lang["header"].portrait;
  const SKILLS = lang["header"].skills;
  const CARD = lang["projects"];
  const ABOUTME = lang["aboutme"];
  const EMAIL = "carlosovalle@soultech.studio"
  const FOOTER = lang["footer"];

  return (
    <>
      <MainContainer theme={bgColor}>
        <Background theme={bgColor}></Background>
        <Header theme={bgColor}
          display={DISPLAY} alert={ALERT} copyThis={EMAIL}
          languages={LANGUAGES} currentLang={language}
        />
        <InnerContainer>
          <br />
          <Portrait className={bgColor} text={PORTRAIT} />
          <TitleTag theme={bgColor} text={ABOUTMETITLE} />
          <AboutMe theme={bgColor} text={ABOUTME} />
          <SubtitleTag theme={bgColor} text={MAINTITLE} />
          <Skills theme={bgColor} skills={SKILLS}/>
          <SubtitleTag theme={bgColor} text={PROJECTSTITLE} />
          <Card theme={bgColor} cards={CARD} />
          <SubtitleTag theme={bgColor} text={CONTACTOTITLE} />
        </InnerContainer >
        <Footer theme={bgColor} content={FOOTER} />
      </MainContainer>
    </>
  )
}
