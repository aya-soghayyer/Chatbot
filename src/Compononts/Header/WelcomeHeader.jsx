import Frame from "../../assets/images/Frame.svg";
import { NavLink } from "react-router-dom";
function WelcomeHeader() {
  return (
    <>
      <header className="wrapper py-16  z-50 font-Outfit text-white">
        <div className="flex flex-col pb-32 2md:flex-row gap-30 items-center justify-between">
          <div className="w-full 2md:w-[50%] -ml-20 mt-12">
            <h2 className=" text-4xl 2md:text-6xl line font-bold mb-6 uppercase">
              WELCOME TO MILO chatbot
            </h2>
            <p className="text-xl  font-light">
              Welcome to MiLo! Explore a smarter way to navigate university
              resources and get the answers you need. Let’s get started!
            </p>
            <div className="flex justify-between mt-10   w-full ">
              <span className="w-[50%] mr-5 ">
                <NavLink to="/Login">
                  <button className="w-full mt-10  px-4 py-3 rounded-[10px] capitalize bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] shadow-inner shadow-white">
                    Login
                  </button>
                </NavLink>
              </span>
              <span className="w-[50%]">
                <NavLink to="/Signup">
                <button className="w-full p-[2px] rounded-[10px]  bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] mt-10 relative">
      <dev className="rounded-[10px] capitalize font-medium text-white bg-Primary block px-4 py-3 ">
        sign up
      </dev>
    </button>
                 
                 

                </NavLink>
              </span>
            </div>

            <div className="text-xl flex justify-center my-6 underline underline-offset-2">
              <NavLink to="/chat">Try it as Guest</NavLink>
            </div>
          </div>
          <div className="w-full 2md:w-[50%]">
            <img className="w-full" src={Frame} alt="computer" />
          </div>
        </div>
      </header>
    </>
  );
}

export default WelcomeHeader;
