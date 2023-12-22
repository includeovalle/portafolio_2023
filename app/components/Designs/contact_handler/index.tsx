// "use client";
// import React, { useState, useEffect } from "react";
// import { ColContainer, RowContainer, CustomImage, ColLabel } from '@/app/components/';
// import email from "@/public/email.svg";
// import whatsapp from "@/public/whatsapp.svg";
//
// interface IContactHandler {
//   params: string;
// }
// const ContactHandler = ({ params }: IContactHandler) => {
//   const [message, setMessage] = useState('');
//   const [encodedMessage, setEncodedMessage] = useState('');
//
//   useEffect(() => {
//     //set message to sent 
//     const newMessage = `${message}\n✍️ Plan: ${params}✅`
//     const encodedMessage = encodeURIComponent(newMessage)
//     setEncodedMessage(encodedMessage)
//   }, [message, params]);
//
//   const currentWindowWidth = window.innerWidth;
//
//   //change direction depending on the screen size
//   const whatsappHref = currentWindowWidth > 768
//     ? `https://web.whatsapp.com/send?phone=4441934444&text=${encodedMessage}`
//     : `https://api.whatsapp.com/send?phone=4441934444&text=${encodedMessage}`;
//
//   const placeholder = "¿cómo podemos apoyarte?";
//   const saludo = "¿Deseas más información?";
//   const altCorreo =  "soultech correo";
//   const altWhatsapp =  "soultec whatsapp";
//   const correo = "ovalle.carlosr@gmail.com";
//   //TODO pass all correoHref to template strings
//   const subject = "Estoy interesado en más información";
//   const encodedSubject = encodeURIComponent(subject);
//   const correoHref = `mailto:${correo}?subject=${encodedSubject}body=${encodedMessage}`
//
//
//   return (
//     <>
//       <ColContainer className={"center"}>
//         <ColLabel className={"contacto"} type="text" name="message" placeholder={placeholder} onChange={(e) => setMessage(e.target.value)}>
//           {saludo}
//         </ColLabel>
//         <RowContainer className={"two-buttons"} >
//           <CustomImage className={"icon"} src={email} alt="contacto" figcaption links href={correoHref}>
//             enviar un correo
//           </CustomImage>
//           <CustomImage className={"icon"} src={whatsapp} alt="contacto" figcaption links href={whatsappHref} target={"_blanc"}>
//             enviar un whatsapp
//           </CustomImage>
//         </RowContainer>
//       </ColContainer>
//     </>
//   );
// };
//
// export default ContactHandler;
//
