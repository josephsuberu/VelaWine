import React from "react";
import { Pane } from "tweakpane";
import { useSmooothy } from "../../hooks/UseSmooothy";
import "./slidersection.css";
import { useRef, useLayoutEffect } from "react";

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
    text: "Which am i",
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
      console.log("current slide", currentSlide);
    },
  });

  const activeIndex = Math.floor(slides.length / 2);

  useLayoutEffect(() => {
    const container = document.querySelector("[data-arc-container]");

    console.log(container);
    if (!container) return;
    const slides = container.querySelectorAll(".slide-box");

    const spacing = 80;
    const arcStrength = 160;
    const scaleStrength = 0.12;

    slides.forEach((el, index) => {
      const position = index - activeIndex;
      const distance = position;

      const t = distance;

      const curve = Math.exp(-Math.abs(t) * 0.6);

      //arc illusion
      const x = Math.sin(t * 0.8) * arcStrength * curve;
      const y = t * spacing;

      const inner = el.querySelector(".card_i");

      inner.style.transform = `translate3d(${x}px, 0px, 0)`;
    });
  }, [slides]);

  return (
    <div data-arc-wrapper className="">
      <ul data-arc-container className="slider-container" ref={ref}>
        {slides.map((slide, i) => (
          <li key={i} id={`slide-${i}`} className="slide-box">
            <p className="card_i">{slide.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderSection;
