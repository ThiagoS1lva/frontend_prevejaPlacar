import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./Components/Menu.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
