import React, { Suspense, useEffect, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import useWindowSize from "./hooks/useWindowSize";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import { getAuth, getAuthRefresh, getToken } from "redux/auth/auth-selectors";
import Chart from "components/Chart/Chart";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent.js";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import Table from "components/TransactionTable/Table";

import CurrencyTable from "./components/Currency/Currency";
import VerifyPage from "components/VerifyPage/VerifyPage.jsx";

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
  const token = useSelector(getToken);

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
          <Suspense fallback={<LoaderComponent />}>
            <Routes>
              <Route
                path="login"
                element={isAuth ? <Navigate to="/" /> : <LoginPage />}
                exact
              />
              <Route
                path="/verify/:verificationToken"
                element={<VerifyPage />}
              />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="/"
                element={
                  token !== null ? <DashboardPage /> : <Navigate to="/login" />
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
                <Route path="diagram" element={<Chart />} />{" "}
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
