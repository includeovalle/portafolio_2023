// import React from "react";
// import { Card, Ptag } from "@/app/components/";
// import { StaticImageData } from "next/image";
//
// interface Item {
//     title: string;
//     body: string;
//     image: StaticImageData;
//     alt: string;
//     link: {
//         name: string;
//         url: string;
//     };
// }
//
// interface IndexProps {
//     item: Item;
// }
//
// const Index: React.FC<IndexProps> = ({ item }) => {
//     const { image, alt, title, body, link } = item;
//     const { url, name } = link;
//
//     return (
//         <Card className={'card'} src={image} alt={alt}>
//             <h3>{title}</h3>
//             <Ptag className={'body'}>{body}</Ptag>
//             <a href={url}>{name}</a>
//         </Card>
//     );
// };
//
// export default Index;
