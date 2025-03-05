import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

function NavbarChat() {
  return (
    <>
      <div>
        <div className="flex justify-between pt-5 px-11">
          <div className="z-40">
            <NavLink to="/">
              <img src={Logo} alt="MiLo Logo" />
            </NavLink>
          </div>
          <div className="">
            <ul className="flex justify-between gap-3">
              <li>
                <NavLink to="/login">
                  <button className="w-full px-6 py-2 rounded-[10px] text-white font-medium capitalize bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] shadow-inner shadow-white">
                    Login
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup">
                  <button className="w-full p-[2px] rounded-[10px] bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] relative">
                    <dev className="rounded-[10px] capitalize font-medium text-white bg-Primary block px-6 py-2">
                      sign up
                    </dev>
                  </button>
                </NavLink>
              </li>
              {/* <button className="px-6 py-2 font-semibold text-white  bg-gradient-to-r from-[#6327C9]  to-[#21ABDB] border-b-4 border-blue-800 rounded hover:bg-gradient-to-r hover:from-[#4b1e98] hover:to-[#187ea0] hover:border-e-cyan-800">
    Button
</button> */}
{/* <button
  className="bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] group w-full h-16 inline-flex transition-all duration-300 overflow-visible p-1 rounded-full group"
>
  <div
    className="w-full h-full bg-[linear-gradient(to_top,#ececec,#fff)] overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300"
  >
    <div
      className="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#101010] bg-[linear-gradient(#f4f4f4,#fefefe)] group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-full black group-hover:text-orange-600"
    >
      Jenson button
    </div>
  </div>
</button> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarChat;
