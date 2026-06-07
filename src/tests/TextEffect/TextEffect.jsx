import { Pane } from "tweakpane";
import "./texteffect.css";
import { useEffect, useRef } from "react";

const TextEffect = () => {
  const nameRef = useRef(null);
  useEffect(() => {
    const pane = new Pane({
        title: "Duplicate text control panel",
        expanded: true
    });

    const a = pane.addFolder({
      title: "1st shadow",
      expanded: true,
    });
    const b = pane.addFolder({
      title: "2nd shadow",
      expanded: true,
    });
    const c = pane.addFolder({
      title: "3rd shadow",
      expanded: true,
    });
    const d = pane.addFolder({
      title: "4th and 5th shadow",
      expanded: true,
    });

    const PARAMS_A = {
      right: 0,
      down: -11.41,
      blur: "2px",
      color: "#333333",
    };
    const PARAMS_B = {
      right: 0,
      down: -23.80,
      blur: "2px",
      color: "#333333",
    };
    const PARAMS_C = {
      right: 0,
      down: -36.30,
      blur: "2px",
      color: "#333333",
    };
    const PARAMS_D = {
      downd: -49.13,
      downe: -70.00,
    };

    a.addBinding(PARAMS_A, "right", { min: -1, max: 10 });
    a.addBinding(PARAMS_A, "down", { min: -12, max: -3 });
    a.addBinding(PARAMS_A, "blur");
    a.addBinding(PARAMS_A, "color");

    b.addBinding(PARAMS_B, "right", { min: -1, max: 10 });
    b.addBinding(PARAMS_B, "down", { min: -25, max: -3 });
    b.addBinding(PARAMS_B, "blur");
    b.addBinding(PARAMS_B, "color");

    c.addBinding(PARAMS_C, "right", { min: -1, max: 10 });
    c.addBinding(PARAMS_C, "down", { min: -40, max: -20 });
    c.addBinding(PARAMS_C, "blur");
    c.addBinding(PARAMS_C, "color");
    
    d.addBinding(PARAMS_D, "downd", { min: -100, max: -40 });
    d.addBinding(PARAMS_D, "downe", { min: -130, max: -70 });


    pane.on("change", () => {
      nameRef.current.style.setProperty("--right-1", `${PARAMS_A.right}px`);
      nameRef.current.style.setProperty("--down-1", `${PARAMS_A.down}px`);
      nameRef.current.style.setProperty("--blur-1", `${PARAMS_A.blur}`);
      nameRef.current.style.setProperty("--color-1", `${PARAMS_A.color}`);

      nameRef.current.style.setProperty("--right-2", `${PARAMS_B.right}px`);
      nameRef.current.style.setProperty("--down-2", `${PARAMS_B.down}px`);
      nameRef.current.style.setProperty("--blur-2", `${PARAMS_B.blur}`);
      nameRef.current.style.setProperty("--color-2", `${PARAMS_B.color}`);

      nameRef.current.style.setProperty("--right-3", `${PARAMS_C.right}px`);
      nameRef.current.style.setProperty("--down-3", `${PARAMS_C.down}px`);
      nameRef.current.style.setProperty("--blur-3", `${PARAMS_C.blur}`);
      nameRef.current.style.setProperty("--color-3", `${PARAMS_C.color}`);
      
      nameRef.current.style.setProperty("--down-4", `${PARAMS_D.downd}px`);
      nameRef.current.style.setProperty("--down-5", `${PARAMS_D.downe}px`);
    });

    return () => pane.dispose();
  }, []);

  return (
    <section className="txt-wrapper">
      <span ref={nameRef} data-ingredient>
        Grapes
      </span>
    </section>
  );
};

export default TextEffect;
