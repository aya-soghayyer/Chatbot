// import React from "react";
// import {faLinkedinIn} from "@fortawesome/react-fontawesome"
function Footer() {
  return (
    <>
      <div className=" flex justify-between items-center h-14 px-16 ">
        <span className="z-10"> © 2025 – MiLo Chatbot </span>
        <div className="underline underline-offset-1">
          <a href="https://portal.hebron.edu/Default.aspx">
            {" "}
            Hebron University Portal{" "}
          </a>
        </div>
        <div className="z-10 underline underline-offset-1">
          <a className="" href="">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
