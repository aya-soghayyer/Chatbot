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
        <div className="-mt-32 flex justify-center">
            <Footer />
        </div>
        </div>
    </>
    );
}

export default Routes;
