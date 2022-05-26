import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Find all widget divs
const root = ReactDOM.createRoot(document.getElementById('chat_widget'));
root.render(
  <App />
);

