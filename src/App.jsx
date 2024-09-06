import React from "react";
import "./App.css"
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage"
import SignUp from "./components/auth/SignUp/SignUp";
import Login from "./components/auth/Login/Login";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword"
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import ResetPassword from "./components/auth/ResetPassword/ResetPassword";
import PasswordRecovery from "./components/auth/PasswordRecovery/PasswordRecovery";
import PasswordSuccess from "./components/auth/PasswordSuccess/PasswordSuccess";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/forgot",
    element: <ForgotPassword/>
  },
  {
    path: "/verify",
    element: <VerifyEmail/>
  },
  {
    path: "/reset",
    element: <ResetPassword/>
  },
  {
    path: "/recovery",
    element: <PasswordRecovery/>
  },
  {
    path: "/passwordSuccess",
    element: <PasswordSuccess/>
  },
  {
    path: "/dashboard",
    element: <UserDashboard/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
