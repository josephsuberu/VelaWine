import { Routes, Route } from "react-router-dom";
import App from "../App";
import SliderSection from "../components/SliderSection/SliderSection";
import DropdownMenu from "../tests/DropdownMenu/DropdownMenu";
import TextEffect from "../tests/TextEffect/TextEffect";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/exp/slider" element={<SliderSection />} />
      <Route path="/exp/text-effect" element={<TextEffect />} />
    </Routes>
  );
};

export default Routing;
