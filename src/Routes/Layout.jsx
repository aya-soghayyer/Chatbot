// import React from 'react'
import Navbar from "../Compononts/Navbar/Navbar";
import Footer from "../Compononts/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import GuestChatNavbar from "../Compononts/Navbar/GuestChatNavbar";
import AdminNavbar from "../Compononts/Navbar/AdminNavbar";
import UserChatMobileNavbar from "../Compononts/Navbar/UserChatMobileNavbar";

function Layout() {
  const location = useLocation();
  const navbars = {
    "/": <Navbar />,
    "/guestchat": <GuestChatNavbar />,
    "/userchat": <UserChatMobileNavbar/>,
    // "/changepassword": <></>,
    "/admin": <AdminNavbar/>,
    "/admin/courses": <AdminNavbar/>,
    "/admin/students": <AdminNavbar/>,
    "/admin/services": <AdminNavbar/>,
    "/admin/addcourse": <AdminNavbar/>,

    "/chatId": <></>
  };

  const footer ={
    "/": <Footer/>,
    "/guestchat": <></>,
    "/userchat": <></>,
    "/admin": <></>,
    "/admin/courses": <></>,
    "/admin/students": <></>,
    "/admin/services": <></>,
    "/admin/addcourse": <></>,

  }
  return (
    <>
      <div className="bg-primary font-Outfit z-30 min-h-[100vh] flex flex-col overflow-x-hidden">
        {/* <div className="z-50"> */}
        {navbars[location.pathname] || <Navbar />}
        {/* </div> */}
        <div className="flex-1">
        <Outlet className="z-40"/>
        </div>
        <div className="text-white bg-BgFooter">
        {footer[location.pathname] || <Footer />}
        </div>
      </div>
    </>
  );
}

export default Layout;
