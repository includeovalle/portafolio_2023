'use client'
import { StaticImageData } from "next/image";
import { CSSProperties } from 'react';
import React, { useState } from "react";
import styles from "./index.module.scss";

  export default function Carousel({ images }: any) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const bgImage = images[currentSlide].src
    const imagesLength = images.length;

interface ImagesList { images: StaticImageData[]; }

    const slide: CSSProperties = {
      backgroundImage: `url( ${bgImage})`,
    }

    const controlArrowLeft = () => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        // If currentSlide is already at the first slide, loop back to the last slide.
        setCurrentSlide(imagesLength - 1);
      }
    };

    const controlArrowRight = () => {
      if (currentSlide < imagesLength - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        // If currentSlide is already at the last slide, loop back to the first slide.
        setCurrentSlide(0);
      }
    };

    return (
      <div className={ styles['container']}  onMouseEnter={() => controlArrowRight()} onMouseLeave={() => controlArrowLeft()}>
        <button onClick={() => controlArrowLeft()}></button>
        <div className={ styles['slide']} style={slide}></div>
        <button onClick={() => controlArrowRight()}></button>
        <section>
          {
          images.map((item: ImagesList, index: number) => (
            <span key={index} className={currentSlide === index ?  styles['active'] : "" }  onClick={() => setCurrentSlide(index)}></span>
          ))
          }
        </section>
      </div>
    )
  }
