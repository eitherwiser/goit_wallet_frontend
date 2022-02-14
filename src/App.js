import StatisticsPages from "pages/StatisticsPages/StatisticsPages";
import React, { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/';
import Header from 'components/Header';
import DashboardPage from 'pages/DashboardPage';
import './App.css';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { getAuth } from 'redux/auth/auth-selectors';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  const isAuth = useSelector(getAuth);
  return (
    <>

      <ToastContainer position="top-right" autoClose={3000} />
      {
        !isAuth && (
         <Container>
           <Header />
         </Container>
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            !isAuth ? (
              <Navigate replace to="/dashboardPage" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="login"
          element={
            isAuth ? <Navigate replace to="/dashboardPage" /> : <LoginPage />
          }
        />
        <Route
          path="register"
          element={
            isAuth ? <Navigate replace to="/dashboardPage" /> : <RegisterPage />
          }
        />
        <Route
          path="dashboardPage"
          element={
            !isAuth ? <DashboardPage /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
         <Container>
           <StatisticsPages />
         </Container>
    </>
  );
}
