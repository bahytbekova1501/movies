import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

function MainLayuot() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayuot;
