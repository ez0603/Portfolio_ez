import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";

function HomeRoute(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/AboutMe" element={<AboutMePage />} />
      <Route path="/Project" element={<ProjectPage />} />
    </Routes>
  );
}

export default HomeRoute;
