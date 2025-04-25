// import { useState } from 'react'
import "./App.css";
import "regenerator-runtime/runtime";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./views/Welcome";
import Layout from "./Routes/Layout";
import Login from "./views/Login";
import About from "./views/About.jsx";
import SignUp from "./views/SignUp";
import GuestChat from "./views/GuestChat";
import NotFound from "./views/NotFound";
import UserChat from "./views/UserChat";
import ProtectedRout from "./utils/ProtectedRout";
import Contact from "./views/Contact";
import Admin from "./views/AdminDashboard.jsx";
import ChangePassword from "./views/ChangePassword";
import ForgetPassword from "./views/ForgetPassword";
import ResetPassword from "./views/ResetPassword";
import { TokenProvider } from "./store/TokenContext.tsx";
import AdminCourses from "./views/AdminCourses.jsx";
import AdminServices from "./views/AdminServices.jsx";
import AdminAccounts from "./views/AdminAccounts.jsx";
import { useState } from "react";

export let domainName = "http://localhost:8000/";

function App() {
  const [chatId, setChatId] = useState("newchat");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/guestchat",
          element: <GuestChat />,
        },
        // {
        //   path: `/chatId`,
        //   element: <UserChatId />,
        // },
        {
          path: "/forgetpassword",
          element: (
            <TokenProvider>
              <ForgetPassword />
            </TokenProvider>
          ),
        },
        {
          path: "/resetpassword",
          element: (
            <TokenProvider>
              <ResetPassword />
            </TokenProvider>
          ),
        },
        // {
        //   path: "/userchat/:chatId",
        //   element: <UserChat chatId={chatId} />,
        // },
        {
          path: `/userchat`,
          element: (
            <ProtectedRout>
              <UserChat chatId={chatId} />
            </ProtectedRout>
          ),
        },
        {
          path: "/changepassword",
          element: (
            <ProtectedRout>
              <ChangePassword />
            </ProtectedRout>
          ),
        },
        {
          path: "/admin",
          element: (
            // <ProtectedRout>
              <Admin />
            // </ProtectedRout>
          ),
        },
        {
          path: "/admin/courses",
          element: (
            // <ProtectedRout>
              <AdminCourses />
            // </ProtectedRout>
          ),
        },
        {
          path: "/admin/students",
          element: (
            // <ProtectedRout>
              <AdminAccounts />
            // </ProtectedRout>
          ),
        },
        {
          path: "/admin/services",
          element: (
            // <ProtectedRout>
              <AdminServices />
            // </ProtectedRout>
          ),
        },


        {
          path: "*", //another way for the error
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
