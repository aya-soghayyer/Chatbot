import Frame from "../../assets/images/Frame.svg";
import { NavLink, Link } from "react-router-dom";

function WelcomeHeader() {
  return (
    <header className="wrapper py-4 sm:py-8 lg:py-16 z-50 font-Outfit text-white max-w-full mx-auto">
      <div className="flex flex-col 2md:flex-row gap-6 lg:gap-12 items-center justify-between px-4 sm:px-6">
        <div className="w-full md:w-full mt-6 lg:mt-12 -ml-0 sm:-ml-10 lg:-ml-20">
          <h2 className="text-2xl sm:text-3xl 2md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 uppercase leading-tight">
            WELCOME TO MILO chatbot
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light mb-6">
            Welcome to MiLo! Explore a smarter way to navigate university
            resources and get the answers you need. Let’s get started!
          </p>
          <div className="flex flex-col w-full sm:flex-row justify-between mt-6 lg:mt-10 gap-4 sm:gap-5">
            <NavLink to="/Login" className="w-full sm:w-1/2">
              <button className="w-full px-4 py-3 rounded-[0.625rem] capitalize bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-white text-base lg:text-lg">
                Login
              </button>
            </NavLink>
            <NavLink to="/Signup" className="w-full sm:w-1/2">
              <button className="w-full p-[0.125rem] rounded-[0.625rem] bg-gradient-to-r from-gradientPurple to-gradientSkyBlue relative">
                <div className="rounded-[0.5rem] capitalize font-medium text-white bg-Primary px-4 py-3 text-base lg:text-lg">
                  Sign Up
                </div>
              </button>
            </NavLink>
          </div>
          <div className="text-base sm:text-lg lg:text-xl flex justify-center my-6 underline underline-offset-2">
            <Link to="/guestchat">Try it as Guest</Link>
          </div>
        </div>
        <div className="w-full lg:w-3/4 2md:w-4/5 2md:h-full mt-6 2md:mt-0">
          <img className="w-full min-w-md mx-auto max-h-svh" src={Frame} alt="computer" />
        </div>
      </div>
    </header>
  );
}

export default WelcomeHeader;