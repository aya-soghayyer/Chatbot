// import React from "react";
import Circle from "../Compononts/Circle/Circle";
import GuestChatHeader from "../Compononts/Header/GuestChat/GuestChatHeader";

function GuestChat() {
  return (
    <>
      <div className="bg-primary items-center md:flex md:justify-end md:items-center 2xl:h-screen 2xl:flex 2xl:justify-center 2xl:items-center relative">
        <div className="absolute right-3 -top-12 md:-mt-28 md:right-[63rem] 2xl:-left-64 2xl:-top-24">
          <Circle />
        </div>
        <div className=" 2xl:flex 2xl:justify-center md:w-full 2xl:w-11/12 2xl:-mt-16">
          <GuestChatHeader />
        </div>
        <div className="absolute hidden md:inline-flex md:top-16 md:right-32 2xl:visible 2xl:top-40 2xl:right-11">
          <Circle />
        </div>
      </div>
    </>
  );
}

export default GuestChat;
