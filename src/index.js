import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./variables.css";

import App from "./App";
import MoviesContext from "./contexts/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MoviesContext>
      <App />
    </MoviesContext>
  </BrowserRouter>
);
