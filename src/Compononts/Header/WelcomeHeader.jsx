import Frame from "../../assets/images/Frame.svg";
import { NavLink, Link } from "react-router-dom";

function WelcomeHeader() {
  return (
    <header className="py-8 z-20 font-Outfit text-white md:w-[70rem] 2xl:w-[80rem] 2xl:-mt-16">
      <div className="flex flex-col md:flex-row gap-6 2xl:gap-12 items-center justify-between md:px-4 px-6 2xl:px-7">
        <div className="w-full md:w-3/5 2xl:-ml-28">
          <h2 className="text-5xl md:text-4xl 2xl:text-7xl font-bold mb-4 uppercase leading-tight">
            WELCOME TO MILO chatbot
          </h2>
          <p className="md:text-base text-lg 2xl:text-xl font-light mb-6">
            Welcome to MiLo! Explore a smarter way to navigate university
            resources and get the answers you need. Let’s get started!
          </p>
          <div className="flex flex-col w-full md:flex-row justify-between mt-6 lg:mt-10 gap-4 sm:gap-5">
            <NavLink to="/Login" className="w-full sm:w-1/2">
              <button className="w-full px-4 py-3 rounded-[0.625rem] capitalize bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 text-base lg:text-lg">
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
        <div className="w-full 2xl:w-3/4 md:w-4/5 md:h-full mt-6 md:mt-0">
          <img className="w-full min-w-md mx-auto max-h-svh" src={Frame} alt="computer" />
        </div>
      </div>
    </header>
  );
}

export default WelcomeHeader;