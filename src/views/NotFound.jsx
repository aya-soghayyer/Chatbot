// import React from 'react'
import Circle from "../Compononts/Circle/Circle.jsx";
import NotFoundHeader from "../Compononts/Header/NotFoundHeader";

function NotFound() {
  return (
    <>
      <div className=" flex -mb-8">
        <div className="  flex justify-between">
          <div className="-mt-16 ">
            <Circle />
          </div>
        </div>
        <NotFoundHeader />
        <Circle />
      </div>
    </>
  );
}

export default NotFound;
