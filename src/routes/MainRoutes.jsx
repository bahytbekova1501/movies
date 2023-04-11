import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddMoviesPage from "../pages/AddMoviesPage";
import EditMoviesPage from "../pages/EditMoviesPage";
import DetailsPage from "../pages/DetailsPage";
import AuthPage from "../pages/AuthPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMoviesPage />} />
        <Route path="/edit/:id" element={<EditMoviesPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoutes;
