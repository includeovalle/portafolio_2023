// import React from "react";
// import { InnerContainer, CustomImage, Htag, Ptag } from "@/app/components/"
// import Link from "next/link";
// import Servicios from "@/public/assets/iconos/servicios_banner.svg";
// import Productos from "@/public/assets/productos.svg";
//
// interface BannerNosotrosProps {
//   right?: boolean;
// }
// const BannerStyle = {
//   width: "100%"
//   , paddingBottom: "1rem"
// }
//
// const Banner = () => {
//
//   return (
//     <InnerContainer>
//       <Link href="/servicios" style={BannerStyle}>
//         <CustomImage className={'banner'} src={Servicios} alt="servicios que ofrece Vapor ingenieria y calderas" figcaption >
//           <Htag type={3}> Servicios</Htag>
//           <Ptag>Contamos con servicios de: <br />
//             <b>INSTALACIÓN REPARACIÓN Y MANTENIMIENTO</b><br />
//             para calderas, tuberias, cuartos de maquinas y mucho más.
//           </Ptag>
//           <Ptag >Ver más &gt;</Ptag>
//         </CustomImage>
//       </Link>
//     </InnerContainer>
//   );
// };
//
//
// export function BannerNosotros({ right }: BannerNosotrosProps) {
//   if (right) {
//     return (
//       <CustomImage className={'nosotros-banner'} src={Productos} alt="servicios que ofrece Vapor ingenieria y calderas" figcaption >
//         <Link href="/productos">
//           <h3>Productos</h3>
//           <p>Te brindamos acceso a una amplia gama de productos excepcionales, todos ellos con la calidad más destacada en el mercado</p>
//           <br />
//           <p >Ver más &gt;</p>
//         </Link>
//       </CustomImage>
//     )
//   } else {
//     return (
//       <CustomImage className={'nosotros-banner'} src={Servicios} alt="servicios que ofrece Vapor ingenieria y calderas" figcaption >
//         <Link href="/servicios">
//           <h3>Servicios</h3>
//           <p>Contamos con servicios de: <br />
//             <b>INSTALACIÓN REPARACIÓN Y MANTENIMIENTO</b> para calderas, cuartos de maquinas y mucho más.
//           </p>
//           <br />
//           <p >Ver más &gt;</p>
//         </Link>
//       </CustomImage>
//     )
//   }
// }
// export default Banner;
//
