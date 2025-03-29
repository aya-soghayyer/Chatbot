// import { useState } from 'react'
import "./App.css";
import "regenerator-runtime/runtime";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./views/Welcome";
import Layout from "./Routes/Layout";
import Login from "./views/Login";
import About from "./views/About";
import SignUp from "./views/SignUp";
import GuestChat from "./views/GuestChat";
import NotFound from "./views/NotFound";
import UserChat from "./views/UserChat";
import GuestChatId from "./views/GuestChatId";
import ProtectedRout from "./utils/ProtectedRout";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import ResetPassword from "./views/ResetPassword";
import ForgetPassword from "./views/ForgetPassword";

function App() {
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
        {
          path: "/chat/id",
          element: <GuestChatId />,
        },
        {
          path: "/forgetpassword",
          element: <ForgetPassword />,
        },
        {
          path: "/userchat",
          element: (
            <ProtectedRout>
              <UserChat />
            </ProtectedRout>
          ),
        },
        {
          path: "/resetpassword",
          element: (
            <ProtectedRout>
              <ResetPassword />
            </ProtectedRout>
          ),
        },
        {
          path: "/admin",
          element: (
            <ProtectedRout>
              <Admin />
            </ProtectedRout>
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
