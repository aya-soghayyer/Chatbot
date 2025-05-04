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
import StudentRoute from "./utils/StudentRoute.jsx";
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
import PublicRoute from "./utils/PublicRoute.jsx";
import AddCourse from "./Compononts/Header/admin/AddCourse.jsx";
import AdminAddCourse from "./views/AdminAddCourse.jsx";
import AdminRoute from "./utils/AdminRoute.jsx";

export let domainName = "http://18.208.251.97:8000/";
// 18.208.251.97
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
          element:
          (
            <PublicRoute>
            <Login />
            </PublicRoute>
              ),
        },
        {
          path: "/signup",
          element: 
          (
          <PublicRoute>
          <SignUp />
          </PublicRoute>
            ),
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
            <PublicRoute>
            <TokenProvider>
              <ForgetPassword />
            </TokenProvider>
            </PublicRoute>
          ),
        },
        {
          path: "/resetpassword",
          element: (
            <PublicRoute>
            <TokenProvider>
              <ResetPassword />
            </TokenProvider>
            </PublicRoute>
          ),
        },
        // {
        //   path: "/userchat/:chatId",
        //   element: <UserChat chatId={chatId} />,
        // },
        {
          path: `/userchat`,
          element: (
            // <StudentRoute>
              <UserChat chatId={chatId} />
            //  </StudentRoute>
          ),
        },
        {
          path: "/changepassword",
          element: (
          <StudentRoute>
              <ChangePassword />
             </StudentRoute>
          ),
        },
        {
          path: "/admin",
          element: (
            <AdminRoute> 
              <Admin />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/courses",
          element: (
            <AdminRoute> 
              <AdminCourses />
              </AdminRoute> 
            ),
        },
        {
          path: "/admin/students",
          element: (
            <AdminRoute> 
              <AdminAccounts />
              </AdminRoute> 
            ),
        },
        {
          path: "/admin/services",
          element: (
            <AdminRoute> 
              <AdminServices />
              </AdminRoute> 
            ),
        },
        {
          path: "/admin/addcourse",
          element: (
            <AdminRoute> 
              <AdminAddCourse />
            </AdminRoute> 
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
