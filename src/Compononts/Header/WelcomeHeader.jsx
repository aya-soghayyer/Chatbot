import Frame from "../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import FilledButton from "../ui/FilledButton";
import UnFilledButton from "../ui/UnFilledButton";

function WelcomeHeader() {
  return (
    <header className="py-8 z-20 flex font-Outfit text-white  md:justify-start  2xl:-mt-16">
      <div className="flex flex-col px-6 md:flex-row gap-6 2xl:gap-12 items-center md:px-4 2xl:px-7 relative">
        <div className="w-full z-10 md:w-1/2 md:ml-7 2xl:w-3/5">
          <h2 className="text-5xl md:whitespace-break-spaces md:text-5xl/tight 2xl:text-7xl font-bold mb-4 uppercase leading-tight">
            welcome     to milo chatbot
          </h2>
          <p className="md:text-xl md:font-light text-lg 2xl:text-xl font-light mb-6">
            Welcome to MiLo! Explore a smarter way to navigate university
            resources and get the answers you need. Let’s get started!
          </p>
          <div className="flex flex-col w-full md:pt-16 md:flex-row justify-between mt-6 2xl:mt-10 gap-4 md:gap-5">
            <Link to="/Login" className="w-full hidden md:flex md:w-1/2">
              <FilledButton
                title="login"
                className="px-4 h-5/6 w-full md:mt-1"
              />
            </Link>
            <Link
              to="/Signup"
              className="w-full hidden md:flex md:w-1/2 md:mt-2"
            >
              <UnFilledButton
                title="Sign Up"
                className="px-4 py-3"
                className2="w-full"
              />
            </Link>
          </div>

          <div className="hidden text-base md:text-lg 2xl:text-xl md:flex justify-center my-6 underline underline-offset-2">
            <Link to="/guestchat">Try it as Guest</Link>
          </div>
        </div>

        <div className="z-40 w-4/5 sm:h-full  2xl:w-3/4 md:w-8/12 md:h-full flex flex-col -mt-4 items-center">
          <div className="">
            <img src={Frame} alt="computer" />
          </div>
          {/* Buttons duplicated here only for phone screen, hidden on md+ */}
          <div className="flex flex-col w-full mt-6 gap-4 md:hidden">
            <div className="flex flex-row justify-center gap-5 items-center">
              <Link to="/Login" className="w-full">
                <FilledButton title="login" className="px-4 py-3 w-full" />
              </Link>
              <Link to="/Signup" className="w-full">
                <UnFilledButton
                  title="Sign Up"
                  className="px-4 py-3"
                  className2="w-full"
                />
              </Link>
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
