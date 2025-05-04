import React from "react";
import { useState } from "react";
import websiteName from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutScreen, setShowLogoutScreen] = useState(false);
  const handleLogout = () => {
    Cookie.remove("token");
    Cookie.remove("token_expiration");
    localStorage.removeItem("users");
    navigate("/login");
  };

  return (
    <>
      <nav className="flex items-center justify-between py-4 gap-4 md:gap-8 2xl:h-[8rem] max-w-[120rem] w-[90%] mx-auto md:py-2 text-white">
        {/* Logo Section */}
        <div className="flex items-center z-10">
          <Link to="/">
            <img
              className="2xl:w-[15rem] md:w-32 w-[8rem]"
              src={websiteName}
              alt="MiLo Logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
          </button>
          <div
            className={`md:hidden absolute w-44 h-44 text-xl top-[4rem] right-5 bg-darkBlue rounded-md flex-col items-center py-4 font-Outfit z-50 transition-all duration-500 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 scale-y-100"
                : "opacity-0 -translate-y-5 scale-y-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-center gap-7 text-center ">
              <li className="transition-transform duration-300 ease-out hover:scale-125">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-out hover:scale-110">
                <Link
                  to="/contact"
                  className="p-4 border-b-[0.001rem] border-t-[0.001rem]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-out hover:scale-125">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-end justify-end font-Outfit">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className=" rounded-full w-10 h-10 z-40 absolute top-2 right-5 border hover:bg-white/20 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
          </button>
        </div>

        {showMenu && (
          <div className="fixed inset-0 z-20 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
          <div className="absolute w-44 h-fit text-xl top-[3.6rem] right-8 bg-darkBlue rounded-md flex-col items-center font-Outfit z-10 transition-all duration-500 ease-in-out">
            <div className="flex flex-col md:-z-0">
              <button
                onClick={() => {
                  setShowLogoutScreen(true);
                }}
                className="flexitems-center px-7 py-2 w-full text-white text-lg md:text-base md:font-normal 2xl:text-3xl bg-darkBlue hover:bg-darkBlue/75 transition duration-300 ease-in-out rounded-2xl"
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-right-from-bracket"
                  size="lg"
                />
                Logout
              </button>
            </div>
          </div>
          </div>
        )}
        {showLogoutScreen && (
          <div className="fixed inset-0 z-40 bg-black/65 flex items-center justify-center p-4 md:p-6 2xl:p-8">
          <div className="absolute top-7 right-5 z-50 md:w-1/4 md:top-48 md:right-auto bg-darkBlue backdrop-blur-xl rounded-xl px-3">
      <div className="flex justify-between items-center px-4 py-3">
        <h3>Are you sure?</h3>
        <button onClick={() => setShowLogoutScreen(false)}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" shake size="lg" />
        </button>
      </div>
      {/* <hr /> */}
      <div className="flex justify-between md:justify-center">
        <div className="flex justify-between md:justify-center items-center gap-14 font-light px-4 py-5">
          <button
            onClick={handleLogout}
            className="px-3 rounded-xl font-extralight bg-gradient-to-r from-gradientPurple to-gradientSkyBlue"
          >
            Logout
          </button>
        </div>
        <div className="flex justify-between items-center font-light px-4 py-5">
          <button
            onClick={() => {
              setShowLogoutScreen(false);
              setShowMenu(false);
            }}
            className="px-3 rounded-xl font-extralight"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default AdminNavbar;
