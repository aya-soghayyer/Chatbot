import { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FilledButton from "../ui/FilledButton";
import UnFilledButton from "../ui/UnFilledButton";

function NavbarChat() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-6 md:justify-between md:pt-3 md:p-0 md:px-11 text-white">
        <div className="z-40">
          <Link to="/">
            <img src={Logo} alt="MiLo Logo" />
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-10 ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none z-auto"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
          </button>

          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${
              !isMobileMenuOpen
                ? "bg-none"
                : "bg-black/50 z-50 fixed inset-0 flex items-center justify-center p-4"
            } `}
          >
            <div
              className={`md:hidden absolute w-44 h-fit text-xl top-[4rem] right-5 bg-darkBlue rounded-md flex-col items-center py-4 font-Outfit z-50 transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0 scale-y-100"
                  : "opacity-0 -translate-y-5 scale-y-95 pointer-events-none"
              }`}
            >
              <ul className="flex h-fit flex-col items-center gap-3 text-center ">
                <li className="transition-transform duration-300 ease-out hover:scale-125">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl"
                  >
                    Home
                  </Link>
                </li>
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
                <li className="transition-transform duration-300 ease-out hover:scale-110">
                  <Link
                    to="/contact"
                    className="p-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
                <li className="transition-transform duration-300 ease-out hover:scale-125">
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
                <li className="transition-transform duration-300 ease-out hover:scale-125">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <hr className="border-t border-white/30 w-3/4 mx-auto 2xl:mb-8" />
                <li className="transition-transform duration-300 ease-out hover:scale-125">
                  <Link to="/signpu" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:inline-flex">
          <ul className="flex justify-between gap-3">
            <li>
              <Link
                to="/login"
                className="p-4"
              >
                <FilledButton title={"login"} className="px-10 py-2" />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <UnFilledButton
                  title={"signup"}
                  className2=""
                  className="px-9 py-2"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarChat;
