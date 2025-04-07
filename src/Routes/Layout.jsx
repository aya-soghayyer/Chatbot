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
    "/userchat": <></>,
    // "/changepassword": <></>,

  };
  return (
    <>
      <div className="bg-primary font-Outfit z-30">
        {/* <div className="z-50"> */}
        {navbars[location.pathname] || <Navbar />}
        {/* </div> */}
        
        <Outlet className="z-40"/>
        <div className="text-white bg-BgFooter">
          <Footer className="z-50"/>
        </div>
      </div>
    </>
  );
}

export default Layout;
