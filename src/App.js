import React, { Suspense, useEffect, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { fetchCurrentUser } from "redux/auth/auth-operations";
import { getAuth, getAuthRefresh } from "redux/auth/auth-selectors";
import LoaderComponent from "components/LoaderComponent";
import AppBackground from "components/AppBackground";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const CurrencyTable = lazy(() => import("components/Currency/Currency"));
const Chart = lazy(() => import("components/Chart"));
const Table = lazy(() => import("components/TransactionTable"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const VerifyPage = lazy(() => import("pages/VerifyPage/VerifyPage.jsx"));

export default function App() {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 767px)" });
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
                      isMobileOrTablet ? (
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
