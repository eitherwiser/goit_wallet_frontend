import React, { Suspense, useEffect, lazy } from "react";
// import { useSelector, useDispatch } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "components/Container/";
import Header from "components/Header";
import DashboardPage from "pages/DashboardPage";
import "./App.css";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { getAuth } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import StatisticsPages from "pages/StatisticsPages/StatisticsPages";

export default function App() {
  const isAuth = useSelector(getAuth);
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <StatisticsPages />
      </Container>

      <Routes>
        <Route
          path="login"
          element={isAuth ? <DashboardPage /> : <LoginPage />}
        />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <DashboardPage />
    </>
  );
}
