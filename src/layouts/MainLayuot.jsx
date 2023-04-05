import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

function MainLayuot() {
  return (
    <div>
      <Navbar />
      TEST
      <h1>TEST2</h1>
      <h1>TEST3</h1>
      <Outlet />
    </div>
  );
}

export default MainLayuot;
