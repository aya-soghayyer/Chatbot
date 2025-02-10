// import React from 'react'
import Navbar from "../Compononts/Navbar/Navbar";
import Footer from "../Compononts/Footer/Footer";
import { Outlet } from "react-router-dom";

function Routes() {
    return (
    <>
        <div className="bg-black">
            <Navbar />
            <Outlet />
            <div className="text-white mt-20  bg-BgFooter ">
                <Footer />
            </div>
        </div>
    </>
    );
}

export default Routes;
