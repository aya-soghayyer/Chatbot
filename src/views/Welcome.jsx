import React from 'react';
import Circle from "../Compononts/Circle/Circle"; // Fixed typo in Components
import WelcomeHeader from "../Compononts/Header/WelcomeHeader"; // Fixed typo in Components

function Welcome() {
  return (
    <>
      <div className="bg-Primary w-full">
        <div className="flex flex-col md:flex-row bg-primary items-center justify-between px-4 sm:px-6 lg:px-16">
          <div className="w-full  md:w-auto -mt-4 md:-mt-8 lg:scroll-mt-px">
            <Circle />
          </div>
          <div className="w-screen z-10 md:w-auto md:my-0">
            <WelcomeHeader />
          </div>
          <div className="w-full md:w-auto md:block">
            <Circle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;