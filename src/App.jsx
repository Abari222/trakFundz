import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import SignUp from "./components/auth/SignUp/SignUp";
import Login from "./components/auth/Login/Login";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import ResetPassword from "./components/auth/ResetPassword/ResetPassword";
import PasswordRecovery from "./components/auth/PasswordRecovery/PasswordRecovery";
import PasswordSuccess from "./components/auth/PasswordSuccess/PasswordSuccess";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";
import FeatureOnboard from "./components/pages/FeatureOnboard/FeatureOnboard";
import UserBoard from "./components/pages/UserDashboard/UserDashboard";
import Layout from "./components/layout/Layout";
import Expense from "./components/pages/Expense/Expense";
import BudgetPlanner from "./components/pages/BudgetPlanner/BudgetPlanner";
import DebtManager from "./components/pages/DebtManager/DebtManager"
import ReportInsights from "./components/pages/ReportInsights/ReportInsights"
import Settings from "./components/pages/Settings/Settings"

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/passwordSuccess",
    element: <PasswordSuccess />,
  },
  {
    path: "/featureOnboard",
    element: <FeatureOnboard />,
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    // element: <UserDashboard />,
    children: [
      {
        path: "home",
        element: <UserBoard/>
      },
      {
        path: "expense",
        element: <Expense/>
      },
      {
        path: "budgetplanner",
        element: <BudgetPlanner />
      },
      {
        path: "debtmanager",
        element: <DebtManager />
      },
      {
        path: "reportinsights",
        element: <ReportInsights />
      },
      {
        path: "settings",
        element: <Settings />
      },
    ]
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
