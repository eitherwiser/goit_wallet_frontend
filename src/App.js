import React, { Suspense, useEffect, lazy } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Container from "components/Container/";
import Header from "components/Header";
import DashboardPage from "pages/DashboardPage";
import "./App.css";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import StatisticsPages from "pages/StatisticsPages/StatisticsPages";

export default function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <StatisticsPages />
      </Container>

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <DashboardPage />
    </>
  );
}
