import React, { Suspense, useEffect, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import useWindowSize from "./hooks/useWindowSize";

import { fetchCurrentUser } from "redux/auth/auth-operations";
import { getAuth, getAuthRefresh } from "redux/auth/auth-selectors";

import LoaderComponent from "./components/LoaderComponent/LoaderComponent.js";
import Container from "components/Container/";
import Header from "components/Header";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import Table from "components/TransactionTable/Table";
import Statistics from "./pages/StatisticsPages/StatisticsPages";
import CurrencyTable from "./components/Currency/Currency";
// import LoginPage from "pages/LoginPage";
// import RegisterPage from "pages/RegisterPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const RegisterPage = lazy(() =>
  import(
    "./pages/RegisterPage/RegisterPage" /* webpackChunkName: "RegisterPage" */
  )
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage" /* webpackChunkName: "LoginPage" */)
);

export default function App() {
  const size = useWindowSize();
  const isAuth = useSelector(getAuth);

  const isAuthRefresh = useSelector(getAuthRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isAuthRefresh && (
        <>
          <ToastContainer autoClose={4000} />
          <Container>
            <Header />
          </Container>

          <Suspense fallback={<LoaderComponent />}>
            <Routes>
              <Route
                path="login"
                element={isAuth ? <Navigate replace to="/" /> : <LoginPage />}
              />

              <Route
                path="register"
                element={
                  !isAuth ? <RegisterPage /> : <Navigate replace to="/login" />
                }
              />

              <Route
                exact
                path="/"
                element={
                  !isAuth ? <Navigate replace to="/login" /> : <DashboardPage />
                }
              >
                <Route path="home" element={<Table />} />
                <Route path="diagram" element={<Statistics />} />{" "}
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
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
