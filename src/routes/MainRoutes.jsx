import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import VideoUpload from "../componets/VideoUpload";

import MainLayout from "../layouts/MainLayout";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
