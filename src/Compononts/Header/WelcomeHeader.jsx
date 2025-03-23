import Frame from "../../assets/images/Frame.svg";
import { NavLink, Link } from "react-router-dom";

function WelcomeHeader() {
  return (
    <header className="py-8 z-20 flex font-Outfit text-white md:w-[70rem] md:justify-start 2xl:w-[80rem] 2xl:-mt-16">
      <div className="flex flex-col px-6 md:flex-row gap-6 2xl:gap-12 items-center md:px-4 2xl:px-7 relative">
        <div className="w-full z-10 md:w-3/5 2xl:w-3/5">
          <h2 className="text-5xl md:text-4xl 2xl:text-7xl font-bold mb-4 uppercase leading-tight">
            WELCOME TO MILO chatbot
          </h2>
          <p className="md:text-base text-lg 2xl:text-xl font-light mb-6">
            Welcome to MiLo! Explore a smarter way to navigate university
            resources and get the answers you need. Let’s get started!
          </p>
          {/* Buttons remain in their original position for all sizes */}
            <div className="flex flex-col w-full md:flex-row justify-between mt-6 2xl:mt-10 gap-4 md:gap-5">
              <NavLink to="/Login" className="w-full hidden md:flex md:w-1/2">
                <button className="hiddent w-full px-4 py-3 rounded-[0.625rem] capitalize bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 text-base 2xl:text-lg">
                  Login
                </button>
              </NavLink>
              <NavLink to="/Signup" className="w-full hidden md:flex md:w-1/2">
                <button className="w-full p-[0.125rem] rounded-[0.625rem] bg-gradient-to-r from-gradientPurple to-gradientSkyBlue relative">
                  <div className="rounded-[0.5rem] capitalize font-medium text-white bg-primary px-4 py-3 text-base 2xl:text-lg">
                    Sign Up
                  </div>
                </button>
              </NavLink>
            </div>
            <div className="hidden text-base md:text-lg 2xl:text-xl md:flex justify-center my-6 underline underline-offset-2">
              <Link to="/guestchat">Try it as Guest</Link>
            </div>
        </div>

        <div className="z-40 w-4/5 sm:h-full  2xl:w-3/4 md:w-8/12 md:h-full flex flex-col -mt-4 items-center">
        <div className="">
        <img  src={Frame} alt="computer" />

        </div>
          {/* Buttons duplicated here only for phone screen, hidden on md+ */}
          <div className="flex flex-col w-full mt-6 gap-4 md:hidden">
            <div className="flex flex-row justify-center gap-5 items-center">
            <NavLink to="/Login" className="w-full">
              <button className="w-full px-4 py-3 rounded-[0.625rem] capitalize bg-gradient-to-r from-gradientPurple to-gradientSkyBlue shadow-inner shadow-slate-400 text-base">
                Login
              </button>
            </NavLink>
            <NavLink to="/Signup" className="w-full">
              <button className="w-full p-[0.125rem] rounded-[0.625rem] bg-gradient-to-r from-gradientPurple to-gradientSkyBlue relative">
                <div className="rounded-[0.5rem] capitalize font-medium text-white bg-primary px-4 py-3 text-base">
                  Sign Up
                </div>
              </button>
            </NavLink>
            </div>
            <div className="text-base flex justify-center my-6 underline underline-offset-2">
              <Link to="/guestchat">Try it as Guest</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default WelcomeHeader;
