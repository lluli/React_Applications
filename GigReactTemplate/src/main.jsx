import React from "react";
import ReactDOM from 'react-dom';
// import ReactDOM from "react-dom/client.js";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
