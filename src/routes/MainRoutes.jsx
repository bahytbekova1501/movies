import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayuot from "../layouts/MainLayuot";
import HomePage from "../pages/HomePage";
import VideoUpload from "../componets/VideoUpload";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayuot />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
