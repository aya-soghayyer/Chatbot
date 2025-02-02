// import React from 'react'
import Circle from "../Compononts/Circle/Circle";
import Header from "../Compononts/Header/Header";
function Welcome() {
  return (

    <>
    <div className="bg-black">
        <div className=" flex bg-black -mb-8">
          <div className="  flex justify-between">
            <div className="-mt-16 ">
            <Circle />
            </div>
          </div>
          <Header />
          <Circle />
        </div>
      </div>
    </>
  )
}

export default Welcome