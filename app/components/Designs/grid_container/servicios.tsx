// 'use client'
// import React, { useState } from "react";
// import { StaticImageData } from "next/image";
// import { Container } from "@/app/components";
// import { Carousel } from "@/app/components/"
//
// interface CardSection {
//   sectionTitle?: string;
//   content?: string[];
// }
//
// interface Card {
//   title: string;
//   images: StaticImageData[];
//   section: CardSection[];
// }
//
// interface Cards {
//   vermas: string;
//   card: Card[];
// }
//
// interface ServiceCardProps {
//   cards: Cards;
// }
//
//
// export default function Index({ cards }: ServiceCardProps) {
//   const { vermas, card } = cards;
//
//   // Create an array of states, one for each card
//   const [isOpenArray, setIsOpenArray] = useState(new Array(card.length).fill(false));
//
//
//   const toggleCard = (index: number) => {
//     const newIsOpenArray = [...isOpenArray];
//     newIsOpenArray[index] = !newIsOpenArray[index];
//     setIsOpenArray(newIsOpenArray);
//   };
//
//   return (
//     <Container className={"grid-container"}>
//       {card.map((item, index) => {
//         const { images, title } = item;
//
//         return (
//           <article key={index}>
//             <Carousel images={images} />
//
//             <section >
//               <label >
//                 {title}
//               </label>
//               <ul style={isOpenArray[index] ? { maxHeight: "max-content" } : {}}>
//                 {item.section.map((listItem, listIndex) => {
//                   const listSubmenu = listItem.content;
//                   return (
//                     <div key={listIndex}>
//                       <li>{listItem.sectionTitle}</li>
//                       <hr />
//                       {listSubmenu?.map((submenu, subindex) => (
//                         <span key={subindex}>{submenu}</span>
//                       ))}
//                     </div>
//                   );
//                 })}
//               </ul>
//             </section>
//             <hr />
//             <button onClick={() => toggleCard(index)}>
//               {isOpenArray[index] ? 'ver menos' : vermas}
//             </button>
//           </article>
//         )
//       })
//       }
//     </Container>
//   );
// }
