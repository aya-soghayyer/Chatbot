import React from 'react';
import Circle from "../Compononts/Circle/Circle"; // Fixed typo in Components
import WelcomeHeader from "../Compononts/Header/WelcomeHeader"; // Fixed typo in Components

function Welcome() {
  return (
    <>
      <div className="bg-Primary h-full items-center md:h-screen md:flex md:justify-end md:items-center 2xl:h-screen 2xl:flex 2xl:justify-end 2xl:items-center">
          <div className="-mt-28 md:-mt-72 2xl:-mt-[40rem]">
            <Circle />
          </div>
          <div className="z-10 md:w-[140rem] 2xl:w-[150rem] 2xl:-ml-16 2xl:-mt-16">
            <WelcomeHeader />
          </div>

            <Circle />
      </div>
    </>
  );
}

export default Welcome;