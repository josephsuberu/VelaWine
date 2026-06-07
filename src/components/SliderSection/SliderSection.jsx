import React from "react";
import { Pane } from "tweakpane";
import { useSmooothy } from "../../hooks/UseSmooothy";
import "./slidersection.css";
import { useLayoutEffect, useRef } from "react";

/** component */
const slides = [
  {
    text: "Designer?",
  },
  {
    text: "Engineer?",
  },
  {
    text: "Creative Dev?",
  },
  {
    text: "Which am i?",
  },
  {
    text: "I just love to",
  },
  {
    text: "make digital interfaces",
  },
  {
    text: "that looks and feels good",
  },
];

const SliderSection = () => {
  const containerRef = useRef(null);
  const { ref, slider } = useSmooothy({
    snap: true,
    target: 0,
    variableWidth: true,
    vertical: true,
    snapStrength: 0.25,
    virtualScroll: {
      mouseMultiplier: 2.5,
      touchMultiplier: 1.8,
      useKeyboard: true,
    },
    onSlideChange: (currentSlide, slide) => {
      // console.log("current slide", currentSlide);
      // console.log("slide", slide);
      //  slider.items[previous].classList.remove("active")
      // slider.items[slide].classList.add("active")
    },
  });

  // fire after DOM mutations.
  // useLayoutEffect(() => {
  //   containerRef.current = document.querySelector("[data-arc-container]");
  //   const sliderBox = containerRef.current;

  //   const cx = sliderBox.offsetWidth / 2;
  //   const cy = sliderBox.offsetHeight / 2;
  //   const radius = 110;
  //   const spreadDeg = 100;
  //   const startAngle = 270 - spreadDeg / 2;

  //   slides.forEach((slide, i) => {
  //     const angleDeg = startAngle + (spreadDeg / (slides.length - 1)) * i;
  //     const angleRad = (angleDeg * Math.PI) / 180;

  //     const x = cx + radius * Math.cos(angleRad);
  //     const y = cy + radius * Math.sin(angleRad);
  //     const rotation = (angleDeg * 180) / Math.PI;

  //     sliderBox.style.transformOrigin = "center center";
  //     sliderBox.style.top = x + "px";
  //     sliderBox.style.left = y + "px";
  //   });
  // }, []);

  return (
    <ul data-arc-container className="slider-container" ref={ref}>
      {slides.map((slide, i) => (
        <li key={i} id={`slide-${i}`} className="slide-box">
          <div className="relative h-full w-full p-8 outline outline-gray-800">
            <div className="h-full w-full outline outline-gray-600" />
            <p className="absolute card_i left-2 top-2 z-10">{slide.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SliderSection;
