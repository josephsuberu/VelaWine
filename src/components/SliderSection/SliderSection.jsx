import React from "react";
import { Pane } from "tweakpane";
import { useSmooothy } from "../../hooks/UseSmooothy";
import "./slidersection.css";

/** component */
const slides = Array.from({ length: 5 }, (_, i) => i);

export default function SliderSection() {
  const { ref } = useSmooothy({
    snap: true,
    vertical: true,
    snapStrength: 0.25,
    virtualScroll: {
      mouseMultiplier: 2.5,
      touchMultiplier: 1.8,
      useKeyboard: true,
    },
    onSlideChange: (currentSlide) => {
      
    },
  });

  return (
    <ul className="slider-container" ref={ref}>
      {slides.map((slide, i) => (
        <div key={i} className="slide-box">
          <div className="relative h-full w-full p-8 outline outline-gray-800">
            <div className="h-full w-full outline outline-gray-600" />
            <p className="absolute card_i left-2 top-2 z-10">{i}</p>
          </div>
        </div>
      ))}
    </ul>
  );
}
