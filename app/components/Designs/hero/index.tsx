// import React from "react";
// import HomeHero from '@/public/assets/hero.webp';
// import HomeServices from '@/public/assets/productos-hero.jpg';
// import ContactHero from '@/public/assets/contacto.jpg';
// import Link from 'next/link';
// import { CustomImage, Htag, Ptag } from '@/app/components/';
//
// const Index = {
//   index: ({ copy, styles }: any) => {
//     return (
//       <CustomImage src={copy.image} alt={copy.alt} className={'hero'} figcaption>
//         <Htag className={'services-banner'} type={1}>{copy.title}</Htag>
//         <section>
//           <Ptag className={'services-banner'}>{copy.body}</Ptag>
//         </section>
//         <Link href="#footer">{copy.primaryBtn}</Link>
//         <span ><a href="#footer"></a> </span>
//       </CustomImage>
//     );
//   },
//   home: () => {
//     const copy = {
//       image: HomeHero
//       , title: 'ingeniería aplicada a su industria'
//       , body: "Mantenimiento, instalación y servicio a equipos de combustión y recipientes sujetos a presión como calderas, compresores, autoclaves, marmitas, equipos de refrigeración y aire acondicionado, tuberías industriales, planos mecánicos, manejadoras de aire, así como trámites de la STPS."
//       , alt: "mantenimiento de tuberias industriales"
//       , primaryBtn: "solicitar cotización"
//     }
//     return Index.index({ copy });
//   }
//   , servicios: () => {
//     const copy = {
//       image: HomeHero
//       , title: 'servicios'
//       , body: " Nuestra empresa se enorgullece de ofrecer servicios industriales especializados, que abarcan desde el mantenimiento y la reparación de calderas industriales hasta la soldadura industrial de alta calidad. Nos dedicamos a garantizar que sus operaciones se desarrollen sin contratiempos, manteniendo sus equipos en condiciones óptimas y asegurando la integridad de sus instalaciones."
//       , primaryBtn: "solicitar cotización"
//       , alt: "reparacion de calderas, reparacion de equipos de combustion"
//     }
//     return Index.index({ copy });
//   }
//   , productos: () => {
//     const copy = {
//       image: HomeServices
//       , title: 'productos'
//       , body: "En Vapor Ingeniería y Calderas, nuestro compromiso es brindarte acceso a una amplia gama de productos excepcionales, todos ellos con la calidad más destacada en el mercado. Nuestro enfoque es proporcionarte las herramientas esenciales para llevar a cabo tus proyectos industriales de manera exitosa, asegurando que se adapten de manera precisa a las necesidades específicas de tu empresa."
//       , alt: "señaleticas industriales"
//       , primaryBtn: "solicitar cotización"
//     }
//     return Index.index({ copy });
//   }
//
//   , nosotros: () => {
//     const copy = {
//       image: HomeServices
//       , title: 'vapor ingeniería y calderas'
//       , body: "Estamos comprometidos en contribuir al progreso de su empresa desde una perspectiva externa, brindando servicios integrales de mantenimiento industrial con honestidad y excelencia."
//       , alt: "mantenmiento de calderas industriales cdmx"
//       , primaryBtn: "¡ACERCATE A LOS EXPERTOS!"
//     }
//     return Index.index({ copy });
//   }
//   , contacto: () => {
//    const copy =  {
//     image: ContactHero
//     , title: "contáctanos"
//     , body: "El equipo de Vapor Ingeniería y Calderas está preparado para proporcionarte la información que necesitas, responder a tus preguntas y ayudarte a desarrollar una solución adecuada para los requisitos de tus equipos industriales."
//     , alt: "calderas de vapor en cdmx, caldera industriales cdmx"
//     , primaryBtn: "NUESTRO EQUIPO RESOLVERÁ TUS DUDAS"
//   }
//     return Index.index({ copy });
//   }
// };
//
//
// export default Index;
