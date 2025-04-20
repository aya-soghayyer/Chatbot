import React from 'react'
import { Link, useLocation } from "react-router-dom";
import book from "../../../assets/images/book.svg" 
import accounts from "../../../assets/images/account.svg" 
import services from "../../../assets/images/services.svg" 


function SideBar() {
    const location = useLocation();
  const isActive = location.pathname === "/admin/courses"; // highlight if active\
  const isActive2 = location.pathname === "/admin/students"; // highlight if active\
  const isActive3 = location.pathname === "/admin/services"; // highlight if active\

  return (
    <>
    <div className='bg-darkBlue h-full md:-ml-16 md:w-1/4 rounded md:z-10 p-4 text-white'>
    <Link to="/admin">
        <h1 className='text-xl font-normal text-slate-300 mb-3 hover:text-white'>Dashboard</h1>
        </Link>
        <ul className='text-lg'>
            <li className='py-2 text-lg font-light'>
            <Link to="/admin/courses" className={`flex items-center gap-4 ${
          isActive
            ? "bg-white bg-opacity-10 border-l-4 -mx-4 px-4 py-2"
            : ""
        }`}>
            <img src={book} alt="book photo" className='' />
            Course data for the current semester</Link>
            </li>
            <li className='py-2 text-lg font-light'>
            <Link to="/admin/students" className={`flex items-center gap-4 ${
          isActive2
            ? "bg-white bg-opacity-10 border-l-4 -mx-4 px-4 py-2"
            : ""
        }`}>
            <img src={accounts} alt="account photo" className='' />
            Student accounts</Link>
            </li>
            <li className='py-2 text-lg
             font-light'>
            <Link to="/admin/services" className={`flex items-center gap-4 ${
          isActive3
            ? "bg-white bg-opacity-10 border-l-4 -mx-4 px-4 py-2"
            : ""
        }`}>
            <img src={services} alt="services photo" />The academic schedule creation service</Link>
            </li>
        </ul>
    </div>
    
    </>
)
}

export default SideBar