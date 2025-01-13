
function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between gap-8 max-w-[1280px] w-[90%] m-auto py-6 text-white border-b-2 border-opacity-89">
        <div className="flex items-center w-full 2md:w-fit justify-between">
          <div className="w-[120px]  sm:w-[156px]">
            

            {/* <img className="w-full h-2"  src="../../assets/Layer_1.png" alt="logo for milo website" />
              <img className="w-full" src="../../assets/Milo.png" alt="Milo" /> */}
            {/* i will put them as picutures */}
            <h3 className="font-bold">MiLo</h3>
          </div>
          <div className="block 2md:hidden">
            <i className="material-icons">menu</i>
          </div>
        </div>
        <div className=" hidden 2md:flex items-end justify-end w-full ">
          <ul className="flex gap-8">
            <li>
              <a className=" font-medium capitalize" href="">
                Home
              </a>
            </li>
            <li>
              <a className=" font-medium capitalize" href="https://portal.hebron.edu/Default.aspx">
                Portal
              </a>
            </li>
            <li>
              <a className=" font-medium capitalize" href="">
                Contact us
              </a>
            </li>
            <li>
              <a className=" font-medium capitalize" href="">
                About
              </a>
            </li>
          </ul>
          {/* <div className="flex items-center ">
            <a
              className="capitalize bg-primary p-9  rounded-lg text-white py-2 px-3"
              href="">
              Get started
            </a>
          </div> */}
        </div>
        {/* <div className=" w-[50%] h-[1px] bg-[#E5E7EB] opacity-40 px-14 py-1  "></div> */}
      </nav>
      

    </>
  );
}

export default Navbar;
