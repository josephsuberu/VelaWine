import { useEffect, useRef, useState } from "react";
import Core from "smooothy";

export function useSmooothy(config) {
  const sliderRef = useRef(null);
  const [slider, setSlider] = useState(null);

  const refCallback = (node) => {
    if (node && !slider) {
      const instance = new Core(node, config);

      // using GPU accelerated raf to update slider
      function animate() {
        instance.update();
        requestAnimationFrame(animate);
      }
      animate();

      setSlider(instance);
    }
    sliderRef.current = node;
  };

  useEffect(() => {
    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, [slider]);

  return { ref: refCallback };
}
