import { useNavigate } from "react-router-dom";
import "./dropdown.css";

const DropdownMenu = () => {
  const componentMeta = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Slider component",
      path: "/exp/slider",
    },
    {
      name: "duplicate text effect",
      path: "exp/text-effect",
    },
    {
      name: "inline detail reveal",
      path: "/exp/inline",
    },
  ];

  const navigate = useNavigate();

  return (
    <select name="dropdown dev navigation" className="dp-box" onChange={(e) => navigate(e.target.value)}>
      {componentMeta.map((cmt, idx) => {
        return (
          <option key={`opt-${idx}`} value={cmt.path}>
            {cmt.name}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownMenu;
