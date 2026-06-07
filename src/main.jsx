import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routing from "./Routing/Routing";
import DropdownMenu from "./tests/DropdownMenu/DropdownMenu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />

      {/* persistent page switching controls */}
      <DropdownMenu />
    </BrowserRouter>
  </StrictMode>,
);
