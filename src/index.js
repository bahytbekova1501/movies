import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./variables.css";
import App from "./App";
import MovieContext from "./contexts/MovieContext";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MovieContext>
      <CartContext>
        <AuthContext>
          <App />
        </AuthContext>
      </CartContext>
    </MovieContext>
  </BrowserRouter>
);
