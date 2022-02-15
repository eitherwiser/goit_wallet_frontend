import StatisticsPages from "pages/StatisticsPages/StatisticsPages";
import React, { Suspense, useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "components/Container/";
import Header from "components/Header";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import Statistics from "./pages/StatisticsPages/StatisticsPages";
import CurrencyTable from "./components/Currency/Currency";
import Table from "components/TransactionTable/Table";
import useWindowSize from "./hooks/useWindowSize";

import "./App.css";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { getAuth } from "redux/auth/auth-selectors";
import "react-toastify/dist/ReactToastify.min.css";

export default function App() {
  const isAuth = useSelector(getAuth);
  const size = useWindowSize();
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {!isAuth && (
        <Container>
          <Header />
        </Container>
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DashboardPage />
            // !isAuth ? (
            //   <Navigate replace to="/home" />
            // ) : (
            //   <Navigate replace to="/login" />
            // )
            // !isAuth && <Navigate replace to="/login" />
          }
        >
          {/* <Route path="diagram" element={<Statistics />} /> */}
          <Route path="home" element={<Table />} />
          {/*Вместо текста компонент кружочка */}
          <Route path="diagram" element={<span>Кружок со статистикой</span>} />

          <Route
            path="exchangeRates"
            element={
              size.width < 768 ? (
                <CurrencyTable />
              ) : (
                <Navigate replace to="/home" />
              )
            }
          />
        </Route>

        <Route
          path="login"
          element={isAuth ? <Navigate replace to="/home" /> : <LoginPage />}
        />
        <Route
          path="register"
          element={isAuth ? <Navigate replace to="/home" /> : <RegisterPage />}
        />
        {/* <Route
          path="home"
          element={
            !isAuth ? <DashboardPage /> : <Navigate replace to="/login" />
          }
        /> */}
      </Routes>
      {/* <Container>
        <StatisticsPages />
      </Container> */}
    </>
  );
}
