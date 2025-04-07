import Circle from "../Compononts/Circle/Circle"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChangePasswordHeader from "../Compononts/Header/user/ChangePasswordHeader";

function ChangePassword() {
  return (
    <div className="bg-primary items-center md:h-lvh md:flex md:justify-center md:items-center 2xl:h-screen 2xl:flex 2xl:justify-center 2xl:items-center relative">
    <div className="absolute right-3 -top-12  md:-mt-28 md:right-[63rem] 2xl:-left-64 2xl:-top-24">
      <Circle />
    </div>
    <div className="2xl:flex 2xl:justify-center md:my-7 md:flex md:justify-center  md:w-11/12 2xl:w-11/12 2xl:-mt-16 ">
      <ChangePasswordHeader />
    </div>
    <div className="absolute md:-z-0 hidden md:inline-flex md:top-16 md:right-32 2xl:top-40 2xl:right-11">
      <Circle />
    </div>
  </div>
  )
}

export default ChangePassword