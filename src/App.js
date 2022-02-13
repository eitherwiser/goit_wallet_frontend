import React, { Suspense, useEffect, lazy } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import RegisterContainer from "components/RegisterContainer/RegisterContainer";
import LoginForm from "components/LoginForm/LoginForm";
import LoginContainer from "components/LoginContainer/LoginContainer";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import DashboardPage from "pages/DashboardPage";
import "./App.css";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

export default function App() {
  return (
    <>
      {/* <Container>
        <Header />
      </Container> */}
      <LoginPage />
      <RegisterPage />
      <DashboardPage />
    </>
    // <Routes>
    //   <Route
    //     path="login"
    //     element={
    //       <LoginContainer>
    //         <LoginForm />
    //       </LoginContainer>
    //     }
    //   />

    //   <Route
    //     path="register"
    //     element={
    //       <RegisterContainer>
    //         <RegisterForm />
    //       </RegisterContainer>
    //     }
    //   />
    // </Routes>
  );
}
