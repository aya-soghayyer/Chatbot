import React from 'react';
import Circle from "../Compononts/Circle/Circle"; // Fixed typo in Components
import WelcomeHeader from "../Compononts/Header/WelcomeHeader"; // Fixed typo in Components

function Welcome() {
  return (
    <>
      <div className="bg-Primary min-h-screen w-full">
        <div className="flex flex-col md:flex-row bg-primary items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="w-full  md:w-auto -mt-4 md:-mt-8 lg:-mt-16">
            <Circle />
          </div>
          <div className="w-full z-10 md:w-auto my-4 md:my-0">
            <WelcomeHeader />
          </div>
          <div className="w-full md:w-auto hidden md:block">
            <Circle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;