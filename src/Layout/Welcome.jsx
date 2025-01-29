import React from 'react'
import Circle from "../Compononts/Circle/Circle";
import Footer from "../Compononts/Footer/Footer";
import Header from "../Compononts/Header/Header";
import Navbar from "../Compononts/Navbar/Navbar";
function Welcome() {
  return (

    <>
    <div className="bg-black">
     
        <div className="flex bg-black -mb-8">
          <div className=" flex justify-between">
            <Circle />
          </div>
          <Header />
          <Circle />
        </div>
      </div>
    </>
  )
}

export default Welcome