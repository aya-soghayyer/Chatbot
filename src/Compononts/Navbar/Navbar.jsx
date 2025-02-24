import { useState } from "react";
import websiteName from "../../assets/images/Frame 1 (2).png";
import { NavLink } from "react-router-dom";

function Navbar() {
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />;

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="flex space-x-4 font-Outfit"></div>
      <nav className="flex items-center justify-between gap-8 max-w-[1280px] w-[90%] m-auto py-1 text-white  border-b-2 border-slate-500 ">
        <div className="flex items-center w-full 2md:w-fit justify-between">
          <div>
            <NavLink to="/">
            <img
              className=" w-[120px] p-0 sm:w-[300px]"
              src={websiteName}
              alt="MiLo Logo"
            />  
            </NavLink>
          </div>
          <div className="block 2md:hidden">
            <i className="material-icons">menu</i>
          </div>
        </div>
        <div className=" hidden 2md:flex items-end justify-end w-full ">
          <ul className="flex gap-8">
            <div className="relative">
              <div
                className={`absolute bottom-3 left-0 w-full h-[4px]  ${
                  isHovered
                    ? "bg-gradient-to-r scale-90 from-[#6327C9] to-[#21ABDB] rounded-full  "
                    : "hidden"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="font-medium capitalize"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              </div>
            </div>
            <div className="relative">
              <div
                className={`absolute bottom-3 left-0 w-full h-[4px]  ${
                  isHovered3
                    ? "bg-gradient-to-r scale-90 from-[#6327C9] to-[#21ABDB] rounded-full  "
                    : "hidden"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    className="  font-medium capitalize   "
                    to="/Contact"
                  >
                    contact us
                  </NavLink>
                </li>
              </div>
            </div>
            <div className="relative">
              <div
                className={`absolute bottom-3 left-0 w-full h-[4px]  ${
                  isHovered4
                    ? "bg-gradient-to-r scale-90 from-[#6327C9] to-[#21ABDB] rounded-full  "
                    : "hidden"
                }`}
              ></div>
              <div className="p-4">
                <li>
                  <NavLink
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                    className="  font-medium capitalize   "
                    to="/About"
                  >
                    about us
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
