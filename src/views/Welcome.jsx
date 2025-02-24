// import React from 'react'
import Circle from "../Compononts/Circle/Circle";
import WelcomeHeader from "../Compononts/Header/WelcomeHeader";
function Welcome() {
  return (
    <>
      <div className="bg-Primary">
        <div className=" flex bg-primary -mb-8">
          <div className="  flex justify-between">
            <div className="-mt-16 ">
              <Circle />
            </div>
          </div>
          <WelcomeHeader />
          <Circle />
        </div>
      </div>
    </>
  );
}

export default Welcome;
