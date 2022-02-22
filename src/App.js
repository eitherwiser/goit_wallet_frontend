import React, { Suspense, useEffect, lazy } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import useWindowSize from "./hooks/useWindowSize";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import { getAuth, getAuthRefresh } from "redux/auth/auth-selectors";
import Chart from "components/Chart/Chart";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent.js";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import Table from "components/TransactionTable/Table";
import AppBackground from "components/AppBackground";

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
          <AppBackground>
            <Suspense fallback={<LoaderComponent />}>
              <Routes>
                <Route
                  exact
                  path="login"
                  element={isAuth ? <Navigate to="/" /> : <LoginPage />}
                />
                <Route
                  exact
                  path="register"
                  element={isAuth ? <Navigate to="/" /> : <RegisterPage />}
                />

                <Route
                  path="/"
                  element={
                    isAuth ? (
                      <DashboardPage />
                    ) : (
                      <Navigate replace to="/login" />
                    )
                  }
                >
                  <Route index element={<Navigate replace to="/home" />} />
                  <Route path="home" element={<Table />} />
                  <Route path="diagram" element={<Chart />} />
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
                  path="verify/:verificationToken"
                  element={<VerifyPage />}
                />

                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <span>There's nothing here!</span>
                      <br />
                      <span>
                        <Link to={"/"}>Return</Link>
                      </span>
                    </main>
                  }
                />
              </Routes>
            </Suspense>
          </AppBackground>
        </>
      )}
    </>
  );
}
