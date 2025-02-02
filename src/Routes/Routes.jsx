// import React from 'react'
import Navbar from "../Compononts/Navbar/Navbar";
import Footer from "../Compononts/Footer/Footer";
import { Outlet } from "react-router-dom";

function Routes() {
    return (
    <>
        <div className="bg-black z-10">
            <Navbar />
            <Outlet />
            <div className="text-white   bg-BgFooter ">
                <Footer />
            </div>
        </div>
    </>
    );
}

export default Routes;
