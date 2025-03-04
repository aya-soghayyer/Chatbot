// import React from 'react'
import Navbar from "../Compononts/Navbar/Navbar";
import Footer from "../Compononts/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import GuestChatNavbar from "../Compononts/Navbar/GuestChatNavbar";

function Routes() {
    const location = useLocation()
    const navbars = {
        "/": <Navbar/>,
        "/chat": <GuestChatNavbar/>
      } 
    return (
    <>
        <div className="bg-Primary font-Outfit">
        {navbars[location.pathname] || <Navbar />}
            <Outlet />
            <div className="text-white mt-20  bg-BgFooter">
                <Footer />
            </div>
        </div>
    </>
    );
}

export default Routes;
