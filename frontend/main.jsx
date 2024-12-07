// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you use the appropriate version for your setup
import App from "./App"; // Your main app component

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
