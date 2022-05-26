import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const widgetDivs = document.querySelectorAll(".chat_widget");
const root = ReactDOM.createRoot(document.getElementById("root"));
widgetDivs.forEach(() => {
  root.render(
    <App />
  );
});
