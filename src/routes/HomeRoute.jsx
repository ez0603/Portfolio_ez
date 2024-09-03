import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";

function HomeRoute(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/AboutMe" element={<AboutMePage />} />
    </Routes>
  );
}

export default HomeRoute;
