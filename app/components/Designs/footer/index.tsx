// 'use client'
// import React, { useState, useEffect, useRef } from "react";
// import whatsapp from '@/public/assets/iconos/whatsapp.svg';
// import correo from '@/public/assets/iconos/mail.svg';
// import telefono from '@/public/assets/iconos/cell.svg';
// import Linkein from '@/public/assets/linkedin.png';
// import Facebook from '@/public/assets/facebook.png';
// import { Form, Footer, Htag, CustomImage } from "@/app/components/";
// const Index = () => {
//
//   const formRef = useRef<HTMLFormElement>(null);
//   const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
//   const [userMessag, setUserMessag] = useState('');
//   const [encodedMessage, setEncodedMessage] = useState('');
//
//
//
//
//
//   //change direction depending on the screen size
//   const whatsappHref = currentWindowWidth > 768
//     ? `https://web.whatsapp.com/send?phone=5580031240&text=${encodedMessage}`
//     : `https://api.whatsapp.com/send?phone=5580031240&text=${encodedMessage}`;
//
//
//   useEffect(() => {
//     const newMessage = `${userMessag}\n✍️ `
//     const encodedMessag = encodeURIComponent(newMessage)
//     setEncodedMessage(encodedMessag)
//   }, [userMessag]);
//
//   useEffect(() => {
//     setCurrentWindowWidth(window.innerWidth);
//     // You can also listen for window resize events to update the width dynamically.
//     const handleResize = () => {
//       setCurrentWindowWidth(window.innerWidth);
//     };
//
//     window.addEventListener('resize', handleResize);
//
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//
//   async function updateTaskHandler(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (formRef.current) {
//       const formValue = formRef.current.elements.namedItem("mensaje") as HTMLInputElement;
//       const inputValue = formValue.value.trim();
//       const emailAddress = 'contacto@vaporingenieriaycalderas.mx';
//       window.location.href = `mailto:${emailAddress}?body=${inputValue}`;
//     }
//   }
//
//
//   const socialMedia = [
//     {
//       src: telefono
//       , alt: " contacta nuestros servicio de instalacion de equipos de vapor"
//       , href: "tel:5583744044"
//       , children: <p>55 8374 40 44</p>
//       , image: telefono
//     }
//     , {
//       src: whatsapp
//       , alt: "mensaje de whatsapp"
//       , href: whatsappHref
//       , children: <p>55 8003 12 40</p>
//       , image: whatsapp
//     }
//     , {
//       src: correo
//       , alt: "contacto calderas industriales"
//       , href: `mailto:contacto@vaporingenieriaycalderas.mx?subject=Vi%20su%20pagina%20web&body=${encodedMessage}`
//       , children: <p>contacto@vaporingenieriaycalderas.mx</p>
//       , image: correo
//     }
//     , {
//       src: Linkein
//       , alt: "contacto calderas industriales"
//       , href: `https://www.linkedin.com/company/vapor-ingenieria-y-calderas/`
//       , children: <p>LinkedIn</p>
//       , image: Linkein
//     }
//     , {
//       src: Facebook
//       , alt: "contacto calderas industriales"
//       , href: `https://www.facebook.com/profile.php?id=61552139352433&mibextid=ZbWKwL`
//       , children: <p>Facebook</p>
//       , image: Facebook
//     }
//   ];
//
//   return (
//     <Footer >
//       <Form ref={formRef} buttonText="Enviar" onSubmit={(e) => updateTaskHandler(e)}>
//         <input name="nombre" type="text" placeholder="Nombre Completo" />
//         <input name="empresa" type="text" placeholder="Empresa" />
//         <input name="email" type="email" required placeholder="Correo corporativo" />
//         <textarea name="mensaje" required placeholder="Mensaje" onChange={(e) => setUserMessag(e.target.value)} />
//       </Form>
//
//       <section>
//         <Htag type={3}> CONTÁCTANOS</Htag>
//         <p>INGENIERÍA APLICADA SU INDUSTRIA</p>
//         <p>Av. Revolución 18 Col. Tepalcates <br />
//           Del Iztapalapa, CP.09210 <br />Ciudad de México, CDMX.
//         </p>
//
//         {
//           socialMedia.map((item, index) => (
//             <CustomImage key={index} figcaption links className={"icon"} src={item.src} alt={item.alt} href={item.href} >
//               {item.children}
//             </CustomImage>
//           ))
//         }
//
//       </section>
//     </Footer>
//   );
// };
//
// export default Index;
