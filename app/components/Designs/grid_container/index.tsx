// import React from "react";
// import Image from 'next/image';
// import { StaticImageData } from "next/image";
// import Link from 'next/link';
// import { Container } from "@/app/components";
//
// interface Card {
//   title: string;
//   image: StaticImageData;
//   href: string;
// }
//
// interface Cards {
//   cards: {
//     bottom: string;
//     dynamic: Card[];
//   };
// }
//
//
// const Index = ({ cards }: Cards, className: string = "grid-container") => {
//
//   const { bottom, dynamic } = cards
//
//   return (
//     <Container className={className}>
//       {
//         dynamic.map((item: Card) => {
//           return (
//             <Link key={item.href} href={item.href}>
//               <Image src={item.image} alt="come on" />
//               <label>
//                 {item.title}
//                 <span>{bottom}</span>
//               </label>
//             </Link>
//           )
//         }
//         )}</Container>
//   );
// };
//
// export default Index;
//
