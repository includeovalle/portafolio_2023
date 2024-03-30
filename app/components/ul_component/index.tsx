import React from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import styles from "./index.module.scss";
import { UlInterface } from "@/app/types/";

const Ul = ({ className = "default", exact = false, lis, otherLis, onClick, links = false, nav = false }: UlInterface) => {
  const pathname = usePathname();

  if (nav) {
    return (
      <nav className={styles[className]}>
        {
          lis?.map((li: React.ReactNode) => {
            const href = `/${li}`;
            const isActive = exact ? pathname === href : pathname.startsWith(href);
            return <Link href={href} key={href}>{li}</Link>
          })
        }
        {
          links &&
          otherLis?.map((li: React.ReactNode, index: number) => {
            const href = `/${li}`;
            const isActive = exact ? pathname === href : pathname.startsWith(href);
            return <Link href={href} key={index}><li className={isActive ? styles['active'] : undefined} onClick={onClick}>{li}</li></Link>
          })
        }
      </nav>
    )
  }

  return (
    <ul className={styles[className]}>
      {links &&
        lis?.map((li: React.ReactNode, index: number) => {
          const href = `/${li}`;
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return <Link href={href} key={index}><li className={isActive ? styles['active'] : undefined} onClick={onClick}>{li}</li></Link>
        })
      }
      {!links &&
        lis?.map((li: React.ReactNode, index: number) => {
          return <li key={index} onClick={onClick}>{li}</li>
        })
      }
      {links &&
        otherLis?.map((li: React.ReactNode, index: number) => {
          const href = `/${li}`;
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return <Link href={href} key={index}><li className={isActive ? styles['active'] : undefined} onClick={onClick}>{li}</li></Link>
        })
      }
      {!links &&
        otherLis?.map((li: React.ReactNode, index: number) => {
          return <li key={index} onClick={onClick}>{li}</li>
        })
      }
    </ul>
  )
};

export default Ul;
