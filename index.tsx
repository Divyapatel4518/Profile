import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Find root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Could not find root element to mount to");

// Create React root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
