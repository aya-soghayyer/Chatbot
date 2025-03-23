import { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarChat() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-6 md:justify-between md:pt-5 md:px-11 text-white">
        <div className="z-40">
          <NavLink to="/">
            <img src={Logo} alt="MiLo Logo" />
          </NavLink>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-40">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
          </button>
          <div
            className={`md:hidden absolute w-44 h-80 text-xl top-[4rem] right-5 bg-darkBlue rounded-md flex-col items-center py-4 font-Outfit z-50 transition-all duration-500 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 scale-y-100"
                : "opacity-0 -translate-y-5 scale-y-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-center gap-7 text-center ">
              <li>
                <NavLink
                  to="/"
                  className="p-3 w-screen hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="p-4 hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue transition-colors duration-300 border-b-[0.001rem] border-t-[0.001rem]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="p-3 hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="p-4 border-b-[0.001rem] border-t-[0.001rem]">
                  <button className="px-3 py-1 md:px-6 md:py-2 rounded-[10px] text-white md:font-medium capitalize bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] shadow-inner shadow-slate-400">
                    Login
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup">
                  <button className="p-[2px] rounded-[10px] bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] relative">
                    <dev className="rounded-[10px] capitalize font-medium text-white bg-primary block px-6 py-2">
                      sign up
                    </dev>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:inline-flex">
          <ul className="flex justify-between gap-3">
            <li>
              <NavLink to="/login">
                <button className="w-full px-3 py-1 m-1 md:px-6 md:py-2 rounded-[10px] text-white md:font-medium capitalize bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] shadow-inner shadow-slate-400">
                  Login
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                <button className="w-full p-[2px] rounded-[10px] bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] relative">
                  <dev className="rounded-[10px] capitalize font-medium text-white bg-primary block px-6 py-2">
                    sign up
                  </dev>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarChat;
