// import React from 'react'
import Navbar from "../Compononts/Navbar/Navbar";
import Footer from "../Compononts/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import GuestChatNavbar from "../Compononts/Navbar/GuestChatNavbar";

function Layout() {
  const location = useLocation();
  const navbars = {
    "/": <Navbar />,
    "/guestchat": <GuestChatNavbar />,
    "/userchat": <GuestChatNavbar />,
  };
  return (
    <>
      <div className="bg-Primary font-Outfit grid grid-rows-[1fr_auto]  min-h-screen">
        {navbars[location.pathname] || <Navbar />}
        <Outlet />
        <div className="text-white bg-BgFooter">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
