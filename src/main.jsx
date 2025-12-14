import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Stairs from "./components/common/Stairs.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <App />
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
);
