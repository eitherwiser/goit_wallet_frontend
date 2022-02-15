import StatisticsPages from "pages/StatisticsPages/StatisticsPages";
import React, { Suspense, useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "components/Container/";
import Header from "components/Header";
import DashboardPage from "pages/DashboardPage/DashboardPage";
//import DashboardPage from 'pages/DashboardPage';
import "./App.css";
import { getAuth } from "redux/auth/auth-selectors";
import "react-toastify/dist/ReactToastify.min.css";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent.js";
import { getAuthRefresh } from "redux/auth/auth-selectors";
import { fetchCurrentUser } from "redux/auth/auth-operations";

const RegisterPage = lazy(() =>
  import(
    "./pages/RegisterPage/RegisterPage" /* webpackChunkName: "RegisterPage" */
  )
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage" /* webpackChunkName: "LoginPage" */)
);

export default function App() {
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
          <ToastContainer autoClose={3000} />
          <Container>
            <Header />
          </Container>

          <Suspense fallback={<LoaderComponent />}>
            <Routes>
              {/* <Route
                exact
                path="/"
                element={
                  !isAuth ? (
                    <Navigate to="/login" />
                  ) : (
                    <Navigate replace to="/dashboardPage" />
                  )
                }
              /> */}
              {/*  <Route
                path="login"
                element={
                  !isAuth ? (
                    <LoginPage />
                  ) : (
                    <Navigate replace to="/dashboardPage" />
                  )
                }
              />
              <Route
                path="register"
                element={!isAuth ? <RegisterPage /> : <Navigate to="/login" />}
              />
              <Route
                path="dashboardPage"
                element={isAuth ?  : <Navigate to="/login" />}
              /> */}
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
            </Routes>
          </Suspense>

          {/* <StatisticsPages /> */}
        </>
      )}
    </>
  );
}
