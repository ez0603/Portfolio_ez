import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

function HomeRoute(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default HomeRoute;
