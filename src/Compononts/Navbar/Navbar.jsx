import { useState } from "react";
import websiteName from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="z-10 flex items-center justify-between py-4 gap-4 md:gap-8 2xl:h-[8rem] max-w-[120rem] w-[90%] mx-auto md:py-2 text-white md:border-b-2 md:border-slate-500">
        {/* Logo Section */}
        <div className="flex items-center z-30">
          <NavLink to="/">
            <img
              className="2xl:w-[15rem] md:w-full w-[10rem]"
              src={websiteName}
              alt="MiLo Logo"
            />
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
           <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
          </button>
          <div
  className={`md:hidden absolute text-2xl top-[5rem] left-0 w-full bg-Primary rounded-md flex-col items-center py-4 font-Outfit z-50 transition-all duration-500 ease-in-out ${
    isMobileMenuOpen
      ? "opacity-100 translate-y-0 scale-y-100"
      : "opacity-0 -translate-y-5 scale-y-95 pointer-events-none"
  }`}
>
  <ul className="flex flex-col items-center gap-4 w-full text-center">
    <li>
      <NavLink
        to="/"
        className="block px-5 py-2 hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full border-b-[0.1rem] border-white transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className="block px-5 py-2 hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full border-b-[0.1rem] border-white transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className="block px-5 py-2 hover:bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full border-b-[0.1rem] border-white transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About Us
      </NavLink>
    </li>
  </ul>
</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end font-Outfit">
          <ul className="flex gap-6 md:gap-6 2xl:gap-8">
            <div className="relative">
              <div
    className={`absolute bottom-3 left-0 w-full h-[0.25rem] 2xl:h-[0.3rem] 2xl:bottom-2 bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full transition-all duration-300 ${
                  isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="md:font-medium md:text-base 2xl:text-3xl capitalize hover:text-gray-200 transition-colors"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              </div>
            </div>

            <div className="relative">
              <div
               className={`absolute bottom-3 left-0 w-full h-[0.25rem] 2xl:h-[0.3rem] 2xl:bottom-2 bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full transition-all duration-300 ${
                  isHovered3 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    className="font-medium 2xl:text-3xl md:text-base capitalize hover:text-gray-200 transition-colors"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </div>
            </div>

            <div className="relative">
              <div
                className={`absolute bottom-3  left-0 w-full h-[0.25rem] 2xl:h-[0.3rem] 2xl:bottom-2 bg-gradient-to-r from-gradientPurple to-gradientSkyBlue rounded-full transition-all duration-300 ${
                  isHovered4 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                    className="font-medium 2xl:text-3xl md:text-base capitalize hover:text-gray-200 transition-colors"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;