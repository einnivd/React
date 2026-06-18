import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./Test.jsx";
import Ex from "./Ex.jsx";
import Name from "./name.jsx";
import SelectBox from "./SelectBox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test></Test>
    <Ex/>
    <hr />
    <Name></Name>
     <hr />
    <SelectBox></SelectBox>
  </StrictMode>,
);
