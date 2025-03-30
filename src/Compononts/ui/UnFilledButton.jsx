import React from "react";

function UnFilledButton({ title, className="", className2="" }) {
  return (
    <>
      <button
        className={`${className2} p-[0.125rem] rounded-[0.625rem] bg-gradient-to-r from-gradientPurple to-gradientSkyBlue relative 
      transition-all duration-1000 hover:shadow-md hover:shadow-darkBlue hover:brightness-110 hover:scale-105`}
      >
        <div
          className={`rounded-[0.5rem] capitalize font-medium text-white bg-primary text-base 2xl:text-lg ${className}
        transition-all duration-1000 hover:bg-opacity-90`}
        >
          {title}
        </div>
      </button>
    </>
  );
}

export default UnFilledButton;
